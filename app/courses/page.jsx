import SideBar from "@/features/courses/components/SideBar";
import { Check } from "lucide-react";
import Image from "next/image";
import RocketIcon from "@/public/courses-feature-images/rocket 2.png";
import Button from "@/components/Button";
import { ProtectedRoute } from "@/features/authentication";

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
    <ProtectedRoute>
      <div className="flex min-h-screen bg-gray-900">
        <SideBar />
        {/* Main content area with proper spacing and alignment */}
        <main className="flex-1 ml-0 lg:ml-4 xl:ml-8">
          <div className="h-full px-6 py-8 lg:px-8 xl:px-12">
            {/* Header section (optional - add if needed) */}
            <div className="flex justify-center items-center flex-col mb-8">
              <h1 className="text-4xl font-bold text-white mb-2">Courses</h1>
              <p className="text-gray-400">
                Choose from our certification programs
              </p>
            </div>

            {/* Courses Grid - properly aligned to the right */}
            <div className="w-4xl ml-80">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 xl:gap-4 max-w-none">
                {coursesData.map((course) => (
                  <CourseCard key={course.id} course={course} />
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </ProtectedRoute>
  );
}

export default Courses;
