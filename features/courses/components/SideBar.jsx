import {
  ChevronRight,
  LogOut,
  Building2,
  Users,
  Database,
  Shield,
} from "lucide-react";
import Logo from "@/public/logos/orbital-logo-full.svg";
import Image from "next/image";

export default function SideBar() {
  return (
    <div className="w-80 h-screen bg-[#0f1221] flex flex-col p-6">
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
        {/* CCSA */}
        <div className="hover:bg-slate-800 transition-colors duration-200 rounded-lg p-4 flex items-center justify-between cursor-pointer group">
          <div className="flex items-center space-x-3">
            <Shield className="w-5 h-5 text-white" />
            <span className="text-white font-medium text-lg">CCSA</span>
          </div>
          <ChevronRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform duration-200" />
        </div>

        {/* PASI */}
        <div className="hover:bg-slate-800 transition-colors duration-200 rounded-lg p-4 flex items-center justify-between cursor-pointer group">
          <div className="flex items-center space-x-3">
            <Building2 className="w-5 h-5 text-gray-300" />
            <span className="text-gray-300 font-medium text-lg">PASI</span>
          </div>
          <ChevronRight className="w-5 h-5 text-gray-400 group-hover:translate-x-1 transition-transform duration-200" />
        </div>

        {/* CASI */}
        <div className="hover:bg-slate-800 transition-colors duration-200 rounded-lg p-4 flex items-center justify-between cursor-pointer group">
          <div className="flex items-center space-x-3">
            <Users className="w-5 h-5 text-gray-300" />
            <span className="text-gray-300 font-medium text-lg">CASI</span>
          </div>
          <ChevronRight className="w-5 h-5 text-gray-400 group-hover:translate-x-1 transition-transform duration-200" />
        </div>

        {/* BASI */}
        <div className="hover:bg-slate-800 transition-colors duration-200 rounded-lg p-4 flex items-center justify-between cursor-pointer group">
          <div className="flex items-center space-x-3">
            <Database className="w-5 h-5 text-gray-300" />
            <span className="text-gray-300 font-medium text-lg">BASI</span>
          </div>
          <ChevronRight className="w-5 h-5 text-gray-400 group-hover:translate-x-1 transition-transform duration-200" />
        </div>

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
