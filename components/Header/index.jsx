import { Brain } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-10 py-4 text-white bg-purple-800 shadow">
      <div className="container flex items-center justify-between mx-auto">
        <div className="flex flex-col items-start">
          {/* Flex column for title and tagline */}
          <div className="flex items-center">
            <Brain className="w-8 h-8 mr-2" />
            <h1 className="text-2xl font-bold">IBWTECH</h1>
          </div>
          <p className="text-sm">International Business Work</p>{" "}
          {/* Tagline */}
        </div>

        {/* Navigation for Desktop */}
        <nav className="hidden space-x-4 md:flex">
          <Link
            href="#"
            className="font-bold transition duration-200 hover:underline"
          >
            Home
          </Link>
          <Link
            href="#services"
            className="font-bold transition duration-200 hover:underline"
          >
            Services
          </Link>
          <Link
            href="#about"
            className="font-bold transition duration-200 hover:underline"
          >
            About
          </Link>
          <Link
            href="#team"
            className="font-bold transition duration-200 hover:underline"
          >
            Team
          </Link>
          <Link
            href="#careers"
            className="font-bold transition duration-200 hover:underline"
          >
            Careers
          </Link>
          <Link
            href="#contact"
            className="font-bold transition duration-200 hover:underline"
          >
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="p-2 text-white md:hidden focus:outline-none"
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="bg-purple-700 md:hidden">
          <ul className="flex flex-col items-center py-4">
            <li className="py-2">
              <Link
                href="#services"
                className="font-bold transition duration-200 hover:underline"
              >
                Services
              </Link>
            </li>
            <li className="py-2">
              <Link
                href="#about"
                className="font-bold transition duration-200 hover:underline"
              >
                About
              </Link>
            </li>
            <li className="py-2">
              <Link
                href="#team"
                className="font-bold transition duration-200 hover:underline"
              >
                Team
              </Link>
            </li>
            <li className="py-2">
              <Link
                href="#careers"
                className="font-bold transition duration-200 hover:underline"
              >
                Careers
              </Link>
            </li>
            <li className="py-2">
              <Link
                href="#contact"
                className="font-bold transition duration-200 hover:underline"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
