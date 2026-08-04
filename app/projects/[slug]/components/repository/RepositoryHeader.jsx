"use client";

import { FiGithub } from "react-icons/fi";

export default function RepositoryHeader({ repository, totalItems }) {
  return (
    <div className="border-b border-white/10 bg-[#0d1117]">
      {/* Window Controls */}

      <div className="flex items-center gap-2 border-b border-white/5 px-6 py-3">
        <div className="h-3 w-3 rounded-full bg-[#ff5f57]" />
        <div className="h-3 w-3 rounded-full bg-[#febc2e]" />
        <div className="h-3 w-3 rounded-full bg-[#28c840]" />

        <span className="ml-4 text-sm font-medium text-gray-400">Explorer</span>
      </div>

      {/* Repository Info */}

      <div className="flex items-center justify-between px-6 py-5">
        <div className="flex items-center gap-4">
          <div className="rounded-xl bg-[#16f2b3]/10 p-3">
            <FiGithub className="text-2xl text-[#16f2b3]" />
          </div>

          <div>
            <p className="text-xs uppercase tracking-[3px] text-gray-500">
              Repository
            </p>

            <h3 className="mt-1 font-bold text-white">{repository.root}</h3>

            <p className="mt-1 text-sm text-gray-500">
              Branch: {repository.branch}
            </p>
          </div>
        </div>

        <span className="rounded-full bg-[#16f2b3]/10 px-4 py-1 text-sm text-[#16f2b3]">
          {totalItems} items
        </span>
      </div>
    </div>
  );
}
