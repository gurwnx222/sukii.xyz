import CourseFeaturesSection from "./components/CourseFeaturesSection";
import CourseSection from "./components/CourseSection";
import HeroSection from "./components/HeroSection";
import Header from "@/components/Header";
import FaqSection from "./components/FaqSection";
import OurAdvantages from "./components/OurAdvantages";
import Testimonials from "./components/Testimonials";
import Footer from "@/components/Footer";
import JoinNow from "./components/JoinNow";
export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <CourseSection />
      <CourseFeaturesSection />
      <FaqSection />
      <OurAdvantages />
      <Testimonials />
      <JoinNow />
      <Footer />
    </>
  );
}
