"use client";

import { siteConfig } from "@/app/config/site";

export default function SidebarFooter() {
  return (
    <div className="border-t border-white/10 p-6">
      <div className="flex items-center gap-2">
        <span className="h-2 w-2 rounded-full bg-green-400" />

        <span className="text-sm">
          {siteConfig.availability}
        </span>
      </div>

      <p className="mt-2 text-xs text-text-secondary">
        Version {siteConfig.version}
      </p>
    </div>
  );
}