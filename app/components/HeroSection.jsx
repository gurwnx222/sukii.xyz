"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import heroSectionImage from "@/public/decoratives/planet-image-full.png";
import decorConstellation from "@/public/decoratives/constellation-image-3.svg";
import decorStar from "@/public/decoratives/decor-star.svg";
import Button from "@/components/Button";
import { useRouter } from "next/navigation";

export default function HeroSection() {
  const router = useRouter();

  const handleSubmit = () => {
    router.push("/register");
  };

  // Floating animation variants
  const floatingAnimation = {
    y: [0, -20, 0],
    rotate: [0, 2, -2, 0],
    scale: [1, 1.02, 1],
  };

  const floatingTransition = {
    duration: 6,
    repeat: Number.POSITIVE_INFINITY,
    ease: "easeInOut",
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-900 overflow-hidden">
        {/* Background Stars - Static */}
        <div className="absolute inset-0">
          {/* Star 1 - Top Left */}
          <div className="absolute top-20 left-20 md:top-32 md:left-32">
            <Image
              src={decorStar || "/placeholder.svg"}
              alt=""
              width={16}
              height={16}
              className="w-3 h-3 md:w-4 md:h-4"
            />
          </div>
          {/* Star 2 - Top Center */}
          <div className="absolute top-16 left-1/2 transform -translate-x-1/2 md:top-24">
            <Image
              src={decorStar || "/placeholder.svg"}
              alt=""
              width={20}
              height={20}
              className="w-4 h-4 md:w-5 md:h-5"
            />
          </div>
          {/* Star 3 - Top Right */}
          <div className="absolute top-32 right-20 md:top-48 md:right-32">
            <Image
              src={decorStar || "/placeholder.svg"}
              alt=""
              width={18}
              height={18}
              className="w-3 h-3 md:w-4 md:h-4"
            />
          </div>
          {/* Star 4 - Middle Left */}
          <div className="absolute top-1/2 left-10 transform -translate-y-1/2 md:left-20">
            <Image
              src={decorStar || "/placeholder.svg"}
              alt=""
              width={14}
              height={14}
              className="w-2 h-2 md:w-3 md:h-3"
            />
          </div>
          {/* Star 5 - Bottom Left */}
          <div className="absolute bottom-32 left-16 md:bottom-40 md:left-24">
            <Image
              src={decorStar || "/placeholder.svg"}
              alt=""
              width={16}
              height={16}
              className="w-3 h-3 md:w-4 md:h-4"
            />
          </div>
          {/* Star 6 - Bottom Right */}
          <div className="absolute bottom-20 right-16 md:bottom-32 md:right-24">
            <Image
              src={decorStar || "/placeholder.svg"}
              alt=""
              width={20}
              height={20}
              className="w-4 h-4 md:w-5 md:h-5"
            />
          </div>
        </div>

        {/* Constellation - Desktop Only */}
        <motion.div
          className="hidden lg:block absolute bottom-20 left-20"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.4, scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
        >
          <Image
            src={decorConstellation || "/placeholder.svg"}
            alt=""
            width={200}
            height={150}
          />
        </motion.div>

        {/* Mobile Constellation - Bottom Left */}
        <motion.div
          className="block lg:hidden absolute bottom-10 left-4"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.3, scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
        >
          <Image
            src={decorConstellation || "/placeholder.svg"}
            alt=""
            width={120}
            height={90}
          />
        </motion.div>

        {/* Hero Image - Positioned in upper right */}
        <motion.div
          className="absolute top-16 right-4 md:top-20 md:right-8 lg:top-24 lg:right-16 xl:right-24 z-20"
          initial={{ opacity: 0, x: 50, y: -30 }}
          animate={{
            opacity: 1,
            x: 0,
            y: 0,
            ...floatingAnimation,
          }}
          transition={{
            opacity: { duration: 1.2, delay: 0.3 },
            x: { duration: 1.2, delay: 0.3 },
            y: { duration: 1.2, delay: 0.3, ...floatingTransition },
            rotate: floatingTransition,
            scale: floatingTransition,
          }}
        >
          <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-80 md:h-80 lg:w-96 lg:h-96 xl:w-[28rem] xl:h-[28rem] 2xl:w-[32rem] 2xl:h-[32rem]">
            <Image
              src={heroSectionImage || "/placeholder.svg"}
              alt="Futuristic planet with orbital rings representing technology and innovation"
              fill
              className="object-contain"
              priority
            />
          </div>
        </motion.div>

        <div className="relative z-10 container mx-auto px-4 md:px-6 lg:px-8">
          <div className="min-h-screen flex items-center">
            {/* Main Content - Left Aligned */}
            <div className="pt-0 md:pt-24 lg:pt-0 text-left max-w-4xl">
              {/* Headline */}
              <motion.h1
                className="text-4xl sm:text-2xl md:text-4xl lg:text-6xl font-bold text-white leading-tight mb-6 md:mb-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <span className="block">Pioneer your</span>
                <span className="block">Future in</span>
                <span className="block">Technology</span>
              </motion.h1>

              {/* Subheadline */}
              <motion.p
                className="text-ms md:text-lg lg:text-xl text-gray-300 leading-relaxed max-w-2xl mb-8 md:mb-12"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Nuru Labs is dedicated to empowering individuals through
                comprehensive online training, industry-recognized
                certifications, and collaborative project hubs, paving the way
                for innovation and success in the tech industry.
              </motion.p>

              {/* Call to Action Button */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <Button
                  name="Get Started"
                  className="mb-4 md:mb-6 lg:mb-8"
                  onClick={handleSubmit}
                />
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom Gradient Fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900 to-transparent"></div>
      </section>
    </>
  );
}
