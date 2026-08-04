"use client";

import ComponentItem from "./ComponentItem";

export default function ComponentGroup({ group }) {
  return (
    <div className="space-y-3">
      <h2 className="text-xs uppercase tracking-[3px] text-gray-500">
        {group.title}
      </h2>

      {group.items.map((item) => (
        <ComponentItem key={item.type} item={item} />
      ))}
    </div>
  );
}
