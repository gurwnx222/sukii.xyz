import ModuleCard from "./ModuleCard";

const ModuleList = ({ modules = [] }) => {
  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-2">
          {modules.map((module, index) => (
            <ModuleCard
              key={index}
              moduleNumber={module.moduleNumber}
              moduleTitle={module.moduleTitle}
              lectureCount={module.lectureCount}
              duration={module.duration}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ModuleList;
