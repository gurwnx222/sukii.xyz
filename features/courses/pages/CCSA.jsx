"use client";
import React from "react";
import CourseHeader from "../components/CourseHeader";
import ModuleList from "../components/ModuleList";

export default function CCSA() {
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
        <ModuleList modules={firstModule} />
        <ModuleList modules={secondModule} />
        <ModuleList modules={thirdModule} />
        <ModuleList modules={forthModule} />
        <ModuleList modules={fifthModule} />
      </div>
    </div>
  );
}
