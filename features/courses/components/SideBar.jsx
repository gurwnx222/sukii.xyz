import {
  ChevronRight,
  LogOut,
  Building2,
  Users,
  Database,
  Shield,
  Computer,
  Code,
  Cloud,
  Blocks,
} from "lucide-react";
import Logo from "@/public/logos/orbital-logo-full.svg";
import Image from "next/image";
import Link from "next/link";

export default function SideBar() {
  const navLinks = [
    { name: "CCSA", icon: Computer, href: "/courses/categories/CCSA" },
    { name: "PASI", icon: Code, href: "/courses/categories/PASI" },
    { name: "CASI", icon: Cloud, href: "/courses/categories/CASI" },
    { name: "BASI", icon: Blocks, href: "/courses/categories/BASI" },
  ];

  return (
    <div className="fixed left-0 top-0 w-80 h-screen bg-[#0f1221] flex flex-col p-6 z-50">
      {/* Logo Section */}
      <div className="flex justify-center mb-12">
        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
          <div className="w-12 h-12 bg-[#0f1221] rounded-full flex items-center justify-center">
            <div className="text-white text-xl font-bold">
              <Image className="w-8 h-8" src={Logo} alt="Logo" />
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="flex-1 space-y-4">
        {navLinks.map((link) => {
          const IconComponent = link.icon;
          return (
            <Link
              key={link.name}
              href={link.href}
              className="hover:bg-slate-800 transition-colors duration-200 rounded-lg p-4 flex items-center justify-between cursor-pointer group"
            >
              <div className="flex items-center space-x-3">
                <IconComponent className="w-5 h-5 text-gray-400" />
                <span className="text-white font-medium text-lg">
                  {link.name}
                </span>
              </div>
              <ChevronRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          );
        })}

        {/* Donate Button */}
        <div className="mt-8">
          <button className="w-full bg-purple-600 hover:bg-purple-700 transition-colors duration-200 rounded-lg p-4 text-white font-medium text-lg">
            Donate
          </button>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="space-y-2 mt-8">
        {/* Log out */}
        <div className="hover:bg-slate-800 transition-colors duration-200 rounded-lg p-3 flex items-center space-x-3 cursor-pointer">
          <LogOut className="w-5 h-5 text-gray-400" />
          <span className="text-gray-400 font-medium">Log out</span>
        </div>
      </div>
    </div>
  );
}
