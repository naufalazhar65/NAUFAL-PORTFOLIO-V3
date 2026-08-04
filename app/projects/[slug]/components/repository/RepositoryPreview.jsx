"use client";

import { motion } from "framer-motion";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { FiX } from "react-icons/fi";

import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

const getLanguage = (fileName) => {
  const ext = fileName.split(".").pop()?.toLowerCase();

  switch (ext) {
    case "py":
      return "python";

    case "js":
      return "javascript";

    case "jsx":
      return "jsx";

    case "ts":
      return "typescript";

    case "json":
      return "json";

    case "md":
      return "markdown";

    case "yml":
    case "yaml":
      return "yaml";

    case "ini":
      return "ini";

    case "html":
      return "html";

    case "css":
      return "css";

    default:
      return "text";
  }
};

const getBreadcrumb = (file) => {
  if (file.path) {
    return file.path.split("/");
  }

  return ["src", "features", "flow", file.name];
};

export default function RepositoryPreview({ file, onClose }) {
  if (!file) {
    return (
      <div className="flex h-full min-h-[700px] items-center justify-center bg-[#0d1117]">
        <div className="text-center">
          <div className="text-6xl mb-4">📂</div>

          <h2 className="text-xl text-white">Explorer</h2>

          <p className="mt-2 text-gray-500">Select a file to preview.</p>
        </div>
      </div>
    );
  }

  const previewContent =
    file.content ?? `// Preview is not available for ${file.name}`;

  const lines = previewContent.split("\n");

  return (
    <motion.div
      key={file.name}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex h-full flex-col bg-[#0d1117]"
    >
      {/* Tab */}

      <div className="flex items-center border-b border-white/10 bg-[#161b22]">
        <div className="flex items-center gap-2 border-r border-white/10 bg-[#1f2937] px-5 py-3">
          <span className="text-sm text-white">{file.name}</span>

          <button
            onClick={onClose}
            className="
    flex
    h-6
    w-6
    items-center
    justify-center
    rounded
    text-gray-500
    transition
    hover:bg-red-500/20
    hover:text-red-400
  "
          >
            <FiX size={14} />
          </button>
        </div>
      </div>

      <div className="border-b border-white/10 bg-[#111827] px-6 py-2">
        <div className="flex flex-wrap items-center gap-2 text-xs text-gray-500">
          {getBreadcrumb(file).map((item, index) => (
            <div key={`${item}-${index}`} className="flex items-center gap-2">
              <span
                className={
                  index === getBreadcrumb(file).length - 1
                    ? "text-[#16f2b3]"
                    : ""
                }
              >
                {item}
              </span>

              {index !== getBreadcrumb(file).length - 1 && <span>/</span>}
            </div>
          ))}
        </div>
      </div>

      {/* Info */}

      <div className="border-b border-white/10 px-6 py-3">
        <div className="text-xs uppercase tracking-widest text-gray-500">
          {file.language ?? getLanguage(file.name)}
        </div>

        <div className="mt-1 font-mono text-gray-300">{file.name}</div>
      </div>

      {/* Code */}

      <div className="overflow-auto">
        <SyntaxHighlighter
          language={getLanguage(file.name)}
          style={vscDarkPlus}
          showLineNumbers
          wrapLongLines
          customStyle={{
            margin: 0,
            padding: "24px",
            background: "#0d1117",
            fontSize: "14px",
            minHeight: "650px",
          }}
        >
          {previewContent}
        </SyntaxHighlighter>
      </div>
    </motion.div>
  );
}
