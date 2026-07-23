import {
  FiFolder,
  FiFileText,
  FiImage,
  FiSettings,
} from "react-icons/fi";

import {
  SiPython,
  SiJson,
  SiMarkdown,
  SiAndroid,
} from "react-icons/si";

export function getFileIcon(name) {
  if (name.endsWith(".py")) return <SiPython className="text-yellow-400" />;
  if (name.endsWith(".json")) return <SiJson className="text-green-400" />;
  if (name.endsWith(".md")) return <SiMarkdown className="text-sky-400" />;
  if (name.endsWith(".apk")) return <SiAndroid className="text-green-500" />;

  if (name.includes("config"))
    return <FiSettings className="text-violet-400" />;

  if (
    name.endsWith(".png") ||
    name.endsWith(".jpg") ||
    name.endsWith(".jpeg")
  )
    return <FiImage className="text-pink-400" />;

  return <FiFileText className="text-gray-400" />;
}

export { FiFolder };