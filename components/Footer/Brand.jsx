import { Brain } from "lucide-react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Brand() {
  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-2">
        <Brain className="w-8 h-8" />
        <span className="text-2xl font-bold">IBWTECH</span>
      </div>
      <p className="text-sm">
        Empowering businesses with intelligent solutions for international
        growth and success.
      </p>
      <div className="flex space-x-4">
        {["Facebook", "Twitter", "LinkedIn", "Instagram"].map((platform) => (
          <a
            key={platform}
            href="#"
            className="transition-colors hover:text-purple-300"
          >
            {platform === "Facebook" && <FaFacebook className="w-5 h-5" />}
            {platform === "Twitter" && <FaTwitter className="w-5 h-5" />}
            {platform === "LinkedIn" && <FaLinkedin className="w-5 h-5" />}
            {platform === "Instagram" && <FaInstagram className="w-5 h-5" />}
          </a>
        ))}
      </div>
    </div>
  );
}
