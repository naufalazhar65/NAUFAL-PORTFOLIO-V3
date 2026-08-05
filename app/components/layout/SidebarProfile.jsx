"use client";

import { siteConfig } from "@/app/config/site";

export default function SidebarProfile() {
  return (
    <div className="border-b border-white/10 p-6">
      <div className="flex items-center gap-4">
        <div
          className="
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-2xl
            bg-primary
            font-bold
            text-black
          "
        >
          {siteConfig.shortName.charAt(0)}
        </div>

        <div>
          <h2 className="font-semibold">
            {siteConfig.name}
          </h2>

          <p className="text-sm text-text-secondary">
            {siteConfig.role}
          </p>
        </div>
      </div>
    </div>
  );
}