"use client";
import React from "react";
import CourseHeader from "../components/CourseHeader";
import ModuleList from "../components/ModuleList";
import ArticleCard from "../components/ArticleCard";
import ArticlePASI from "../components/articles/ArticlePASI";
import ArticleTwoPASI from "../components/articles/ArticleTwoPASI";
import ArticleThreePASI from "../components/articles/ArticleThreePASI";
import ArticleFourPASI from "../components/articles/ArticleFourPASI";

export default function PASI() {
  const firstArticle = {
    articleTitle: "Article 0.1 - PASI",
    description: <ArticlePASI />,
  };
  const secondArticle = {
    articleTitle: "Article 0.2 - PASI",
    description: <ArticleTwoPASI />,
  };
  const thirdArticle = {
    articleTitle: "Article 0.3 - PASI",
    description: <ArticleThreePASI />,
  };
  const fourthArticle = {
    articleTitle: "Article 0.4 - PASI",
    description: <ArticleFourPASI />,
  };
  const firstModule = [
    {
      moduleNumber: 1,
      moduleTitle: "Introduction to POS VS POW",
      lectureCount: 1,
      duration: "2:17 min",
      videoTitle: "Getting Started with POS VS POW.",
      description: "Learn the fundamentals of POS VS POW.",
      iframeLink:
        "https://www.youtube.com/embed/QvDw5znReAg?si=RMTmgn0XDWKk8p64",
    },
  ];
  const secondModule = [
    {
      moduleNumber: 2,
      moduleTitle: "Introduction to Rust and Solidity",
      lectureCount: 1,
      duration: "1:12 min",
      videoTitle: "Getting Started with Rust and Solidity.",
      description: "Learn the fundamentals of Rust and Solidity.",
      iframeLink:
        "https://www.youtube.com/embed/73KiSPcw6io?si=kCt2h8G_ixQQj5D-",
    },
  ];
  const thirdModule = [
    {
      moduleNumber: 3,
      moduleTitle: "Introduction to Communication Strategy",
      lectureCount: 1,
      duration: "1:12 min",
      videoTitle: "Getting Started with Communication Strategy.",
      description: "Learn the fundamentals of Communication Strategy.",
      iframeLink:
        "https://www.youtube.com/embed/cwDp6mX3xE8?si=o3mIT6M_1tXXPn5f",
    },
  ];
  const forthModule = [
    {
      moduleNumber: 4,
      moduleTitle: "Knowledge Article Updates",
      lectureCount: 1,
      duration: "2:10 min",
      videoTitle: "Getting Started with Knowledge Article Updates.",
      description: "Knowledge Article Updates.",
      iframeLink:
        "https://www.youtube.com/embed/ZL35WW8VGUk?si=nR-PEbCd29OllkWt",
    },
  ];
  const fifthModule = [
    {
      moduleNumber: 5,
      moduleTitle: "Introduction to Security in blockchain explained",
      lectureCount: 1,
      duration: "1:12 min",
      videoTitle: "Getting Started with Security in blockchain explained.",
      description: "Learn the fundamentals Security in blockchain explained.",
      iframeLink:
        "https://www.youtube.com/embed/xTJWH8Ayrak?si=xV1XpXGgbnWqvYSz",
    },
  ];
  const sixthModule = [
    {
      moduleNumber: 6,
      moduleTitle: "Introduction to Designing Secure Architectures",
      lectureCount: 1,
      duration: "1:39 min",
      videoTitle: "Getting Started with Designing Secure Architectures.",
      description: "Learn the fundamentals Designing Secure Architectures.",
      iframeLink:
        "https://www.youtube.com/embed/aZ3dDZ8hh1M?si=LXLJt0q0EtwvN0sB",
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
        <ModuleList modules={firstModule} />
        <ModuleList modules={secondModule} />
        <ModuleList modules={thirdModule} />
        <ModuleList modules={forthModule} />
        <ModuleList modules={fifthModule} />
        <ModuleList modules={sixthModule} />
      </div>
    </div>
  );
}
