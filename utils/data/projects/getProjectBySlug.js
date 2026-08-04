import { projectsData } from "@/utils/data/projects";

export function getProjectBySlug(slug) {
  return projectsData.find((project) => project.slug === slug);
}