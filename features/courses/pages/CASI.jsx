"use client";
import React from "react";
import CourseHeader from "../components/CourseHeader";
import ModuleList from "../components/ModuleList";

export default function CASI() {
  const moduleData = [
    {
      moduleNumber: 1,
      moduleTitle: "Introduction to React",
      lectureCount: 5,
      duration: "45 min",
      videoTitle: "Getting Started with React Components",
      description:
        "Learn the fundamentals of React components and how to build your first interactive application.",
      iframeLink:
        "https://www.youtube.com/embed/nb_fFj_0rq8?si=8RN11PeoXzCTURUK",
    },
  ];

  return (
    <div className="min-h-screen w-full bg-slate-900 overflow-y-auto">
      <div className="w-full h-full flex flex-col">
        <CourseHeader
          courseName="CASI - Certified Advanced Security Implementor"
          courseDescription="The Certified Advanced Security Implementor (CASI) course provides in-depth training on advanced security concepts, risk management, and secure system implementation. It covers critical topics such as threat mitigation, encryption, compliance, and secure network architecture. This vendor-neutral course is designed to prepare you for the CASI certification exam."
          courseTags={[
            "Security Admin",
            "Security Architect",
            "Security Engineer",
            "Technical Analyst",
            "Security Engineer",
          ]}
        />
        <ModuleList modules={moduleData} />
      </div>
    </div>
  );
}
