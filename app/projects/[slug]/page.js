import { notFound } from "next/navigation";

import { projectsData } from "@/utils/data/projects";

import Hero from "./components/hero";
import Overview from "./components/Overview";
import TechStack from "./components/TechStack";
import Features from "./components/Features";
import DevelopmentProcess from "./components/DevelopmentProcess";
import Results from "./components/Results";
import ChallengeSolution from "./components/ChallengeSolution";
import Repository from "./components/repository";
import AutomationWorkflow from "./components/AutomationWorkflow";
import ProjectNavigation from "./components/navigation/ProjectNavigation";
import LiveDemo from "./components/live-demo/LiveDemo";
import WhyBuilt from "./components/why-built/WhyBuilt";
import Roadmap from "./components/roadmap/Roadmap";
import CTA from "./components/cta/CTA";
import Gallery from "./components/gallery/Gallery";

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
      <ProjectNavigation />

      <div className="xl:pl-64">
        <Hero project={project} />

        <LiveDemo project={project} />

        <Overview project={project} />

        <WhyBuilt project={project} />


        <ChallengeSolution project={project} />

        <Gallery project={project} />

        <TechStack project={project} />

        <Roadmap project={project} />

        <Repository project={project} />

        <CTA project={project} />

        <AutomationWorkflow project={project} />

        <Features project={project} />

        <DevelopmentProcess project={project} />

        <Results project={project} />
      </div>
    </>
  );
}
