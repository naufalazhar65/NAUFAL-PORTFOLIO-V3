"use client";

import { useState } from "react";
import { FiGithub, FiGitBranch, FiArrowUpRight } from "react-icons/fi";
import { motion } from "framer-motion";

import RepositoryTree from "./RepositoryTree";
import RepositoryPreview from "./RepositoryPreview";

export default function Repository({ project }) {
  const [selectedFile, setSelectedFile] = useState(null);

  if (!project.repository) {
    return null;
  }

  const totalItems =
    project.repository.folders.length +
    project.repository.files.length;

  return (
    <section
      id="repository"
      className="
        relative
        border-b
        border-white/[0.08]
        py-20
        sm:py-24
        lg:py-28
      "
    >
      <div
        className="
          mx-auto
          w-full
          max-w-[1280px]
          px-4
          sm:px-6
          lg:px-0
        "
      >
        {/* =========================
            HEADER
        ========================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.12,
          }}
          transition={{
            duration: 0.6,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="
            grid
            gap-8
            border-b
            border-white/[0.08]
            pb-8
            lg:grid-cols-[1fr_0.55fr]
            lg:items-end
          "
        >
          <div>
            <div className="flex items-center gap-4">
              <span
                className="
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.14em]
                  text-[#16f2b3]
                "
              >
                10
              </span>

              <span
                className="
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.14em]
                  text-gray-400
                "
              >
                Repository
              </span>
            </div>

            <h2
              className="
                mt-7
                max-w-4xl
                text-[clamp(44px,6vw,76px)]
                font-semibold
                leading-[0.94]
                tracking-[-0.07em]
                text-white
              "
            >
              See how the
              <br />
              <span className="text-gray-400">
                code is organized.
              </span>
            </h2>
          </div>

          <p
            className="
              max-w-md
              text-[14px]
              leading-7
              text-gray-300
            "
          >
            A simplified view of the source structure. The full
            implementation remains in the repository; this view
            highlights the boundaries that matter to the product.
          </p>
        </motion.div>

        {/* =========================
            REPOSITORY
        ========================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.1,
          }}
          transition={{
            duration: 0.65,
            delay: 0.05,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="mt-10 lg:mt-12"
        >
          <div
            className="
              overflow-hidden
              border
              border-white/[0.08]
              bg-[#050505]
            "
          >
            {/* Browser header */}

            <div
              className="
                grid
                h-11
                grid-cols-[1fr_auto_1fr]
                items-center
                border-b
                border-white/[0.08]
                bg-[#080808]
                px-4
                sm:px-5
              "
            >
              <div className="flex items-center gap-[6px]">
                <span className="h-[7px] w-[7px] rounded-full bg-[#ff5f57]" />
                <span className="h-[7px] w-[7px] rounded-full bg-[#febc2e]" />
                <span className="h-[7px] w-[7px] rounded-full bg-[#28c840]" />
              </div>

              <span
                className="
                  max-w-[240px]
                  truncate
                  text-[10px]
                  font-medium
                  text-gray-500
                "
              >
                {project.repository.root}
              </span>

              <div
                className="
                  hidden
                  items-center
                  justify-end
                  gap-2
                  sm:flex
                "
              >
                <FiGitBranch
                  size={12}
                  className="text-gray-500"
                />

                <span
                  className="
                    text-[9px]
                    font-semibold
                    uppercase
                    tracking-[0.12em]
                    text-gray-500
                  "
                >
                  {project.repository.branch}
                </span>
              </div>
            </div>

            {/* Repository Info */}

            <div
              className="
                flex
                flex-col
                gap-3
                border-b
                border-white/[0.08]
                px-4
                py-4
                sm:flex-row
                sm:items-center
                sm:justify-between
                sm:px-5
              "
            >
              <div className="flex min-w-0 items-center gap-3">
                <FiGithub
                  size={16}
                  className="shrink-0 text-gray-400"
                />

                <div className="min-w-0">
                  <p className="truncate text-sm font-medium text-white">
                    {project.repository.root}
                  </p>

                  <p className="mt-1 text-[10px] uppercase tracking-[0.1em] text-gray-500">
                    {project.repository.branch}
                  </p>
                </div>
              </div>

              <span className="shrink-0 text-[10px] font-semibold uppercase tracking-[0.12em] text-gray-500">
                {totalItems} top-level items
              </span>
            </div>

            {/* Body */}

            <div
              className="
                lg:grid
                lg:h-[560px]
                lg:grid-cols-[300px_1fr]
              "
            >
              {/* Explorer */}

              <div
                className="
                  max-h-[360px]
                  overflow-y-auto
                  border-b
                  border-white/[0.08]
                  lg:max-h-[560px]
                  lg:border-b-0
                  lg:border-r
                  lg:border-white/[0.08]
                "
              >
                <div className="border-b border-white/[0.06] px-4 py-3">
                  <span className="text-[9px] font-semibold uppercase tracking-[0.14em] text-gray-500">
                    Explorer
                  </span>
                </div>

                <div>
                  {project.repository.folders.map(
                    (folder) => (
                      <RepositoryTree
                        key={folder.name}
                        node={folder}
                        selected={selectedFile}
                        onSelect={setSelectedFile}
                      />
                    ),
                  )}

                  {project.repository.files.map(
                    (file) => (
                      <RepositoryTree
                        key={file.name}
                        node={file}
                        selected={selectedFile}
                        onSelect={setSelectedFile}
                      />
                    ),
                  )}
                </div>
              </div>

              {/* Preview */}

              <div
                className="
                  min-h-[360px]
                  overflow-y-auto
                  bg-[#070707]
                "
              >
                <RepositoryPreview
                  file={selectedFile}
                  onClose={() =>
                    setSelectedFile(null)
                  }
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* =========================
            SOURCE
        ========================= */}

        <div
          className="
            flex
            flex-col
            gap-4
            py-6
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <p className="max-w-lg text-[12px] leading-6 text-gray-500">
            The explorer above is intentionally simplified for the
            case study. Use GitHub for the complete source and history.
          </p>

          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex
              shrink-0
              items-center
              gap-2
              text-[11px]
              font-medium
              text-gray-300
              transition-colors
              duration-200
              hover:text-white
            "
          >
            Open repository on GitHub
            <FiArrowUpRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}