"use client";

import { motion } from "framer-motion";

import { useHero } from "../../HeroContext";

const rows = [
  ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
  ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
  ["⇧", "Z", "X", "C", "V", "B", "N", "M", "⌫"],
];

export default function Keyboard({
  visible,
  accent = "#16f2b3",
}) {
  const { pressedKey } = useHero();

  return (
    <motion.div
      initial={false}
      animate={{
        y: visible ? 0 : 220,
        opacity: visible ? 1 : 0,
      }}
      transition={{
        duration: 0.3,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        absolute
        bottom-0
        left-0
        right-0
        rounded-t-[18px]
        border-t
        border-white/10
        bg-[#20242d]
        px-2
        pt-2
        pb-2
        shadow-[0_-8px_24px_rgba(0,0,0,.35)]
      "
    >
      {/* Handle */}

      <div className="mb-2 flex justify-center">
        <div className="h-[3px] w-10 rounded-full bg-white/20" />
      </div>

      {/* Keyboard Rows */}

      {rows.map((row, rowIndex) => (
        <div
          key={rowIndex}
          className="
            mb-1
            flex
            justify-center
            gap-1
          "
        >
          {row.map((key) => (
            <Key
              key={key}
              label={key}
              active={pressedKey === key}
              accent={accent}
              wide={
                key === "⇧" ||
                key === "⌫"
              }
            />
          ))}
        </div>
      ))}

      {/* Bottom Row */}

      <div className="mt-1 flex items-center gap-1">
        <Key
          label="😊"
          className="w-8"
          accent={accent}
        />

        <Key
          label="123"
          className="w-10"
          accent={accent}
        />

        <Key
          label=""
          className="flex-1"
          space
          accent={accent}
        />

        <Key
          label="⏎"
          className="w-10"
          accent={accent}
        />
      </div>
    </motion.div>
  );
}

function Key({
  label,
  className = "",
  wide = false,
  space = false,
  active = false,
  accent,
}) {
  return (
    <motion.div
      animate={{
        scale: active ? 0.92 : 1,
        y: active ? -1 : 0,
      }}
      transition={{
        duration: 0.08,
      }}
      whileTap={{
        scale: 0.9,
      }}
      className={`
        flex
        h-7
        items-center
        justify-center
        rounded-md
        border
        text-[9px]
        font-medium
        transition-all
        duration-100
        shadow-[0_2px_5px_rgba(0,0,0,.25)]

        ${wide ? "w-9" : "flex-1"}

        ${className}
      `}
      style={
        active
          ? {
              borderColor: `${accent}80`,
              backgroundColor: accent,
              color: "#07110f",
              boxShadow: `0 0 12px ${accent}55`,
            }
          : {
              borderColor: "rgba(255,255,255,.05)",
              backgroundColor: "#323741",
              color: "#fff",
            }
      }
    >
      {space ? (
        <div className="h-1 w-16 rounded-full bg-white/30" />
      ) : (
        label
      )}
    </motion.div>
  );
}