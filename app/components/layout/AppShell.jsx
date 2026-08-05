"use client";

export default function AppShell({
  sidebar,
  header,
  footer,
  children,
}) {
  return (
    <div
      className="
        flex
        min-h-screen
        bg-background
        text-text
      "
    >
      {sidebar}

      <div className="flex min-h-screen flex-1 flex-col">
        {header}

        <main className="flex-1">
          {children}
        </main>

        {footer}
      </div>
    </div>
  );
}