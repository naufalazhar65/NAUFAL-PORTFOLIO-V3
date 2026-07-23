"use client";

import { motion } from "framer-motion";

const getLanguage = (fileName) => {
  const ext = fileName.split(".").pop()?.toLowerCase();

  switch (ext) {
    case "py":
      return "Python";

    case "md":
      return "Markdown";

    case "json":
      return "JSON";

    case "ini":
      return "INI";

    case "txt":
      return "Text";

    case "apk":
      return "Android APK";

    case "png":
    case "jpg":
    case "jpeg":
      return "Image";

    default:
      return "File";
  }
};

export default function RepositoryPreview({ file }) {
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

          <span className="text-gray-500">×</span>
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

      <div className="overflow-auto p-6">
        <table className="w-full border-collapse font-mono text-sm">
          <tbody>
            {lines.map((line, index) => (
              <tr key={index}>
                <td
                  className="
                    w-12
                    select-none
                    pr-5
                    text-right
                    text-gray-600
                    align-top
                  "
                >
                  {index + 1}
                </td>

                <td
                  className="
                    whitespace-pre
                    text-gray-300
                  "
                >
                  {line}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
}
