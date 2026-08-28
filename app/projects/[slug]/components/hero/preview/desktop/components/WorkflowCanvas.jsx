"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import {
  BadgeCheck,
  Lock,
  MousePointerClick,
  Play,
  Search,
  Type,
} from "lucide-react";
import { motion } from "framer-motion";
import { useHero } from "../../HeroContext";

const icons = [Play, Search, Type, Lock, MousePointerClick, BadgeCheck];

const NODE_WIDTH = 200;
const NODE_HEIGHT = 80;
const VERTICAL_GAP = 120;
const HORIZONTAL_OFFSET = 60;

function getNodePosition(index, total) {
  // Susun node secara zigzag: kiri-kanan bergantian
  const col = index % 2;
  const row = Math.floor(index / 2);
  const x = col * (NODE_WIDTH + HORIZONTAL_OFFSET) + 80;
  const y = row * (NODE_HEIGHT + VERTICAL_GAP) + 80;
  return { x, y };
}

export default function WorkflowCanvas() {
  const { workflowNodes = [], nodeStatuses = [], hero } = useHero();
  const containerRef = useRef(null);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [canvasSize, setCanvasSize] = useState({ width: 0, height: 0 });

  // Hitung posisi node
  const positions = useMemo(() => {
    return workflowNodes.map((_, index) =>
      getNodePosition(index, workflowNodes.length),
    );
  }, [workflowNodes]);

  // Hitung batas canvas agar semua node terlihat
  const maxX = Math.max(...positions.map((p) => p.x + NODE_WIDTH), 0);
  const maxY = Math.max(...positions.map((p) => p.y + NODE_HEIGHT), 0);
  const totalWidth = Math.max(maxX + 80, 600);
  const totalHeight = Math.max(maxY + 80, 400);

  // Auto-pan ke node aktif
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const updateSize = () => {
      setCanvasSize({
        width: container.clientWidth,
        height: container.clientHeight,
      });
    };

    updateSize();
    const observer = new ResizeObserver(updateSize);
    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const activeIndex = nodeStatuses.findIndex(
      (status) => status === "running",
    );

    if (activeIndex === -1 || !containerRef.current) return;

    const activePos = positions[activeIndex];
    if (!activePos) return;

    const container = containerRef.current;
    const targetX = container.clientWidth / 2 - (activePos.x + NODE_WIDTH / 2);
    const targetY =
      container.clientHeight / 2 - (activePos.y + NODE_HEIGHT / 2);

    setPan({ x: targetX, y: targetY });
  }, [nodeStatuses, positions]);

  return (
    <div
      ref={containerRef}
      className="relative h-full w-full overflow-hidden bg-[#0f141b]"
    >
      {/* Latar grid */}
      <div className="pointer-events-none absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,rgba(255,255,255,.05)_1px,transparent_1px)] [background-size:24px_24px]" />
      {/* Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[340px] w-[340px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#16f2b3]/5 blur-[140px]" />

      {/* Kontainer canvas yang dipan */}
      <div
        className="relative transition-transform duration-500 ease-out"
        style={{
          width: totalWidth,
          height: totalHeight,
          transform: `translate(${pan.x}px, ${pan.y}px)`,
        }}
      >
        {/* SVG untuk edges */}
        <svg
          className="absolute inset-0"
          width={totalWidth}
          height={totalHeight}
        >
          {workflowNodes.map((_, index) => {
            if (index === workflowNodes.length - 1) return null;
            const from = positions[index];
            const to = positions[index + 1];

            const startX = from.x + NODE_WIDTH / 2;
            const startY = from.y + NODE_HEIGHT;
            const endX = to.x + NODE_WIDTH / 2;
            const endY = to.y;

            // Kurva bezier
            const path = `M ${startX} ${startY} C ${startX} ${(startY + endY) / 2}, ${endX} ${(startY + endY) / 2}, ${endX} ${endY}`;

            const isActiveEdge =
              nodeStatuses[index] === "done" &&
              nodeStatuses[index + 1] === "running";

            return (
              <path
                key={`edge-${index}`}
                d={path}
                fill="none"
                stroke={isActiveEdge ? "#16f2b3" : "rgba(255,255,255,0.15)"}
                strokeWidth={2}
                strokeDasharray={isActiveEdge ? "6 4" : "none"}
                className="transition-all duration-300"
              />
            );
          })}
        </svg>

        {/* Node nodes */}
        {workflowNodes.map((node, index) => {
          const pos = positions[index];
          const status = nodeStatuses[index] || "idle";
          const active = status === "running";
          const completed = status === "done";
          const Icon = icons[index] || Play;

          return (
            <motion.div
              key={node.title}
              animate={{ scale: active ? 1.03 : 1 }}
              transition={{ duration: 0.3 }}
              className={`absolute flex flex-col rounded-xl border bg-[#111827] shadow-lg ${
                active
                  ? "border-[#16f2b3]/50 shadow-[0_0_30px_rgba(22,242,179,.2)]"
                  : completed
                    ? "border-emerald-400/30"
                    : "border-white/10"
              }`}
              style={{
                left: pos.x,
                top: pos.y,
                width: NODE_WIDTH,
                minHeight: NODE_HEIGHT,
              }}
            >
              {/* Header node */}
              <div className="flex items-center gap-2 border-b border-white/10 px-3 py-2">
                <div
                  className={`flex h-6 w-6 items-center justify-center rounded-md ${
                    active
                      ? "bg-[#16f2b3] text-black"
                      : completed
                        ? "bg-emerald-500/20 text-emerald-400"
                        : "bg-white/5 text-gray-500"
                  }`}
                >
                  <Icon size={14} />
                </div>
                <span className="truncate text-xs font-semibold text-white">
                  {node.title}
                </span>
                <span
                  className={`ml-auto h-2 w-2 rounded-full ${
                    active
                      ? "bg-sky-400"
                      : completed
                        ? "bg-emerald-400"
                        : "bg-gray-600"
                  }`}
                />
              </div>
              {/* Body */}
              <div className="px-3 py-2">
                <p className="text-[10px] text-gray-500">{node.subtitle}</p>
              </div>
              {/* Handle kecil ala React Flow */}
              <div className="absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-[#16f2b3]" />
              <div className="absolute -bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-[#16f2b3]" />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}