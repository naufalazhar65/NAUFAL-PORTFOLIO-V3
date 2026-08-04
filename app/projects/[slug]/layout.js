import { projectsData } from "@/utils/data/projects";

export async function generateMetadata({ params }) {
  const project = projectsData.find((item) => item.slug === params.slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  const title = `${project.name} | Naufal Azhar`;

  const description =
    project.hero?.description ||
    project.description ||
    "Software Quality Assurance Project";

  const image =
    typeof project.image === "string" ? project.image : project.image?.src;

  const url = `https://naufalv3.netlify.app/projects/${project.slug}`;

  return {
    title,

    description,

    alternates: {
      canonical: url,
    },

    openGraph: {
      title,
      description,
      url,
      siteName: "Naufal Portfolio",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: project.name,
        },
      ],
      locale: "en_US",
      type: "article",
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: image ? [image] : [],
    },
  };
}

export default function ProjectLayout({ children }) {
  return children;
}
