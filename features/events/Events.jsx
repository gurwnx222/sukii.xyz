import React from "react";
import Header from "@/components/Header";
import EventCard from "./components/EventCard";
export default function EventsPage() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-900 overflow-hidden">
      <div className="absolute inset-0">
        <Header />
        {/* Main Content */}
        <div className="pt-24 pb-12 px-6">
          <div className="max-w-7xl mx-auto">
            {/* Page Title */}
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 text-balance drop-shadow-lg">
                Discover Amazing Events
              </h1>
              <p className="text-white/80 text-lg max-w-2xl mx-auto text-balance drop-shadow-sm">
                Connect, learn, and grow with our curated selection of premium
                events
              </p>
            </div>
            <EventCard />
          </div>
        </div>
      </div>
    </div>
  );
}
