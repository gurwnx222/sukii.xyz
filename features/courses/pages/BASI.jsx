"use client";
import React from "react";
import CourseHeader from "../components/CourseHeader";
import ModuleList from "../components/ModuleList";
import ArticleCard from "../components/ArticleCard";
import ArticleBASI from "../components/articles/ArticleBASI";

export default function BASI() {
  const firstArticle = {
    articleTitle: "Syllabus - Blockchain Technology",
    description: <ArticleBASI />,
  };

  const firstModule = [
    {
      moduleNumber: 1,
      moduleTitle: "Introduction to Blockchain Technology",
      lectureCount: 1,
      duration: "4:12 min",
      videoTitle: "Getting Started with Blockchain Technology",
      description: "Learn the fundamentals of Blockchain Technology.",
      iframeLink:
        "https://www.youtube.com/embed/7w-P8Q7L56Q?si=j0-6YPi2TyQfp24x",
    },
  ];

  const secondModule = [
    {
      moduleNumber: 2,
      moduleTitle: "Introduction to security and wallet drains",
      lectureCount: 1,
      duration: "1:11 min",
      videoTitle: "Security and wallet drains",
      description: "Learn the fundamentals of security and wallet drains.",
      iframeLink:
        "https://www.youtube.com/embed/kuOT23_xIek?si=tnkNRyA2cGZIeteu",
    },
  ];

  const thirdModule = [
    {
      moduleNumber: 3,
      moduleTitle: "Introduction to DEFI and Core Concepts",
      lectureCount: 1,
      duration: "2:23 min",
      videoTitle: "Communication Strategy",
      description: "Learn the fundamentals of DEFI and Core Concepts.",
      iframeLink:
        "https://www.youtube.com/embed/ncimQe8Plkk?si=9gZ9HjL6pxnaDczA",
    },
  ];

  const forthModule = [
    {
      moduleNumber: 4,
      moduleTitle: "Introduction to Service Strategy",
      lectureCount: 1,
      duration: "2:31 min",
      videoTitle: "Getting Started with Service Strategy",
      description: "Learn the fundamentals of Service Strategy.",
      iframeLink:
        "https://www.youtube.com/embed/4S7AUItbPhA?si=kyIqt2fa5mcvWr9j",
    },
  ];

  const fifthModule = [
    {
      moduleNumber: 5,
      moduleTitle: "Introduction to Blockchain Technology",
      lectureCount: 1,
      duration: "4:12 min",
      videoTitle: "Getting Started with Blockchain Technology",
      description: "Learn the fundamentals of Blockchain Technology.",
      iframeLink:
        "https://www.youtube.com/embed/ulQNH-WeWzc?si=CSyYBm800mhZyAG1",
    },
  ];

  return (
    <div className="min-h-screen w-full bg-slate-900 overflow-y-auto">
      <div className="w-full h-full flex flex-col">
        <CourseHeader
          courseName="BASI - Blockchain Solutions Architect"
          courseDescription="The Blockchain Analytics and Solutions Architecture (BASI) course provides a comprehensive understanding of blockchain technology, data analytics, and system architecture. It covers key concepts such as decentralized applications, smart contracts, security frameworks, and blockchain-based solutions. This vendor-neutral course is designed to prepare you for the BASI certification exam."
          courseTags={[
            "Blockchain Analyst",
            "Application Engineer",
            "Blockchain Engineer",
            "Blockchain Developer",
          ]}
        />
        <ArticleCard
          articleTitle={firstArticle.articleTitle}
          description={firstArticle.description}
        />
        <ModuleList modules={firstModule} />
        <ModuleList modules={secondModule} />
        <ModuleList modules={thirdModule} />
        <ModuleList modules={forthModule} />
        <ModuleList modules={fifthModule} />
      </div>
    </div>
  );
}
