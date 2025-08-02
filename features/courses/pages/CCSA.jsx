"use client";
import React from "react";
import CourseHeader from "../components/CourseHeader";
export default function CCSA() {
  return (
    <>
      <div className="w-full h-screen" style={{ backgroundColor: "#0f1221" }}>
        <CourseHeader
          courseName="CCSA"
          courseDescription="Learn the fundamentals of CCSA."
          courseTags={["CCSA", "Certification", "Cloud"]}
        />
      </div>
    </>
  );
}
