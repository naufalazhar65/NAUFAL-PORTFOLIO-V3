"use client";

import Image from "next/image";
import { BsPersonWorkspace } from "react-icons/bs";

import GlowCard from "../../ui/GlowCard";

export default function EducationCard({ education }) {
  return (
    <GlowCard identifier={`education-${education.id}`}>
      <div className="relative p-3 text-white">
        <Image
          src="/blur-23.svg"
          alt=""
          width={1080}
          height={200}
          className="absolute bottom-0 opacity-80"
        />

        <div className="flex justify-center">
          <p className="text-xs text-[#16f2b3] sm:text-sm">
            {education.duration}
          </p>
        </div>

        <div className="flex items-center gap-x-8 px-3 py-5">
          <div
            className="
              text-violet-500
              transition-all
              duration-300
              hover:scale-125
            "
          >
            <BsPersonWorkspace size={36} />
          </div>

          <div>
            <p
              className="
                mb-2
                text-base
                font-medium
                uppercase
                sm:text-xl
              "
            >
              {education.title}
            </p>

            <p className="text-sm sm:text-base">{education.institution}</p>
          </div>
        </div>
      </div>
    </GlowCard>
  );
}
