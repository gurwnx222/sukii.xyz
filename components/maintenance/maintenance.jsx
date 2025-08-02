"use client";

import React, { useState, useEffect } from "react";
import {
  Clock,
  Mail,
  Twitter,
  Github,
  Wrench,
  Cog,
  AlertCircle,
} from "lucide-react";
import Header from "@/components/Header";
export default function UnderMaintenance({ page = "" }) {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  // Update time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString("en-US", {
      hour12: false,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          {/* Floating particles */}
          <div className="absolute top-20 left-10 w-2 h-2 bg-purple-400 rounded-full opacity-60 animate-pulse" />
          <div className="absolute top-40 right-20 w-3 h-3 bg-blue-400 rounded-full opacity-40 animate-bounce" />
          <div className="absolute bottom-40 left-20 w-2 h-2 bg-pink-400 rounded-full opacity-50 animate-pulse" />
          <div className="absolute top-60 left-1/3 w-1 h-1 bg-white rounded-full opacity-70 animate-ping" />
          <div className="absolute bottom-60 right-1/3 w-2 h-2 bg-cyan-400 rounded-full opacity-60 animate-bounce" />

          {/* Gradient orbs */}
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-600/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-600/15 rounded-full blur-3xl animate-pulse" />
        </div>

        <div className="relative z-10 container mx-auto px-4 py-8 min-h-screen flex flex-col">
          {/* Header with animated icons */}
          <div className="text-center mb-8 pt-8">
            <div className="flex justify-center items-center gap-4 mb-6">
              <Wrench
                className="w-8 h-8 text-purple-400 animate-spin"
                style={{ animationDuration: "3s" }}
              />
              <Cog
                className="w-10 h-10 text-blue-400 animate-spin"
                style={{
                  animationDuration: "4s",
                  animationDirection: "reverse",
                }}
              />
              <AlertCircle className="w-8 h-8 text-pink-400 animate-pulse" />
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 tracking-tight">
              Under
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                {" "}
                Maintenance
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-2 max-w-2xl mx-auto leading-relaxed">
              We're working hard to improve your experience
            </p>

            <p className="text-gray-400 text-lg mb-8">
              The {page} page is currently under maintenance. We apologize for
              the inconvenience and appreciate your patience.
            </p>
          </div>

          {/* Main content area */}
          <div className="flex-1 flex flex-col justify-center items-center max-w-4xl mx-auto w-full">
            {/* Status card */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-8 mb-12 w-full max-w-2xl shadow-2xl">
              <div className="text-center mb-6">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <Clock className="w-6 h-6 text-purple-400" />
                  <span className="text-white font-semibold text-lg">
                    Current Time
                  </span>
                </div>
                <div className="text-3xl md:text-4xl font-mono text-white mb-2">
                  {formatTime(currentTime)}
                </div>
                <div className="text-gray-300">
                  {currentTime.toLocaleDateString("en-US", {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </div>
              </div>

              <div className="border-t border-white/20 pt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-center">
                  <div>
                    <div className="text-2xl font-bold text-purple-400 mb-1">
                      ~ 6 Days
                    </div>
                    <div className="text-gray-300 text-sm">Estimated Time</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-blue-400 mb-1">
                      99.9%
                    </div>
                    <div className="text-gray-300 text-sm">Uptime Record</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <footer className="text-center pt-8 pb-4">
            <p className="text-gray-500 text-sm">
              © 2025 Nuru Labs. We'll be back soon!
            </p>
          </footer>
        </div>
      </div>
    </>
  );
}
