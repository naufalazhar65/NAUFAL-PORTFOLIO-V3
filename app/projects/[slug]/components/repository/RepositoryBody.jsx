"use client";

import RepositoryTree from "../RepositoryTree";
import RepositoryPreview from "./RepositoryPreview";

export default function RepositoryBody({
  repository,
  selectedFile,
  onSelect,
  onClose,
}) {
  return (
    <div
      className="
        lg:grid
        lg:h-[700px]
        lg:grid-cols-[380px_1fr]
      "
    >
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
        {repository.folders.map((folder) => (
          <RepositoryTree
            key={folder.name}
            node={folder}
            onSelect={onSelect}
            selected={selectedFile}
          />
        ))}

        {repository.files.map((file) => (
          <RepositoryTree
            key={file.name}
            node={file}
            onSelect={onSelect}
            selected={selectedFile}
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
        <RepositoryPreview file={selectedFile} onClose={onClose} />
      </div>
    </div>
  );
}
