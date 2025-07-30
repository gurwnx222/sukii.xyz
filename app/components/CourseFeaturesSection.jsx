import decorStart from "@/public/decoratives/decor-star.svg";
import Image from "next/image";
import centerImage from "@/public/courses-feature-images/course-feature.png";
import Rocket from "@/public/courses-feature-images/rocket 2.png";

export default function CourseFeaturesSection() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden py-10 md:py-20 px-4">
      {/* Decorative Stars - Hidden on mobile, visible on larger screens */}
      <div className="hidden md:block absolute top-[15%] left-[20%] w-4 h-4">
        <Image
          src={decorStart || "/placeholder.svg"}
          alt="Decorative star"
          width={16}
          height={16}
        />
      </div>
      <div className="hidden md:block absolute top-[8%] right-[25%] w-4 h-4">
        <Image
          src={decorStart || "/placeholder.svg"}
          alt="Decorative star"
          width={16}
          height={16}
        />
      </div>
      <div className="hidden md:block absolute bottom-[30%] left-[5%] w-4 h-4">
        <Image
          src={decorStart || "/placeholder.svg"}
          alt="Decorative star"
          width={16}
          height={16}
        />
      </div>
      <div className="hidden md:block absolute bottom-[10%] right-[30%] w-4 h-4">
        <Image
          src={decorStart || "/placeholder.svg"}
          alt="Decorative star"
          width={16}
          height={16}
        />
      </div>
      <div className="hidden md:block absolute top-[45%] left-[8%] w-4 h-4">
        <Image
          src={decorStart || "/placeholder.svg"}
          alt="Decorative star"
          width={16}
          height={16}
        />
      </div>
      <div className="hidden md:block absolute top-[60%] right-[15%] w-4 h-4">
        <Image
          src={decorStart || "/placeholder.svg"}
          alt="Decorative star"
          width={16}
          height={16}
        />
      </div>

      {/* Mobile Stars - Positioned for mobile layout */}
      <div className="md:hidden absolute top-[5%] left-[10%] w-3 h-3">
        <Image
          src={decorStart || "/placeholder.svg"}
          alt="Decorative star"
          width={12}
          height={12}
        />
      </div>
      <div className="md:hidden absolute top-[8%] right-[15%] w-3 h-3">
        <Image
          src={decorStart || "/placeholder.svg"}
          alt="Decorative star"
          width={12}
          height={12}
        />
      </div>
      <div className="md:hidden absolute bottom-[5%] left-[20%] w-3 h-3">
        <Image
          src={decorStart || "/placeholder.svg"}
          alt="Decorative star"
          width={12}
          height={12}
        />
      </div>
      <div className="md:hidden absolute bottom-[8%] right-[10%] w-3 h-3">
        <Image
          src={decorStart || "/placeholder.svg"}
          alt="Decorative star"
          width={12}
          height={12}
        />
      </div>

      {/* Desktop Layout - Hidden on mobile */}
      <div className="hidden md:block relative max-w-7xl mx-auto">
        {/* Central Image */}
        <div className="relative z-10 flex justify-center items-center">
          <div className="relative">
            <Image
              src={centerImage || "/placeholder.svg"}
              alt="Course platform interface"
              width={800}
              height={500}
              className="rounded-lg shadow-2xl"
              priority
            />
          </div>
        </div>

        {/* Diverse Course Offerings - Top Center */}
        <div className="absolute top-[10%] left-1/2 transform -translate-x-1/2 z-20">
          <div className="relative">
            <svg
              className="absolute top-full left-1/2 transform -translate-x-1/2 w-1 h-20"
              style={{ zIndex: -1 }}
            >
              <line
                x1="0"
                y1="0"
                x2="0"
                y2="80"
                stroke="rgba(168, 85, 247, 0.5)"
                strokeWidth="2"
                strokeDasharray="4 4"
              />
            </svg>
            <div className="bg-slate-800/90 backdrop-blur-sm border border-purple-500/40 rounded-lg px-4 py-3 min-w-[220px]">
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0">
                  <Image
                    src={Rocket || "/placeholder.svg"}
                    alt="Rocket icon"
                    width={32}
                    height={32}
                    className="w-8 h-8"
                  />
                </div>
                <div>
                  <h3 className="text-white font-medium text-sm">
                    Diverse Course Offerings
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Active Community Support - Left Side */}
        <div className="absolute top-[35%] left-[15%] z-20">
          <div className="relative">
            <svg
              className="absolute top-1/2 left-full transform -translate-y-1/2 w-24 h-1"
              style={{ zIndex: -1 }}
            >
              <line
                x1="0"
                y1="0"
                x2="96"
                y2="0"
                stroke="rgba(168, 85, 247, 0.5)"
                strokeWidth="2"
                strokeDasharray="4 4"
              />
            </svg>
            <div className="bg-slate-800/90 backdrop-blur-sm border border-purple-500/40 rounded-lg px-4 py-3 min-w-[200px]">
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0">
                  <Image
                    src={Rocket || "/placeholder.svg"}
                    alt="Rocket icon"
                    width={32}
                    height={32}
                    className="w-8 h-8"
                  />
                </div>
                <div>
                  <h3 className="text-white font-medium text-sm">Active</h3>
                  <p className="text-purple-300 text-xs">Community Support</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Self-Paced Courses - Upper Right */}
        <div className="absolute top-[25%] right-[10%] z-20">
          <div className="relative">
            <svg
              className="absolute top-1/2 right-full transform -translate-y-1/2 w-24 h-1"
              style={{ zIndex: -1 }}
            >
              <line
                x1="0"
                y1="0"
                x2="96"
                y2="0"
                stroke="rgba(168, 85, 247, 0.5)"
                strokeWidth="2"
                strokeDasharray="4 4"
              />
            </svg>
            <div className="bg-slate-800/90 backdrop-blur-sm border border-purple-500/40 rounded-lg px-4 py-3 min-w-[180px]">
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0">
                  <Image
                    src={Rocket || "/placeholder.svg"}
                    alt="Rocket icon"
                    width={32}
                    height={32}
                    className="w-8 h-8"
                  />
                </div>
                <div>
                  <h3 className="text-white font-medium text-sm">Self-Paced</h3>
                  <p className="text-purple-300 text-xs">Courses</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Easy to use - Lower Right */}
        <div className="absolute bottom-[25%] right-[5%] z-20">
          <div className="relative">
            <svg
              className="absolute top-1/2 right-full transform -translate-y-1/2 w-32 h-1"
              style={{ zIndex: -1 }}
            >
              <line
                x1="0"
                y1="0"
                x2="128"
                y2="0"
                stroke="rgba(168, 85, 247, 0.5)"
                strokeWidth="2"
                strokeDasharray="4 4"
              />
            </svg>
            <div className="bg-slate-800/90 backdrop-blur-sm border border-purple-500/40 rounded-lg px-4 py-3 min-w-[160px]">
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0">
                  <Image
                    src={Rocket || "/placeholder.svg"}
                    alt="Rocket icon"
                    width={32}
                    height={32}
                    className="w-8 h-8"
                  />
                </div>
                <div>
                  <h3 className="text-white font-medium text-sm">
                    Easy to use
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Free & Accessible Learning - Lower Left */}
        <div className="absolute bottom-[15%] left-[8%] z-20">
          <div className="relative">
            <svg
              className="absolute top-1/2 left-full transform -translate-y-1/2 w-28 h-1"
              style={{ zIndex: -1 }}
            >
              <line
                x1="0"
                y1="0"
                x2="112"
                y2="0"
                stroke="rgba(168, 85, 247, 0.5)"
                strokeWidth="2"
                strokeDasharray="4 4"
              />
            </svg>
            <div className="bg-slate-800/90 backdrop-blur-sm border border-purple-500/40 rounded-lg px-4 py-3 min-w-[220px]">
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0">
                  <Image
                    src={Rocket || "/placeholder.svg"}
                    alt="Rocket icon"
                    width={32}
                    height={32}
                    className="w-8 h-8"
                  />
                </div>
                <div>
                  <h3 className="text-white font-medium text-sm">
                    Free & Accessible
                  </h3>
                  <p className="text-purple-300 text-xs">Learning</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Layout - Visible only on mobile */}
      <div className="md:hidden flex flex-col items-center space-y-8 max-w-sm mx-auto">
        {/* Mobile Feature Cards - Before Image */}
        <div className="w-full space-y-4">
          {/* Diverse Course Offerings */}
          <div className="bg-slate-800/90 backdrop-blur-sm border border-purple-500/40 rounded-lg px-4 py-3">
            <div className="flex items-center gap-3">
              <div className="flex-shrink-0">
                <Image
                  src={Rocket || "/placeholder.svg"}
                  alt="Rocket icon"
                  width={28}
                  height={28}
                  className="w-7 h-7"
                />
              </div>
              <div>
                <h3 className="text-white font-medium text-sm">
                  Diverse Course Offerings
                </h3>
              </div>
            </div>
          </div>

          {/* Active Community Support */}
          <div className="bg-slate-800/90 backdrop-blur-sm border border-purple-500/40 rounded-lg px-4 py-3">
            <div className="flex items-center gap-3">
              <div className="flex-shrink-0">
                <Image
                  src={Rocket || "/placeholder.svg"}
                  alt="Rocket icon"
                  width={28}
                  height={28}
                  className="w-7 h-7"
                />
              </div>
              <div>
                <h3 className="text-white font-medium text-sm">
                  Active Community Support
                </h3>
              </div>
            </div>
          </div>
        </div>

        {/* Central Image - Mobile Size */}
        <div className="relative z-10 w-full">
          <Image
            src={centerImage || "/placeholder.svg"}
            alt="Course platform interface"
            width={400}
            height={250}
            className="w-full h-auto rounded-lg shadow-2xl"
            priority
          />
        </div>

        {/* Mobile Feature Cards - After Image */}
        <div className="w-full space-y-4">
          {/* Self-Paced Courses */}
          <div className="bg-slate-800/90 backdrop-blur-sm border border-purple-500/40 rounded-lg px-4 py-3">
            <div className="flex items-center gap-3">
              <div className="flex-shrink-0">
                <Image
                  src={Rocket || "/placeholder.svg"}
                  alt="Rocket icon"
                  width={28}
                  height={28}
                  className="w-7 h-7"
                />
              </div>
              <div>
                <h3 className="text-white font-medium text-sm">
                  Self-Paced Courses
                </h3>
              </div>
            </div>
          </div>

          {/* Easy to use */}
          <div className="bg-slate-800/90 backdrop-blur-sm border border-purple-500/40 rounded-lg px-4 py-3">
            <div className="flex items-center gap-3">
              <div className="flex-shrink-0">
                <Image
                  src={Rocket || "/placeholder.svg"}
                  alt="Rocket icon"
                  width={28}
                  height={28}
                  className="w-7 h-7"
                />
              </div>
              <div>
                <h3 className="text-white font-medium text-sm">Easy to use</h3>
              </div>
            </div>
          </div>

          {/* Free & Accessible Learning */}
          <div className="bg-slate-800/90 backdrop-blur-sm border border-purple-500/40 rounded-lg px-4 py-3">
            <div className="flex items-center gap-3">
              <div className="flex-shrink-0">
                <Image
                  src={Rocket || "/placeholder.svg"}
                  alt="Rocket icon"
                  width={28}
                  height={28}
                  className="w-7 h-7"
                />
              </div>
              <div>
                <h3 className="text-white font-medium text-sm">
                  Free & Accessible Learning
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-transparent to-purple-900/20 pointer-events-none" />
    </section>
  );
}
