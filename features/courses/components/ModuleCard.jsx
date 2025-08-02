const ModuleCard = ({ moduleNumber, moduleTitle, lectureCount, duration }) => {
  return (
    <div className="bg-slate-800 border border-slate-200 rounded-lg p-4 mb-3 hover:bg-slate-800 transition-colors duration-200">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <h3 className="text-white font-medium text-lg">
            {String(moduleNumber).padStart(2, "0")}. {moduleTitle}
          </h3>
        </div>

        <div className="flex items-center gap-6 text-slate-300">
          <span className="text-sm font-medium">
            {lectureCount} lecture{lectureCount !== 1 ? "s" : ""}
          </span>

          <span className="text-sm font-medium">{duration}</span>

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
