"use client";
import { useState } from "react";

const ArticleCard = ({
  articleTitle = "Untitled Article",
  description = "",
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const safeArticleTitle = String(articleTitle || "Untitled Article");
  const hasContent =
    description &&
    (typeof description === "string" ? description.trim() : true);

  const handleCardClick = () => {
    // Only toggle if there's article content to show
    if (hasContent) {
      setIsExpanded(!isExpanded);
    }
  };

  return (
    // Added consistent margin and max-width to match ModuleList layout
    <div className="w-full max-w-4xl mx-auto px-15 mb-6">
      <div className="w-full bg-slate-800 border border-slate-600 rounded-lg overflow-hidden transition-all duration-300 ease-in-out">
        {/* Header - Clickable */}
        <div
          className={`p-4 transition-colors duration-200 ${
            hasContent
              ? "hover:bg-slate-700 cursor-pointer"
              : "hover:bg-slate-800"
          }`}
          onClick={handleCardClick}
        >
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <h3 className="text-white font-medium text-lg">
                {safeArticleTitle}
              </h3>
            </div>
            {/* Added dropdown arrow for consistency */}
            {hasContent && (
              <div className="ml-4">
                <svg
                  className={`w-5 h-5 text-slate-400 transform transition-transform duration-300 ${
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
              </div>
            )}
          </div>
        </div>

        {/* Expandable Content with smooth height transition */}
        <div
          className={`border-t border-slate-600 bg-slate-800 transition-all duration-300 ease-in-out overflow-hidden ${
            isExpanded && hasContent
              ? "max-h-screen opacity-100"
              : "max-h-0 opacity-0"
          }`}
        >
          {hasContent && (
            <div className="p-6">
              {/* Handle both string descriptions and React components */}
              {typeof description === "string" ? (
                <p className="text-slate-300 text-sm mb-4 leading-relaxed">
                  {description}
                </p>
              ) : (
                // Render React component directly
                description
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
