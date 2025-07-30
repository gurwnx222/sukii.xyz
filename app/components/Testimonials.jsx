import { Marquee } from "@/components/magicui/marquee";
import Image from "next/image";
import decorStar from "@/public/decoratives/decor-star.svg";
import ImageOne from "@/public/testimonials/testimonial-1.png";
import ImageTwo from "@/public/testimonials/testimonial-2.png";
import ImageThree from "@/public/testimonials/testimonial-3.png";
import ImageFour from "@/public/testimonials/testimonial-4.png";

const testimonials = [
  {
    id: 1,
    text: "So far I like how easy it is to navigate through your website. And the videos for your courses feel very engaging. I like how there is a lot of info for you to learn. All you gotta do is go through the material. You'll get out of it what you put into it",
    name: "K. Moore",
    position: "US. Army",
    image: ImageOne,
  },
  {
    id: 2,
    text: "ขอบคุณสำหรับเว็บไซต์ที่ช่วยในการเรียนรู้ง่ายขึ้นตะ เลิกคุณละมีให้ผู้สามารถเข้าใจได้ง่ายและเข้าถึงได้ง่าน และผู้ใหญ่มีสามารถหาใจให้ลูกหลานได้ใช้เรียนต่อไป เพื่อต่อมอลอมาคดของเขา หากผู้ใหญ่อมาหาความรู้เพิ่มเติมกิจสามรถเรียนรู้ได้เพิ่มอีกกัน เยี่ยมมาก.",
    name: "Thai User",
    position: "Student",
    image: ImageThree,
  },
  {
    id: 3,
    text: "The platform has transformed how I approach learning. The interactive content and well-structured courses make complex topics accessible and engaging.",
    name: "Sarah Johnson",
    position: "Software Engineer",
    image: ImageFour,
  },
  {
    id: 4,
    text: "Excellent resource for professional development. The quality of instruction and the variety of courses available is impressive.",
    name: "Michael Chen",
    position: "Product Manager",
    image: ImageOne,
  },
  {
    id: 5,
    text: "I've tried many online learning platforms, but this one stands out for its user experience and comprehensive content library.",
    name: "Emily Rodriguez",
    position: "UX Designer",
    image: ImageTwo,
  },
];

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="bg-slate-800/80 backdrop-blur-sm rounded-2xl p-6 mx-4 mb-6 max-w-sm border border-slate-700/50">
      {/* Star Rating */}
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <svg key={i} className="w-5 h-5 fill-yellow-400" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>

      {/* Testimonial Text */}
      <blockquote className="text-white text-sm leading-relaxed mb-6">
        "{testimonial.text}"
      </blockquote>

      {/* Author Info */}
      <div className="flex items-center gap-3">
        <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-slate-600">
          <Image
            src={testimonial.image || "/placeholder.svg"}
            alt={testimonial.name}
            fill
            className="object-cover"
          />
        </div>
        <div>
          <div className="text-white font-semibold text-sm">
            {testimonial.name}
          </div>
          <div className="text-slate-400 text-xs">{testimonial.position}</div>
        </div>
      </div>
    </div>
  );
};

export default function Testimonials() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Background Stars */}
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src={decorStar || "/placeholder.svg"}
          alt=""
          className="absolute top-20 left-20 w-4 h-4 opacity-60"
        />
        <Image
          src={decorStar || "/placeholder.svg"}
          alt=""
          className="absolute top-40 right-32 w-3 h-3 opacity-40"
        />
        <Image
          src={decorStar || "/placeholder.svg"}
          alt=""
          className="absolute bottom-32 left-16 w-5 h-5 opacity-50"
        />
        <Image
          src={decorStar || "/placeholder.svg"}
          alt=""
          className="absolute top-60 left-1/3 w-2 h-2 opacity-70"
        />
        <Image
          src={decorStar || "/placeholder.svg"}
          alt=""
          className="absolute bottom-20 right-20 w-4 h-4 opacity-60"
        />
        <Image
          src={decorStar || "/placeholder.svg"}
          alt=""
          className="absolute top-32 right-1/4 w-3 h-3 opacity-50"
        />

        {/* Additional decorative elements */}
        <div className="absolute top-16 left-1/4 w-2 h-2 bg-purple-400 rounded-full opacity-60 animate-pulse"></div>
        <div className="absolute bottom-40 right-1/3 w-3 h-3 bg-blue-400 rounded-full opacity-40 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-12 w-1 h-1 bg-white rounded-full opacity-80"></div>
      </div>

      <div className="relative z-10 flex h-screen">
        {/* Left Side - Title */}
        <div className="flex-1 flex items-center justify-center px-8 lg:px-16">
          <div className="max-w-md">
            <h2 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
              Customer
              <br />
              Testimonials
            </h2>
          </div>
        </div>

        {/* Right Side - Testimonials */}
        <div className="flex-1 relative">
          {/* Dark vignette overlay - only at top and bottom edges */}
          <div className="absolute top-0 left-0 right-0 h-10 bg-gradient-to-b from-slate-900 to-transparent pointer-events-none z-10"></div>
          <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-slate-900 to-transparent pointer-events-none z-10"></div>

          <div className="absolute inset-0 flex">
            {/* First Column */}
            <div className="flex-1">
              <Marquee vertical className="h-full" pauseOnHover>
                {testimonials.slice(0, 3).map((testimonial) => (
                  <TestimonialCard
                    key={testimonial.id}
                    testimonial={testimonial}
                  />
                ))}
              </Marquee>
            </div>

            {/* Second Column */}
            <div className="flex-1">
              <Marquee vertical reverse className="h-full" pauseOnHover>
                {testimonials.slice(3, 6).map((testimonial) => (
                  <TestimonialCard
                    key={testimonial.id}
                    testimonial={testimonial}
                  />
                ))}
              </Marquee>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
