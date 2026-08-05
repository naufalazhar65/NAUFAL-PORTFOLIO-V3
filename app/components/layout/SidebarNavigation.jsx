"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { navigationConfig } from "@/app/config/navigation";

export default function SidebarNavigation() {
  const pathname = usePathname();

  return (
    <nav className="flex-1 p-4">
      <div className="space-y-1">
        {navigationConfig.map((item) => {
          const Icon = item.icon;

          const active =
            pathname === item.href;

          return (
            <Link
              key={item.id}
              href={item.href}
              className={`
                flex
                items-center
                gap-3
                rounded-xl
                px-4
                py-3
                transition-all

                ${
                  active
                    ? "bg-primary/10 text-primary"
                    : "text-text-secondary hover:bg-white/5 hover:text-white"
                }
              `}
            >
              <Icon size={18} />

              <span>{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}