"use client";
import { useState } from "react";

const ModuleCard = ({
  moduleNumber = 0,
  moduleTitle = "Untitled Module",
  lectureCount = 0,
  duration = "0 min",
  videoTitle = "",
  description = "",
  iframeLink = "",
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Ensure consistent data types
  const safeModuleNumber = Number(moduleNumber) || 0;
  const safeLectureCount = Number(lectureCount) || 0;
  const safeModuleTitle = String(moduleTitle || "Untitled Module");
  const safeDuration = String(duration || "0 min");
  const safeVideoTitle = String(videoTitle || "");
  const safeDescription = String(description || "");
  const safeIframeLink = String(iframeLink || "");

  const handleCardClick = () => {
    // Only toggle if there's video content to show
    if (safeIframeLink) {
      setIsExpanded(!isExpanded);
    }
  };

  return (
    <div className="w-full bg-slate-800 border border-slate-600 rounded-lg overflow-hidden transition-all duration-300 ease-in-out">
      {/* Header - Clickable */}
      <div
        className={`p-4 transition-colors duration-200 ${
          safeIframeLink
            ? "hover:bg-slate-700 cursor-pointer"
            : "hover:bg-slate-800"
        }`}
        onClick={handleCardClick}
      >
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <h3 className="text-white font-medium text-lg">
              {String(safeModuleNumber).padStart(2, "0")}. {safeModuleTitle}
            </h3>
          </div>
          <div className="flex items-center gap-6 text-slate-300">
            <span className="text-sm font-medium">
              {safeLectureCount} lecture{safeLectureCount !== 1 ? "s" : ""}
            </span>
            <span className="text-sm font-medium">{safeDuration}</span>
            {safeIframeLink && (
              <svg
                className={`w-4 h-4 text-slate-400 transition-transform duration-300 ease-in-out ${
                  isExpanded ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            )}
          </div>
        </div>
      </div>

      {/* Expandable Content with smooth height transition */}
      <div
        className={`border-t border-slate-600 bg-slate-800 transition-all duration-300 ease-in-out overflow-hidden ${
          isExpanded && safeIframeLink
            ? "max-h-screen opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        {safeIframeLink && (
          <div className="p-6">
            {/* Video Title */}
            {safeVideoTitle && (
              <h4 className="text-white font-semibold text-xl mb-3">
                {safeVideoTitle}
              </h4>
            )}
            {/* Description */}
            {safeDescription && (
              <p className="text-slate-300 text-sm mb-4 leading-relaxed">
                {safeDescription}
              </p>
            )}
            {/* YouTube Video Embed */}
            <div
              className="relative w-full"
              style={{ paddingBottom: "56.25%" }}
            >
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-lg"
                src={safeIframeLink}
                title={safeVideoTitle || safeModuleTitle}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ModuleCard;
