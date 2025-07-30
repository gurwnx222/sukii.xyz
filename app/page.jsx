import CourseFeaturesSection from "./components/CourseFeaturesSection";
import CourseSection from "./components/CourseSection";
import HeroSection from "./components/HeroSection";
import Header from "@/components/Header";
import FaqSection from "./components/FaqSection";
import OurAdvantages from "./components/OurAdvantages";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <CourseSection />
      <CourseFeaturesSection />
      <FaqSection />
      <OurAdvantages />
    </>
  );
}
