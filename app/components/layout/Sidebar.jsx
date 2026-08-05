"use client";

import SidebarProfile from "./SidebarProfile";
import SidebarNavigation from "./SidebarNavigation";
import SidebarFooter from "./SidebarFooter";

export default function Sidebar() {
  return (
    <aside
      className="
        hidden
        xl:flex
        sticky
        top-0
        h-screen
        w-72
        shrink-0
        flex-col
        border-r
        border-white/10
        bg-background
      "
    >
      <SidebarProfile />

      <SidebarNavigation />

      <SidebarFooter />
    </aside>
  );
}