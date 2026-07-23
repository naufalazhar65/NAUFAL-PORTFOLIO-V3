"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FiGithub } from "react-icons/fi";

import RepositoryTree from "./RepositoryTree";
import RepositoryPreview from "./RepositoryPreview";

export default function Repository({ project }) {
  const [selectedFile, setSelectedFile] = useState(null);

  if (!project.repository) return null;

  const totalItems =
    project.repository.folders.length +
    project.repository.files.length;

  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <span className="text-sm uppercase tracking-[6px] text-[#16f2b3]">
            Source Code
          </span>

          <h2 className="mt-4 text-3xl font-extrabold text-white lg:text-5xl">
            Repository Structure
          </h2>

          <p className="mt-5 max-w-3xl leading-8 text-gray-400">
            A simplified view of the repository architecture used in this
            project.
          </p>
        </motion.div>

        {/* Repository */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="overflow-hidden rounded-3xl border border-white/10 bg-[#0b1120] shadow-[0_20px_80px_rgba(0,0,0,.45)]"
        >
          {/* Header */}

          <div className="border-b border-white/10 bg-[#0d1117]">
            <div className="flex items-center gap-2 border-b border-white/5 px-6 py-3">
              <div className="h-3 w-3 rounded-full bg-[#ff5f57]" />
              <div className="h-3 w-3 rounded-full bg-[#febc2e]" />
              <div className="h-3 w-3 rounded-full bg-[#28c840]" />

              <span className="ml-4 text-sm font-medium text-gray-400">
                Explorer
              </span>
            </div>

            <div className="flex items-center justify-between px-6 py-5">
              <div className="flex items-center gap-4">
                <div className="rounded-xl bg-[#16f2b3]/10 p-3">
                  <FiGithub className="text-2xl text-[#16f2b3]" />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[3px] text-gray-500">
                    Repository
                  </p>

                  <h3 className="mt-1 font-bold text-white">
                    {project.repository.root}
                  </h3>

                  <p className="mt-1 text-sm text-gray-500">
                    Branch: {project.repository.branch}
                  </p>
                </div>
              </div>

              <span className="rounded-full bg-[#16f2b3]/10 px-4 py-1 text-sm text-[#16f2b3]">
                {totalItems} items
              </span>
            </div>
          </div>

          {/* Body */}

          <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr]">
            {/* Explorer */}

            <div className="divide-y divide-white/5 lg:border-r lg:border-white/10">
              {project.repository.folders.map((folder) => (
                <RepositoryTree
                  key={folder.name}
                  node={folder}
                  onSelect={setSelectedFile}
                  selected={selectedFile}
                />
              ))}

              {project.repository.files.map((file) => (
                <RepositoryTree
                  key={file.name}
                  node={file}
                  onSelect={setSelectedFile}
                  selected={selectedFile}
                />
              ))}
            </div>

            {/* Preview (Desktop Only) */}

            <div className="hidden lg:block">
              <RepositoryPreview file={selectedFile} />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}