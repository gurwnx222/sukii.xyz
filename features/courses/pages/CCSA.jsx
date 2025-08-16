"use client";
import React from "react";
import CourseHeader from "../components/CourseHeader";
import ModuleList from "../components/ModuleList";
import ArticleCard from "../components/ArticleCard";
import ArticleCCSA from "../components/articles/ArticleCCSA";
export default function CCSA() {
  const firstArticle = {
    articleTitle: "Syllabus - Certified Computer Systems Analyst",
    description: <ArticleCCSA />,
  };
  const firstModule = [
    {
      moduleNumber: 1,
      moduleTitle: "Getting Started with the World of Computing",
      lectureCount: 1,
      duration: "9:17 min",
      videoTitle: "Computers: The Starter Guide",
      description:
        "Explore the history of computers from back in the earlier times to the modern more sophisticated computing machines.",
      iframeLink:
        "https://www.youtube.com/embed/KlfNSVwjLK0?si=dZkcPl219vsULlzY",
    },
  ];
  const secondModule = [
    {
      moduleNumber: 2,
      moduleTitle: "Understand AWS Cloudwatch",
      lectureCount: 1,
      duration: "8:34 min",
      videoTitle: "Understand Basics of Cloudwatch: a logging AWS service",
      description:
        "In this video, explore Cloudwatch a powerful feature of the AWS cloud services for monitoring your applications at much deeper level.",
      iframeLink:
        "https://www.youtube.com/embed/W-zT93mp5UM?si=srvd6k5rdPBNHsHj",
    },
  ];
  const thirdModule = [
    {
      moduleNumber: 3,
      moduleTitle: "Understand AWS Cloudwatch",
      lectureCount: 1,
      duration: "2:54 min",
      videoTitle: "Remote Desktop: A widely adopted computing method",
      description:
        "In this video, get the basic understanding of the remote desktop",
      iframeLink:
        "https://www.youtube.com/embed/zvhJAOcMRJ4?si=vF1VtzNirKtVd7L1",
    },
  ];
  const forthModule = [
    {
      moduleNumber: 4,
      moduleTitle: "Bash Scripting",
      lectureCount: 1,
      duration: "4:14 min",
      videoTitle: "Understand Bash Scripting.",
      description:
        "Learn what is bash scripting? , how it works? and the art of writing good scripts.",
      iframeLink:
        "https://www.youtube.com/embed/zvhJAOcMRJ4?si=vF1VtzNirKtVd7L1",
    },
  ];
  const fifthModule = [
    {
      moduleNumber: 5,
      moduleTitle: "Virtual Local Area Network",
      lectureCount: 1,
      duration: "2:38 min",
      videoTitle: "Get fundamentals of Virtual Local Area Network (vLAN)",
      description: "Learn about vLAN and how it works?",
      iframeLink:
        "https://www.youtube.com/embed/1X8xmAjhuXw?si=MzgJfo5MkBRD9v3U",
    },
  ];
  const sixthModule = [
    {
      moduleNumber: 6,
      moduleTitle: "Transmition Control Protocol (TCP) and IP",
      lectureCount: 1,
      duration: "1:38 min",
      videoTitle: "TCP IP Model and its layers",
      description: "Learn about vLAN and how it works?",
      iframeLink:
        "https://www.youtube.com/embed/UAJ7fG2lyGY?si=9hCNiy1EdqFkKZzI",
    },
  ];
  const seventhModule = [
    {
      moduleNumber: 7,
      moduleTitle: "Open System Interconnection (OSI) model",
      lectureCount: 1,
      duration: "2:18 min",
      videoTitle: "OSI model",
      description: "Learn about OSI model and how it works?",
      iframeLink:
        "https://www.youtube.com/embed/KiTbmr5i6ZY?si=t91tbWoKE5NM9BfP",
    },
  ];
  const eighthModule = [
    {
      moduleNumber: 8,
      moduleTitle: "Network Toplogies",
      lectureCount: 1,
      duration: "1:23 min",
      videoTitle: "Network Topoligies",
      description: "Learn about Network Topoligies and how it works?",
      iframeLink:
        "https://www.youtube.com/embed/9ebbwQUKyHI?si=JJrDlkI6uUtkRwBa",
    },
  ];
  const ninthModule = [
    {
      moduleNumber: 9,
      moduleTitle: "OSI model comparision",
      lectureCount: 1,
      duration: "0:40 min",
      videoTitle: "Comparison with the OSI Model",
      description: "comparison with the OSI Model and how it different?",
      iframeLink:
        "https://www.youtube.com/embed/9ebbwQUKyHI?si=JJrDlkI6uUtkRwBa",
    },
  ];

  return (
    <div className="min-h-screen w-full bg-slate-900 overflow-y-auto">
      <div className="w-full h-full flex flex-col">
        <CourseHeader
          courseName="CCSA - Certified Computer Systems Analyst"
          courseDescription="The Certified Computer Systems Analyst (CCSA) course equips you with essential skills for a career as a Systems Analyst. It covers fundamental concepts in network management, hardware, software, and basic cloud tools. This vendor-neutral course is designed to prepare you for the CCSA certification exam."
          courseTags={[
            "Service Desk",
            "System Analyst",
            "Jr Network Admin",
            "Jr Cloud Admin",
            "Jr Security Admin",
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
        <ModuleList modules={sixthModule} />
        <ModuleList modules={seventhModule} />
        <ModuleList modules={eighthModule} />
        <ModuleList modules={ninthModule} />
      </div>
    </div>
  );
}
