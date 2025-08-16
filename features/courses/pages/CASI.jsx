"use client";
import React from "react";
import CourseHeader from "../components/CourseHeader";
import ModuleList from "../components/ModuleList";
import ArticleCard from "../components/articles/ArticleCard";

export default function CASI() {
  const firstArticle = {
    articleTitle: "Understanding Keyloggers",
    description: "An overview of keyloggers and their implications.",
  };
  const firstModule = [
    {
      moduleNumber: 1,
      moduleTitle: "Build keylogger",
      lectureCount: 1,
      duration: "45:12 min",
      videoTitle: "Unedited keylogger video",
      description: "Learn about keylogger coding.",
      iframeLink:
        "https://www.youtube.com/embed/Y4lffXLnb0Q?si=HH8HwF2Ua77PP24v",
    },
  ];
  const secondModule = [
    {
      moduleNumber: 2,
      moduleTitle: "Introduction to Create a Blockchain 01 Made with Clipchamp",
      lectureCount: 1,
      duration: "45:09 min",
      videoTitle: "Edited Create a Blockchain 01 Made with Clipchamp",
      description: "Learn to create a Blockchain 01 Made with Clipchamp",
      iframeLink:
        "https://www.youtube.com/embed/UGdbC93w7r0?si=ELmb7xK7qWoky0st",
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
        <ArticleCard
          articleTitle={firstArticle.articleTitle}
          description={firstArticle.description}
        />
        <ModuleList modules={firstModule} />
        <ModuleList modules={secondModule} />
      </div>
    </div>
  );
}
