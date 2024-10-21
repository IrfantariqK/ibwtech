import { MapPin, Phone, Mail } from "lucide-react";

export default function ContactUs() {
  return (
    <div>
      <h3 className="mb-4 text-lg font-semibold">Contact Us</h3>
      <ul className="space-y-2">
        <li className="flex items-center space-x-2">
          <MapPin className="w-4 h-4" />
          <span>123 Business St, Tech City, TC 12345</span>
        </li>
        <li className="flex items-center space-x-2">
          <Phone className="w-4 h-4" />
          <span>+1 (555) 123-4567</span>
        </li>
        <li className="flex items-center space-x-2">
          <Mail className="w-4 h-4" />
          <span>info@ibwteam.com</span>
        </li>
      </ul>
    </div>
  );
}
