"use client";

export default function PhoneCard({
  children,
  className = "",
}) {
  return (
    <div
      className={`
        rounded-2xl
        border
        border-white/10
        bg-white/[0.03]
        backdrop-blur-xl
        shadow-[0_12px_40px_rgba(0,0,0,.22)]
        ${className}
      `}
    >
      {children}
    </div>
  );
}