"use client";

export default function PhoneFrame({
  children,
}) {
  return (
    <div
      className="
        rounded-3xl
        border
        border-white/10
        bg-[#161b22]
        p-5
      "
    >
      <div
        className="
          mx-auto
          flex
          h-[360px]
        w-[180px]
          flex-col
          overflow-hidden
          rounded-[34px]
          border-[5px]
          border-[#30363d]
          bg-black
          shadow-[0_20px_60px_rgba(0,0,0,.45)]
        "
      >
        {/* Dynamic Island */}

        <div
          className="
            relative
            flex
            justify-center
            py-2
          "
        >
          <div
            className="
               h-3
    w-14
    rounded-full
    bg-[#20242b]
            "
          />

          <div
            className="
              absolute
    right-8
    top-2.5
    h-2
    w-2
    rounded-full
    bg-[#2f343c]
            "
          />
        </div>

        {/* Screen */}

        <div
          className="
            flex
            min-h-0
            flex-1
            flex-col
            overflow-hidden
            rounded-t-3xl
            bg-[#0d1117]
          "
        >
          {children}
        </div>
      </div>
    </div>
  );
}