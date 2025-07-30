"use client";
import { BorderBeam } from "@/components/magicui/border-beam";
import Button from "@/components/Button";
const MainCard = ({
  tagline = "Unlock your potential with cutting-edge IT education and shape the digital world of tomorrow.",
  title = "Orbital: Take the First Step into IT",
  backgroundColor = "bg-gradient-to-br from-black via-slate-800 to-slate-900",
  textColor = "text-white",
  taglineColor = "text-slate-300",
  children,
}) => {
  return (
    <div
      className={`${backgroundColor} ${textColor} p-8 md:p-12 lg:p-16 rounded-lg shadow-2xl text-center space-y-6 md:space-y-8 min-h-[300px] flex flex-col justify-center items-center`}
    >
      <p
        className={`${taglineColor} text-sm md:text-base lg:text-lg max-w-4xl mx-auto leading-relaxed`}
      >
        {tagline}
      </p>

      <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-4xl font-bold leading-tight max-w-5xl mx-auto">
        {title}
      </h1>

      <div className="pt-4 flex justify-center">{children}</div>
    </div>
  );
};

export default function JoinNow({
  // Main card props
  tagline = "Unlock your potential with cutting-edge IT education and shape the digital world of tomorrow.",
  title = "Orbital: Take the First Step into IT",
  backgroundColor = "bg-gradient-to-br from-slate-900 via-purple-900 to-purple-900",
  textColor = "text-white",
  taglineColor = "text-slate-300",

  // Border beam props
  beamColorFrom = "#ffffff",
  beamColorTo = "#ffffff",
  beamDuration = 10,
  beamSize = 100,
  beamDelay = 0,
}) {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="relative w-full max-w-6xl">
        <MainCard
          tagline={tagline}
          title={title}
          backgroundColor={backgroundColor}
          textColor={textColor}
          taglineColor={taglineColor}
        >
          <Button name="Join Now" />
        </MainCard>
        <BorderBeam
          colorFrom={beamColorFrom}
          colorTo={beamColorTo}
          duration={beamDuration}
          size={beamSize}
          delay="3"
          borderWidth={2}
        />
        <BorderBeam
          colorFrom={beamColorFrom}
          colorTo={beamColorTo}
          duration={beamDuration}
          size={beamSize}
          delay={beamDelay}
          borderWidth={2}
        />
      </div>
    </div>
  );
}
