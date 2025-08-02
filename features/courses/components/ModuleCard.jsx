"use client";

const ModuleCard = ({
  moduleNumber = 0,
  moduleTitle = "Untitled Module",
  lectureCount = 0,
  duration = "0 min",
}) => {
  // Ensure consistent data types
  const safeModuleNumber = Number(moduleNumber) || 0;
  const safeLectureCount = Number(lectureCount) || 0;
  const safeModuleTitle = String(moduleTitle || "Untitled Module");
  const safeDuration = String(duration || "0 min");

  return (
    <div className="bg-slate-800 border border-slate-200 rounded-lg p-4 mb-3 hover:bg-slate-800 transition-colors duration-200">
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
          <svg
            className="w-4 h-4 text-slate-400"
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
      </div>
    </div>
  );
};

export default ModuleCard;
