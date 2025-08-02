"use client";
import ModuleCard from "./ModuleCard";

const ModuleList = ({ modules = [] }) => {
  return (
    <div className="flex-1 bg-slate-900 p-0 sm:p-6 lg:p-8">
      <div className="max-w-8xl mx-auto flex flex-col items-center justify-center">
        <div className="w-3xl space-y-2">
          {modules.map((module) => (
            <ModuleCard
              key={`module-${module.moduleNumber}-${module.moduleTitle}`}
              moduleNumber={module.moduleNumber}
              moduleTitle={module.moduleTitle}
              lectureCount={module.lectureCount}
              duration={module.duration}
              videoTitle={module.videoTitle}
              description={module.description}
              iframeLink={module.iframeLink}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ModuleList;
