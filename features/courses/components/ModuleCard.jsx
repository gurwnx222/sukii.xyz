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
  const safeDuration = String(duration || "");
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
    // Updated container to match ArticleCard exactly
    <div className="flex flex-col items-center justify-center px-4 mb-4 md:mb-6">
      <div className="w-93 sm:w-full max-w-3xl bg-slate-800 border border-slate-600 rounded-lg overflow-hidden transition-all duration-300 ease-in-out shadow-lg">
        {/* Header - Clickable with responsive design */}
        <div
          className={`p-3 md:p-4 transition-colors duration-200 ${
            safeIframeLink
              ? "hover:bg-slate-700 cursor-pointer"
              : "hover:bg-slate-800"
          }`}
          onClick={handleCardClick}
        >
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <h3 className="text-white font-medium text-sm md:text-lg lg:text-xl leading-tight">
                {String(safeModuleNumber).padStart(2, "0")}. {safeModuleTitle}
              </h3>
            </div>
            <div className="flex items-center gap-3 md:gap-6 text-slate-300">
              {/* Hide lecture count and duration on mobile */}
              <span className="hidden md:inline text-sm font-medium">
                {safeLectureCount} lecture{safeLectureCount !== 1 ? "s" : ""}
              </span>
              <span className="hidden md:inline text-sm font-medium">
                {safeDuration}
              </span>
              {safeIframeLink && (
                <svg
                  className={`w-4 h-4 md:w-5 md:h-5 text-slate-400 transition-transform duration-300 ease-in-out ${
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

        {/* Expandable Content with smooth height transition and responsive design */}
        <div
          className={`border-t border-slate-600 bg-slate-800 transition-all duration-300 ease-in-out overflow-hidden ${
            isExpanded && safeIframeLink
              ? "max-h-screen opacity-100"
              : "max-h-0 opacity-0"
          }`}
        >
          {safeIframeLink && (
            <div className="p-4 md:p-6">
              {/* Video Title with responsive typography */}
              {safeVideoTitle && (
                <h4 className="text-white font-semibold text-base md:text-xl lg:text-2xl mb-2 md:mb-3 leading-tight">
                  {safeVideoTitle}
                </h4>
              )}
              {/* Description with improved readability */}
              {safeDescription && (
                <p className="text-slate-300 text-sm md:text-base mb-3 md:mb-4 leading-relaxed md:leading-loose">
                  {safeDescription}
                </p>
              )}
              {/* YouTube Video Embed - Responsive aspect ratio */}
              <div
                className="relative w-full rounded-lg overflow-hidden"
                style={{ paddingBottom: "56.25%" }}
              >
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
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
    </div>
  );
};

export default ModuleCard;
