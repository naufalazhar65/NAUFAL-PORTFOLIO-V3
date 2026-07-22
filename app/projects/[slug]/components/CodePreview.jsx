"use client";

import { motion } from "framer-motion";
import { useState } from "react";

import {
  FiClipboard,
  FiCheck,
  FiCode,
} from "react-icons/fi";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

import {
  oneDark,
} from "react-syntax-highlighter/dist/esm/styles/prism";

export default function CodePreview({ project }) {
  const [copied, setCopied] = useState(false);

  const copyCode = async () => {
    await navigator.clipboard.writeText(project.code);

    setCopied(true);

    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-6xl">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          className="mb-12"
        >
          <span className="uppercase tracking-[5px] text-[#16f2b3] text-sm">
            Source Code
          </span>

          <h2 className="mt-4 text-5xl font-extrabold text-white">
            Code Preview
          </h2>

          <p className="mt-5 max-w-3xl text-gray-400 leading-8">
            A simplified example taken from this project.
          </p>
        </motion.div>

        {/* Editor */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          className="overflow-hidden rounded-3xl border border-white/10 bg-[#111827] shadow-2xl"
        >

          {/* Header */}

          <div className="flex items-center justify-between border-b border-white/10 bg-[#1f2937] px-6 py-4">

            <div className="flex items-center gap-4">

              <div className="flex gap-2">
                <div className="h-3 w-3 rounded-full bg-red-500" />
                <div className="h-3 w-3 rounded-full bg-yellow-500" />
                <div className="h-3 w-3 rounded-full bg-green-500" />
              </div>

              <div className="flex items-center gap-2 rounded-lg bg-[#2d3748] px-4 py-2 text-sm text-gray-300">

                <FiCode />

                example.cy.js

              </div>

            </div>

            <button
              onClick={copyCode}
              className="flex items-center gap-2 rounded-lg border border-white/10 px-4 py-2 text-sm text-gray-300 transition hover:border-[#16f2b3] hover:text-[#16f2b3]"
            >
              {copied ? <FiCheck /> : <FiClipboard />}

              {copied ? "Copied" : "Copy"}
            </button>

          </div>

          {/* Syntax Highlight */}

          <SyntaxHighlighter
            language="javascript"
            style={oneDark}
            showLineNumbers
            wrapLongLines
            customStyle={{
              margin: 0,
              padding: "32px",
              background: "#111827",
              fontSize: "15px",
              borderRadius: 0,
            }}
            lineNumberStyle={{
              minWidth: "2rem",
              color: "#6b7280",
            }}
          >
            {project.code}
          </SyntaxHighlighter>

        </motion.div>

      </div>
    </section>
  );
}