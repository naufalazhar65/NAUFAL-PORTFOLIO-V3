"use client";

import { FiCheck, FiPlay } from "react-icons/fi";

export default function FlowStatus({
  active,
  completed,
}) {
  return (
    <div
      className={`
        relative
        z-10
        flex
        h-5
        w-5
        items-center
        justify-center
        rounded-full

        ${
          active
            ? "bg-[#16f2b3]"
            : completed
              ? "bg-green-500"
              : "bg-gray-600"
        }
      `}
    >
      {completed && (
        <FiCheck
          size={12}
          className="text-white"
        />
      )}

      {active && (
        <FiPlay
          size={10}
          className="text-black"
        />
      )}
    </div>
  );
}