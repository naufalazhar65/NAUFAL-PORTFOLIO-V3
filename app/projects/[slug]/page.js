import { notFound } from "next/navigation";

import { projectsData } from "@/utils/data/projects";

import Hero from "./components/hero";
import LiveDemo from "./components/live-demo/LiveDemo";
import Overview from "./components/Overview";
import ProblemDecision from "./components/ProblemDecision";
import Gallery from "./components/gallery/Gallery";
import TechStack from "./components/TechStack";
import Repository from "./components/repository/Repository";
import AutomationWorkflow from "./components/AutomationWorkflow";
import Results from "./components/Results";
import Roadmap from "./components/roadmap/Roadmap";
import ProjectNavigation from "./components/navigation/ProjectNavigation";
import CTA from "./components/cta/CTA";

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export default function ProjectPage({ params }) {
  const project = projectsData.find(
    (item) => item.slug === params.slug,
  );

  if (!project) {
    notFound();
  }

  return (
    <>
      <ProjectNavigation project={project} />

      <div className="xl:pl-64">
        {/* 01 — What is it? */}

        <Hero project={project} />

        {/* 02 — Try the product */}

        <LiveDemo project={project} />

        {/* 03 — Project snapshot */}

        <Overview project={project} />

        {/* 04 — Why this product exists */}

        <ProblemDecision project={project} />

        {/* 05 — Visual proof */}

        <Gallery project={project} />

        {/* 06 — Engineering decisions */}

        <TechStack project={project} />

        {/* 07 — How the system works */}

        <AutomationWorkflow project={project} />

        {/* 08 — What is actually working */}

        <Results project={project} />

        {/* 09 — What comes next */}

        <Roadmap project={project} />

        {/* 10 — Source */}

        <Repository project={project} />

        {/* 11 — Continue */}

        <CTA project={project} />
      </div>
    </>
  );
}