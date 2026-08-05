"use client";

import Image from "next/image";

import AnimationLottie from "../ui/AnimationLottie";
import educationAnimation from "/public/lottie/study.json";

import EducationHeader from "./components/EducationHeader";
import EducationTimeline from "./components/EducationTimeline";

export default function Education() {
  return (
    <section
      id="education"
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

      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div
            className="
              h-[1px]
              w-full
              bg-gradient-to-r
              from-transparent
              via-violet-500
              to-transparent
            "
          />
        </div>
      </div>

      <EducationHeader />

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
            <div className="h-3/4 w-3/4">
              <AnimationLottie
                animationPath={educationAnimation}
              />
            </div>
          </div>

          <EducationTimeline />
        </div>
      </div>
    </section>
  );
}