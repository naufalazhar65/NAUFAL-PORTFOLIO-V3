"use client";

export default function InspectorProperty({ icon, label, value }) {
  return (
    <div className="rounded-xl border border-white/10 bg-[#161b22] p-4">
      <div className="mb-2 flex items-center gap-2 text-gray-400">
        {icon}

        <span className="text-xs uppercase tracking-[2px]">{label}</span>
      </div>

      <p className="break-all font-semibold text-white">{String(value)}</p>
    </div>
  );
}
