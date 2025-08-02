"use client";
import React from "react";
import CourseHeader from "../components/CourseHeader";
import ModuleList from "../components/ModuleList";

export default function PASI() {
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
          courseName="PASI"
          courseDescription="Learn the fundamentals of PASI."
          courseTags={["PASI", "Certification", "Cloud"]}
        />
        <ModuleList modules={moduleData} />
      </div>
    </div>
  );
}
