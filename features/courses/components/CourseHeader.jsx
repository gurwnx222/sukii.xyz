"use client";
import React from "react";
import { Check } from "lucide-react";

export default function CourseHeader({
  courseName,
  courseDescription,
  courseTags,
}) {
  return (
    <div className="flex flex-col items-center justify-center px-4">
      {/* Course Name Section */}
      <div className="w-full max-w-3xl bg-slate-900 border border-slate-800 rounded-lg p-3 mt-25 md:p-4 md:mt-8">
        <h1 className="text-lg md:text-2xl lg:text-3xl font-normal text-white leading-tight text-center md:text-left">
          {courseName}
        </h1>
      </div>

      {/* Description Section - Hidden on small screens */}
      <div className="hidden md:block w-full max-w-3xl bg-slate-900 border border-slate-800 rounded-lg p-4 mt-4 mb-8">
        <div className="space-y-6">
          <h2 className="text-lg md:text-xl lg:text-2xl font-normal text-white mb-8">
            Course Overview
          </h2>

          <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-4xl mb-8">
            {courseDescription}
          </p>

          {/* Course Tags */}
          <div className="flex flex-wrap gap-4 md:gap-6">
            {courseTags.map((tag, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className="flex-shrink-0 w-5 h-5 bg-emerald-500 rounded-full flex items-center justify-center">
                  <Check className="w-3 h-3 text-white" strokeWidth={3} />
                </div>
                <span className="text-white text-sm md:text-base font-normal">
                  {tag}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile-only tags section */}
      <div className="block md:hidden w-full max-w-3xl bg-slate-900 border border-slate-800 rounded-lg p-3 mt-2 mb-4">
        <div className="flex flex-wrap gap-2 justify-center">
          {courseTags.map((tag, index) => (
            <div key={index} className="flex items-center gap-1.5">
              <div className="flex-shrink-0 w-4 h-4 bg-emerald-500 rounded-full flex items-center justify-center">
                <Check className="w-2.5 h-2.5 text-white" strokeWidth={3} />
              </div>
              <span className="text-white text-xs font-normal">{tag}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
