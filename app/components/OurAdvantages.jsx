"use client";

import Rocket from "@/public/courses-feature-images/rocket 2.png";
import Image from "next/image";

export default function OurAdvantages() {
  const advantages = [
    {
      title: "Free & Accessible Learning",
      description:
        "All courses and certifications are completely free, making high-quality education accessible to everyone.",
    },
    {
      title: "Diverse Course Offerings",
      description:
        "Gain expertise in systems analytics, project coordination, blockchain analytics, security implementation, and more.",
    },
    {
      title: "Career Growth & Job Opportunities",
      description:
        "Whether you're looking to upskill, switch careers, or create job opportunities, our training helps you stand out in the global tech industry.",
    },
  ];

  return (
    <>
      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }

        @keyframes gradient-shift {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient-shift 2s ease-in-out infinite;
        }
      `}</style>

      <section className="relative min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 py-16 px-4 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-1 h-1 bg-white rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-20 w-1 h-1 bg-white rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-32 left-1/4 w-1 h-1 bg-white rounded-full animate-pulse delay-500"></div>
          <div className="absolute top-60 left-1/3 w-1 h-1 bg-white rounded-full animate-pulse delay-700"></div>
          <div className="absolute bottom-20 right-1/3 w-1 h-1 bg-white rounded-full animate-pulse delay-300"></div>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Heading moved to top */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
              Our advantages
            </h2>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {advantages.map((advantage, index) => (
              <div
                key={index}
                className="group relative bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 lg:p-8 transition-all duration-300 hover:transform hover:scale-105 overflow-hidden"
              >
                {/* Animated border gradient */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500 via-cyan-400 to-purple-500 animate-spin-slow"></div>
                  <div className="absolute inset-[2px] rounded-2xl bg-slate-800/90 backdrop-blur-sm"></div>
                </div>

                {/* Static border for non-hover state */}
                <div className="absolute inset-0 border border-slate-700/50 rounded-2xl group-hover:opacity-0 transition-opacity duration-300"></div>

                {/* Subtle inner glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-cyan-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10">
                  {/* Rocket Icon */}
                  <div className="mb-6">
                    <div className="w-12 h-12 relative group-hover:scale-110 transition-transform duration-300">
                      <Image
                        src={Rocket || "/placeholder.svg"}
                        alt="Rocket icon"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl lg:text-2xl font-bold text-white mb-4 leading-tight group-hover:text-purple-100 transition-colors duration-300">
                    {advantage.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-300 leading-relaxed text-sm lg:text-base group-hover:text-slate-200 transition-colors duration-300">
                    {advantage.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
