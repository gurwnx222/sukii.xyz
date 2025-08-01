import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import orbitalLogo from "@/public/logos/orbital-logo-4.png";

// Custom TikTok icon component since it's not available in Lucide
const TikTokIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-8">
        {/* Main footer content */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mb-8">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Image
              src={orbitalLogo || "/placeholder.svg"}
              alt="Orbital Logo"
              width={120}
              height={40}
              className="h-10 w-auto"
            />
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap items-center justify-center gap-8 text-lg font-medium">
            <Link
              href="/"
              className="hover:text-gray-300 transition-colors duration-200"
            >
              Home
            </Link>
            <Link
              href="/courses"
              className="hover:text-gray-300 transition-colors duration-200"
            >
              Courses
            </Link>
            <Link
              href="/about"
              className="hover:text-gray-300 transition-colors duration-200"
            >
              About Us
            </Link>
            <Link
              href="/blog"
              className="hover:text-gray-300 transition-colors duration-200"
            >
              Blog
            </Link>
            <Link
              href="/contacts"
              className="hover:text-gray-300 transition-colors duration-200"
            >
              Contacts
            </Link>
          </nav>

          {/* Social Media Icons */}
          <div className="flex items-center gap-4">
            <Link
              href="#"
              className="hover:text-gray-300 transition-colors duration-200"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </Link>
            <Link
              href="#"
              className="hover:text-gray-300 transition-colors duration-200"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </Link>
            <Link
              href="https://www.tiktok.com/@nuru_labs"
              className="hover:text-gray-300 transition-colors duration-200"
              aria-label="TikTok"
            >
              <TikTokIcon className="w-5 h-5" />
            </Link>
            <Link
              href="#"
              className="hover:text-gray-300 transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </Link>
            <Link
              href="#"
              className="hover:text-gray-300 transition-colors duration-200"
              aria-label="YouTube"
            >
              <Youtube className="w-5 h-5" />
            </Link>
          </div>
        </div>

        {/* Horizontal separator */}
        <div className="border-t border-gray-800 mb-6"></div>

        {/* Bottom section */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-gray-400">
          <span>© 2025 Nuru Labs. All rights reserved.</span>
          <div className="flex items-center gap-4">
            <Link
              href="#"
              className="hover:text-white transition-colors duration-200 underline underline-offset-2"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="hover:text-white transition-colors duration-200 underline underline-offset-2"
            >
              Terms of Service
            </Link>
            <Link
              href="#"
              className="hover:text-white transition-colors duration-200 underline underline-offset-2"
            >
              Cookies Settings
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
