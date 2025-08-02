import React from "react";
import CourseHeader from "../components/CourseHeader";
import ModuleList from "../components/ModuleList";

export default function CCSA() {
  const moduleData = [
    {
      moduleNumber: 1,
      moduleTitle: "Module",
      lectureCount: 3,
      duration: "25 min",
    },
    {
      moduleNumber: 2,
      moduleTitle: "Module",
      lectureCount: 3,
      duration: "25 min",
    },
    {
      moduleNumber: 3,
      moduleTitle: "Module",
      lectureCount: 3,
      duration: "25 min",
    },
    {
      moduleNumber: 4,
      moduleTitle: "Module",
      lectureCount: 3,
      duration: "25 min",
    },
  ];
  return (
    <>
      <CourseHeader
        courseName="CCSA"
        courseDescription="Learn the fundamentals of CCSA."
        courseTags={["CCSA", "Certification", "Cloud"]}
      />
    </>
  );
}
