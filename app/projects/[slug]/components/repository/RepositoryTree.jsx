"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiChevronRight } from "react-icons/fi";

import { FiFolder, getFileIcon } from "./RepositoryIcons";

function hasSelectedChild(node, selected) {
  if (!node.children?.length) return false;

  return node.children.some((child) => {
    if (child.type !== "folder") {
      return child.name === selected?.name;
    }

    return hasSelectedChild(child, selected);
  });
}

export default function RepositoryTree({
  node,
  depth = 0,
  onSelect,
  selected,
}) {
  const isFolder = node.type === "folder";

  const expandable =
    isFolder && Array.isArray(node.children) && node.children.length > 0;

  const shouldOpen = useMemo(
    () => hasSelectedChild(node, selected),
    [node, selected],
  );

  const [open, setOpen] = useState(shouldOpen);

  useEffect(() => {
    if (shouldOpen) {
      setOpen(true);
    }
  }, [shouldOpen]);

  const active = !isFolder && selected?.name === node.name;

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
        style={{
          paddingLeft: `${depth * 18 + 16}px`,
        }}
        className={`
          group
          relative
          flex
          cursor-pointer
          items-center
          justify-between
          border-l-2
          px-3
          py-2.5
          transition-all
          duration-200

          ${
            active
              ? "border-[#16f2b3] bg-[#162031]"
              : "border-transparent hover:bg-white/5"
          }
        `}
      >
        {/* Left */}

        <div className="flex min-w-0 flex-1 items-center gap-2">
          {expandable ? (
            <motion.div
              animate={{
                rotate: open ? 90 : 0,
              }}
              transition={{
                duration: 0.2,
              }}
              className="text-gray-500"
            >
              <FiChevronRight size={14} />
            </motion.div>
          ) : (
            <div className="w-[14px]" />
          )}

          {isFolder ? (
            <FiFolder
              className={`
                text-lg
                transition-colors

                ${open ? "text-[#16f2b3]" : "text-gray-400"}
              `}
            />
          ) : (
            getFileIcon(node.name)
          )}

          <span
            className={`
              truncate
              font-mono
              text-sm
              transition-colors

              ${
                active
                  ? "font-semibold text-[#16f2b3]"
                  : "text-gray-300 group-hover:text-white"
              }
            `}
          >
            {node.name}
          </span>
        </div>

        {/* Right */}

        {isFolder && (
          <div className="hidden items-center gap-2 lg:flex">
            {node.children?.length > 0 && (
              <span className="rounded-full bg-white/5 px-2 py-0.5 text-[10px] text-gray-400">
                {node.children.length}
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
            className="overflow-hidden"
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
