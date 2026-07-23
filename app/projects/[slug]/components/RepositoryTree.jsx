"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiChevronRight } from "react-icons/fi";

import { FiFolder, getFileIcon } from "./RepositoryIcons";

export default function RepositoryTree({
  node,
  depth = 0,
  onSelect,
  selected,
}) {
  const isFolder = node.type === "folder";
  const expandable =
    isFolder && node.children && node.children.length > 0;

  const active =
    !isFolder && selected?.name === node.name;

  const [open, setOpen] = useState(false);

  const countItems = (children = []) => children.length;

  const handleClick = () => {
    if (expandable) {
      setOpen((prev) => !prev);
      return;
    }

    if (!isFolder) {
      onSelect?.(node);
    }
  };

  return (
    <>
      <div
        onClick={handleClick}
        className={`group flex cursor-pointer items-center justify-between px-4 py-3 transition-all ${
          active
            ? "border-l-2 border-[#16f2b3] bg-[#1f2937]"
            : "hover:bg-white/5"
        }`}
        style={{
          paddingLeft: `${depth * 22 + 18}px`,
        }}
      >
        {/* Left */}

        <div className="relative flex min-w-0 flex-1 items-center gap-3">
          {depth > 0 && (
            <div className="absolute -left-4 top-0 bottom-0 w-px bg-white/10" />
          )}

          {expandable ? (
            <motion.div
              animate={{
                rotate: open ? 90 : 0,
              }}
              transition={{
                duration: 0.2,
              }}
            >
              <FiChevronRight className="text-gray-500" />
            </motion.div>
          ) : (
            <div className="w-4" />
          )}

          {isFolder ? (
            <FiFolder className="text-xl text-[#16f2b3]" />
          ) : (
            getFileIcon(node.name)
          )}

          <span
            className={`truncate font-mono ${
              active ? "text-[#16f2b3]" : "text-gray-200"
            }`}
          >
            {node.name}
          </span>
        </div>

        {/* Right */}

        {isFolder && (
          <div className="hidden shrink-0 items-center gap-3 lg:flex">
            {node.description && (
              <span className="text-sm text-gray-500">
                {node.description}
              </span>
            )}

            {node.children && (
              <span className="rounded-full bg-white/5 px-2 py-0.5 text-xs text-gray-400">
                {countItems(node.children)} items
              </span>
            )}
          </div>
        )}
      </div>

      <AnimatePresence initial={false}>
        {expandable && open && (
          <motion.div
            initial={{
              height: 0,
              opacity: 0,
            }}
            animate={{
              height: "auto",
              opacity: 1,
            }}
            exit={{
              height: 0,
              opacity: 0,
            }}
            transition={{
              duration: 0.25,
            }}
          >
            {node.children.map((child) => (
              <RepositoryTree
                key={`${node.name}-${child.name}`}
                node={child}
                depth={depth + 1}
                onSelect={onSelect}
                selected={selected}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}