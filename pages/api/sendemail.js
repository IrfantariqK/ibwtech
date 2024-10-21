import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ message: "Please fill out all fields" });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "ibwteams@gmail.com", // Your Gmail address
        pass: "qfnb syhn ceaj rhww", // Your app-specific password
      },
    });

    try {
      const mailOptions = {
        from: email,
        to: "ibwteams@gmail.com",
        subject: `New Contact Form Submission from ${name}`,
        text: `You have received a new message from ${name} (${email}):\n\n${message}`,
      };

      await transporter.sendMail(mailOptions);
      return res
        .status(200)
        .json({ message: "Email sent successfully! We really in 42hrs " });
    } catch (error) {
      return res.status(500).json({ message: "Failed to send email", error });
    }
  } else {
    return res.status(405).json({ message: "Method not allowed" });
  }
}
