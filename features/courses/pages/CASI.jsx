"use client";
import React from "react";
import CourseHeader from "../components/CourseHeader";
import ModuleList from "../components/ModuleList";
import ArticleCard from "../components/ArticleCard";
import ArticleCASI from "../components/articles/ArticleCASI";
import ArticleTwoCASI from "../components/articles/ArticleTwoCASI";
import ArticleThreeCASI from "../components/articles/ArticleThreeCASI";
import ArticleFourCASI from "../components/articles/ArticleFourCASI";
import ArticleFifthCASI from "../components/articles/ArticleFifthCASI";

export default function CASI() {
  const firstArticle = {
    articleTitle: "Article 0.1 - CASI",
    description: <ArticleCASI />,
  };
  const secondArticle = {
    articleTitle: "Article 0.2 - CASI",
    description: <ArticleTwoCASI />,
  };
  const thirdArticle = {
    articleTitle: "Article 0.3 - CASI",
    description: <ArticleThreeCASI />,
  };
  const fourthArticle = {
    articleTitle: "Article 0.4 - CASI",
    description: <ArticleFourCASI />,
  };
  const fifthArticle = {
    articleTitle: "Article 0.5 - CASI",
    description: <ArticleFifthCASI />,
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
        <ArticleCard
          articleTitle={secondArticle.articleTitle}
          description={secondArticle.description}
        />
        <ArticleCard
          articleTitle={thirdArticle.articleTitle}
          description={thirdArticle.description}
        />
        <ArticleCard
          articleTitle={fourthArticle.articleTitle}
          description={fourthArticle.description}
        />
        <ArticleCard
          articleTitle={fifthArticle.articleTitle}
          description={fifthArticle.description}
        />
        <ModuleList modules={firstModule} />
        <ModuleList modules={secondModule} />
      </div>
    </div>
  );
}
