"use client";
import React from "react";
import { Check } from "lucide-react";

export default function CourseHeader({
  courseName,
  courseDescription,
  courseTags,
}) {
  return (
    <div className="w-full">
      {/* Course Name Section */}
      <div className="bg-slate-900 border border-slate-800 rounded-lg p-4 m-8">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-normal text-white leading-tight">
          {courseName}
        </h1>
      </div>

      {/* Description Section */}
      <div className="bg-slate-900 border border-slate-800 rounded-lg p-4 m-8">
        <div className="space-y-6">
          <h2 className="text-lg md:text-1xl lg:text-2xl font-normal text-white mb-8">
            Description
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
    </div>
  );
}
