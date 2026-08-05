"use client";

import { siteConfig } from "@/app/config/site";

export default function StatusBar() {
  return (
    <footer
      className="
        flex
        h-8
        items-center
        justify-between
        border-t
        border-white/10
        px-4
        text-xs
        text-text-secondary
      "
    >
      <span>Ready</span>

      <div className="flex gap-4">
        <span>{siteConfig.availability}</span>

        <span>{siteConfig.location}</span>

        <span>v{siteConfig.version}</span>
      </div>
    </footer>
  );
}