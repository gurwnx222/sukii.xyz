"use client";
import { useState } from "react";

const ArticleCard = ({
  articleTitle = "Untitled Article",
  description = "",
  maxHeight = "500px", // Configurable max height
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
      <style jsx>{`
        .custom-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: #64748b transparent;
        }

        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }

        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
          border-radius: 10px;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: #64748b;
          border-radius: 10px;
          border: 2px solid transparent;
          background-clip: content-box;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background-color: #94a3b8;
        }

        .custom-scrollbar::-webkit-scrollbar-corner {
          background: transparent;
        }
      `}</style>

      <div className="w-full bg-slate-800 border border-slate-600 rounded-lg overflow-hidden transition-all duration-300 ease-in-out shadow-lg">
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

        {/* Expandable Content with smooth height transition and scrollable area */}
        <div
          className={`border-t border-slate-600 bg-slate-800 transition-all duration-300 ease-in-out overflow-hidden ${
            isExpanded && hasContent ? "opacity-100" : "max-h-0 opacity-0"
          }`}
          style={{
            maxHeight: isExpanded && hasContent ? maxHeight : "0px",
          }}
        >
          {hasContent && (
            <div
              className="custom-scrollbar overflow-y-auto h-full"
              style={{ maxHeight: maxHeight }}
            >
              <div className="p-6">
                {/* Handle both string descriptions and React components */}
                {typeof description === "string" ? (
                  <div className="text-slate-300 text-sm leading-relaxed whitespace-pre-wrap">
                    {description}
                  </div>
                ) : (
                  // Render React component directly
                  <div className="text-slate-300 text-sm leading-relaxed">
                    {description}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default ArticleCard;
