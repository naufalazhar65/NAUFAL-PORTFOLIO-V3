"use client";

import Image from "next/image";

import AnimationLottie from "../ui/AnimationLottie";
import experienceAnimation from "/public/lottie/code.json";

import ExperienceHeader from "./components/ExperienceHeader";
import ExperienceTimeline from "./components/ExperienceTimeline";

export default function Experience() {
  return (
    <section
      id="experience"
      className="
        relative
        z-50
        my-12
        border-t
        border-[#25213b]
        lg:my-24
      "
    >
      <Image
        src="/section.svg"
        alt=""
        width={1572}
        height={795}
        className="absolute top-0 -z-10"
      />

      <ExperienceHeader />

      <div className="py-8">
        <div
          className="
            grid
            grid-cols-1
            gap-8
            lg:grid-cols-2
            lg:gap-16
          "
        >
          <div className="flex items-start justify-center">
            <div className="h-full w-full">
              <AnimationLottie
                animationPath={experienceAnimation}
              />
            </div>
          </div>

          <ExperienceTimeline />
        </div>
      </div>
    </section>
  );
}