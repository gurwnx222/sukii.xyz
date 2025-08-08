"use client";
import React from "react";
import CourseHeader from "../components/CourseHeader";
import ModuleList from "../components/ModuleList";

export default function PASI() {
  const moduleData = [
    {
      moduleNumber: 1,
      moduleTitle: "Introduction to Security in blockchain",
      lectureCount: 1,
      duration: "45 min",
      videoTitle: "Getting Started with Security in blockchain.",
      description: "Learn the fundamentals of Security in blockchain.",
      iframeLink:
        "https://www.youtube.com/embed/nb_fFj_0rq8?si=8RN11PeoXzCTURUK",
    },
  ];

  return (
    <div className="min-h-screen w-full bg-slate-900 overflow-y-auto">
      <div className="w-full h-full flex flex-col">
        <CourseHeader
          courseName="PASI - Project Application & Solution Integration"
          courseDescription="The Project Analytics Specialist and Integration (PASI) course provides essential skills in project analysis, data-driven decision-making, and system integration. It covers key concepts in project management, performance metrics, and analytical tools to optimize workflows. This vendor-neutral course is designed to prepare you for the PASI certification exam."
          courseTags={["Team Lead", "Project Coordinator"]}
        />
        <ModuleList modules={moduleData} />
      </div>
    </div>
  );
}
