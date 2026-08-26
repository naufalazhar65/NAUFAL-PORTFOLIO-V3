"use client";

import ComponentItem from "./ComponentItem";

export default function ComponentGroup({ group }) {
  return (
    <div className="space-y-1.5">
      <h2
        className="
          px-2
          pb-1
          text-[9px]
          font-semibold
          uppercase
          tracking-[0.14em]
          text-gray-500
        "
      >
        {group.title}
      </h2>

      <div className="space-y-1">
        {group.items.map((item) => (
          <ComponentItem
            key={item.type}
            item={item}
          />
        ))}
      </div>
    </div>
  );
}