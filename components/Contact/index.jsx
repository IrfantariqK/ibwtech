import React, { useState } from "react";
import Button from "../ui/Button";
import { Label } from "../ui/Label";
import { Input } from "../ui/Input";
import { Textarea } from "../ui/Textarea";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateEmail(formData.email)) {
      setStatus("Please enter a valid email address.");
      return;
    }

    setStatus("Sending...");
    setLoading(true);

    try {
      const response = await fetch("/api/sendemail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus(
          "Message sent successfully! I'll be connecting with you via email in 42 hours. Looking forward to our conversation!"
        );
        setFormData({ name: "", email: "", message: "" }); // Clear form
      } else {
        setStatus("Failed to send message. Please try again later.");
      }
    } catch (error) {
      setStatus("An error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="bg-white py-60">
      <div className="container px-4 mx-auto">
        <h2 className="mb-12 text-5xl font-bold text-center text-purple-800">
          Contact Us
        </h2>
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
          <div className="mb-4">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <Button type="submit" disabled={loading}>
            {loading ? "Sending..." : "Send Message"}
          </Button>
        </form>
        {status && <p className="mt-4 text-center text-purple-800">{status}</p>}
      </div>
    </section>
  );
}
