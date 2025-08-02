import SideBar from "@/features/courses/components/SideBar";
import { Check } from "lucide-react";
import Image from "next/image";
import RocketIcon from "@/public/courses-feature-images/rocket 2.png";
import Button from "@/components/Button";

const coursesData = [
  {
    id: 1,
    badge: "3 Section",
    title: "CASI - Certified Advanced Security Implementor",
    modules: "15 Modules",
    features: ["Strengthen network security.", "Mitigate security risks."],
  },
  {
    id: 2,
    badge: "3 Section",
    title: "BASI - Blockchain Solutions Architect",
    modules: "5 Modules",
    features: ["Design secure networks.", "Build decentralized systems."],
  },
  {
    id: 3,
    badge: "3 Section",
    title: "CCSA - Certified Computer Systems Analyst",
    modules: "5 Modules",
    features: ["Improve business efficiency", "Optimize IT infrastructure"],
  },
  {
    id: 4,
    badge: "3 Section",
    title: "PASI - Project Application & Solution Integration",
    modules: "4 Modules",
    features: [
      "Ensure successful project deployments.",
      "Manage project lifecycles.",
    ],
  },
];

function CourseCard({ course }) {
  return (
    <div className="bg-gray-800 rounded-2xl p-6 flex flex-col h-full">
      {/* Badge */}
      <div className="mb-6">
        <span className="bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium">
          {course.badge}
        </span>
      </div>

      {/* Title with Rocket Icon */}
      <div className="flex items-start gap-3 mb-6">
        <div className="flex-shrink-0 mt-1">
          {/* Rocket Icon */}
          <div className="w-8 h-8 rounded-lg flex items-center justify-center">
            <Image src={RocketIcon} alt="Rocket Icon" />
          </div>
        </div>
        <h3 className="text-white text-xl font-semibold leading-tight">
          {course.title}
        </h3>
      </div>

      {/* Modules */}
      <div className="flex items-center gap-2 mb-4">
        <Check className="w-5 h-5 text-green-400" />
        <span className="text-white font-medium">{course.modules}</span>
      </div>

      {/* Features */}
      <div className="space-y-3 mb-8 flex-grow">
        {course.features.map((feature, index) => (
          <div key={index} className="flex items-center gap-2">
            <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
            <span className="text-gray-300">{feature}</span>
          </div>
        ))}
      </div>

      {/* Start Course Button */}
      <Button name="Start Course" className="flex flex-start w-2xs" />
    </div>
  );
}

function Courses() {
  return (
    <div className="flex min-h-screen bg-gray-900">
      <SideBar />
      <div className="flex-1 p-6">
        <div className="max-w-7xl mx-auto">
          {/* Courses Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {coursesData.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Courses;
