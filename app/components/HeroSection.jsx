"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import heroSectionImage from "@/public/decoratives/planet-image-full.png";
import decorConstellation from "@/public/decoratives/constellation-image-3.svg";
import decorStar from "@/public/decoratives/decor-star.svg";
import Button from "@/components/Button";
import Link from "next/link";
export default function HeroSection() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-900 overflow-hidden">
        {/* Background Stars - Static */}
        <div className="absolute inset-0">
          {/* Star 1 - Top Left */}
          <div className="absolute top-20 left-20 md:top-32 md:left-32">
            <Image
              src={decorStar}
              alt=""
              width={16}
              height={16}
              className="w-3 h-3 md:w-4 md:h-4"
            />
          </div>

          {/* Star 2 - Top Center */}
          <div className="absolute top-16 left-1/2 transform -translate-x-1/2 md:top-24">
            <Image
              src={decorStar}
              alt=""
              width={20}
              height={20}
              className="w-4 h-4 md:w-5 md:h-5"
            />
          </div>

          {/* Star 3 - Top Right */}
          <div className="absolute top-32 right-20 md:top-48 md:right-32">
            <Image
              src={decorStar}
              alt=""
              width={18}
              height={18}
              className="w-3 h-3 md:w-4 md:h-4"
            />
          </div>

          {/* Star 4 - Middle Left */}
          <div className="absolute top-1/2 left-10 transform -translate-y-1/2 md:left-20">
            <Image
              src={decorStar}
              alt=""
              width={14}
              height={14}
              className="w-2 h-2 md:w-3 md:h-3"
            />
          </div>

          {/* Star 5 - Bottom Left */}
          <div className="absolute bottom-32 left-16 md:bottom-40 md:left-24">
            <Image
              src={decorStar}
              alt=""
              width={16}
              height={16}
              className="w-3 h-3 md:w-4 md:h-4"
            />
          </div>

          {/* Star 6 - Bottom Right */}
          <div className="absolute bottom-20 right-16 md:bottom-32 md:right-24">
            <Image
              src={decorStar}
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
          <Image src={decorConstellation} alt="" width={200} height={150} />
        </motion.div>

        {/* Mobile Constellation - Bottom Left */}
        <motion.div
          className="block lg:hidden absolute bottom-10 left-4"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.3, scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
        >
          <Image src={decorConstellation} alt="" width={120} height={90} />
        </motion.div>

        <div className="relative z-10 container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 min-h-screen items-center">
            {/* Left Content */}
            <div className="pt-20 md:pt-24 lg:pt-0 text-center lg:text-left">
              {/* Headline */}
              <h1 className="text-4xl md:text-2xl lg:text-4xl xl:text-7xl font-bold text-white leading-tight mb-6 md:mb-8">
                <span className="block">Pioneer your</span>
                <span className="block">Future in</span>
                <span className="block">Technology</span>
              </h1>

              {/* Subheadline */}
              <p className="text-lg md:text-lg lg:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-8 md:mb-12">
                Nuru Labs is dedicated to empowering individuals through
                comprehensive online training, industry-recognized
                certifications, and collaborative project hubs, paving the way
                for innovation and success in the tech industry.
              </p>
              {/* Call to Action Button */}
              <Button name="Get Started"></Button>
            </div>

            {/* Right Content - Hero Image */}
            <motion.div
              className="relative flex justify-center lg:justify-end items-center"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
            >
              <div className="relative w-80 h-80 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px] xl:w-[600px] xl:h-[600px]">
                {/* Planet Image with Glow Effect */}
                <div className="relative w-full h-full">
                  {/* Glow Effect */}
                  <motion.div
                    className="absolute inset-0 rounded-full bg-purple-500/30 blur-3xl scale-150"
                    animate={{
                      scale: [1.5, 1.7, 1.5],
                      opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />

                  {/* Main Planet Image */}
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                  >
                    <Image
                      src={heroSectionImage}
                      alt="Futuristic planet with orbital rings representing technology and innovation"
                      fill
                      className="object-contain relative z-10"
                      priority
                    />
                  </motion.div>

                  {/* Additional Orbital Ring Glow */}
                  <motion.div
                    className="absolute inset-0 rounded-full border border-purple-400/20 scale-110"
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                  <motion.div
                    className="absolute inset-0 rounded-full border border-purple-300/10 scale-125"
                    animate={{ rotate: -360 }}
                    transition={{
                      duration: 30,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Gradient Fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900 to-transparent"></div>
      </section>
    </>
  );
}
