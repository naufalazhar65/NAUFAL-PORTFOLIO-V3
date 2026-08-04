"use client";

import { useState } from "react";
import { FiGithub } from "react-icons/fi";

import Section from "@/app/components/ui/section/Section";
import SectionHeader from "@/app/components/ui/section/SectionHeader";
import Panel from "@/app/components/ui/panel/Panel";

import RepositoryTree from "./RepositoryTree";
import RepositoryPreview from "./RepositoryPreview";

export default function Repository({ project }) {
  const [selectedFile, setSelectedFile] = useState(null);

  if (!project.repository) return null;

  const totalItems =
    project.repository.folders.length + project.repository.files.length;

  return (
    <Section id="repository" width="xl">
      <SectionHeader
        eyebrow="Source Code"
        title="Repository Structure"
        description="A simplified view of the repository architecture used in this project."
      />

      <Panel
        variant="repository"
        animated
        padding="none"
        className="overflow-hidden"
      >
        {/* Header */}

        <div className="border-b border-white/10 bg-[#0d1117]">
          {/* Window Controls */}

          <div className="flex items-center gap-2 border-b border-white/5 px-6 py-3">
            <div className="h-3 w-3 rounded-full bg-[#ff5f57]" />
            <div className="h-3 w-3 rounded-full bg-[#febc2e]" />
            <div className="h-3 w-3 rounded-full bg-[#28c840]" />

            <span className="ml-4 text-sm font-medium text-gray-400">
              Explorer
            </span>
          </div>

          {/* Repository Info */}

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

        <div className="lg:grid lg:h-[700px] lg:grid-cols-[380px_1fr]">
          {/* Explorer */}

          <div
            className="
              divide-y
              divide-white/5
              lg:max-h-[700px]
              lg:overflow-y-auto
              lg:border-r
              lg:border-white/10
            "
          >
            {project.repository.folders.map((folder) => (
              <RepositoryTree
                key={folder.name}
                node={folder}
                selected={selectedFile}
                onSelect={setSelectedFile}
              />
            ))}

            {project.repository.files.map((file) => (
              <RepositoryTree
                key={file.name}
                node={file}
                selected={selectedFile}
                onSelect={setSelectedFile}
              />
            ))}
          </div>

          {/* Preview */}

          <div
            className="
              hidden
              overflow-y-auto
              bg-[#0d1117]
              lg:block
            "
          >
            <RepositoryPreview
              file={selectedFile}
              onClose={() => setSelectedFile(null)}
            />
          </div>
        </div>
      </Panel>
    </Section>
  );
}