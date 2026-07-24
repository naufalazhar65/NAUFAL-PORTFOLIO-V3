import { notFound } from "next/navigation";
import { projectsData } from "@/utils/data/projects-data";
import Hero from "./components/hero";
import Overview from "./components/Overview";
import TechStack from "./components/TechStack";
import Features from "./components/Features";
import DevelopmentProcess from "./components/DevelopmentProcess";
import Results from "./components/Results";
import ChallengeSolution from "./components/ChallengeSolution";
import Repository from "./components/Repository";
import AutomationWorkflow from "./components/AutomationWorkflow";

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export default function ProjectPage({ params }) {
  const project = projectsData.find((item) => item.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <Hero project={project} />
      <Overview project={project} />
      <ChallengeSolution project={project} />
      <TechStack project={project} />
      <Repository project={project} />
      <AutomationWorkflow project={project} />
      <Features project={project} />
      <DevelopmentProcess project={project} />
      <Results project={project} />
    </>
  );
}
