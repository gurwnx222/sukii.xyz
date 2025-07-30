import Image from "next/image";
import RocketPng from "@/public/courses-feature-images/rocket 2.png";

const courses = [
  {
    id: 1,
    title: "CCSA",
    description:
      "This foundational course equips you for our advanced Systems Analyst Course. Gain expertise in essential networking, foundational cloud administration, and fundamental hardware and software skills.",
  },
  {
    id: 2,
    title: "BASI",
    description:
      "This intermediate-level course empowers you to create a basic blockchain, ensures robust security in blockchain analytics and engineering, and equips you with essential skills for wallet security.",
  },
  {
    id: 3,
    title: "CASI",
    description:
      "This intermediate-level course offers comprehensive analytics, expert advisory on various cybersecurity aspects, and essential security best practices, equipping participants with the foundational knowledge needed in the cybersecurity field.",
  },
  {
    id: 4,
    title: "PASI",
    description:
      "Is course provides intermediate-level training in project coordination. It covers key aspects such as effective project management, coordination techniques, and best practices to ensure successful project outcomes in the tech industry.",
  },
];

export default function CourseSection() {
  return (
    <div className="min-h-screen bg-slate-900 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
          Our Courses
        </h2>

        {/* Animated Border Container */}
        <div className="relative p-1 rounded-2xl bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 bg-[length:200%_200%] animate-gradient-xy">
          <div className="bg-slate-900 rounded-2xl p-8">
            {/* Course Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {courses.map((course) => (
                <div
                  key={course.id}
                  className="group relative bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-purple-500 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20"
                >
                  {/* Icons */}
                  <div className="flex justify-between items-start mb-4">
                    <div className="w-12 h-12 relative">
                      <Image
                        src={RocketPng || "/placeholder.svg"}
                        alt="Rocket icon"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div className="w-6 h-6 text-slate-400 group-hover:text-purple-400 transition-colors">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        className="w-full h-full"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M7 17l9.2-9.2M17 17V7H7"
                        />
                      </svg>
                    </div>
                  </div>

                  {/* Course Title */}
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors">
                    {course.title}
                  </h3>

                  {/* Course Description */}
                  <p className="text-slate-300 text-sm leading-relaxed mb-6">
                    {course.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Central Get Started Button */}
            <div className="flex justify-center">
              <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 flex items-center gap-3 hover:shadow-lg hover:shadow-purple-500/30 hover:transform hover:scale-105">
                Get started
                <svg
                  className="w-5 h-5 transition-transform hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
