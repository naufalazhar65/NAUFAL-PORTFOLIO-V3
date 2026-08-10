"use client";

import Link from "next/link";

import BrowserFrame from "./BrowserFrame";
import DemoLayout from "./desktop/DemoLayout";
import MobileLiveDemo from "./mobile/MobileLiveDemo";
import DemoProvider from "./shared/DemoProvider";

import Section from "../../../../components/ui/Section";
import Container from "../../../../components/ui/Container";
import SectionHeading from "../../../../components/ui/SectionHeading";
import MagneticButton from "../../../../components/ui/MagneticButton";

export default function LiveDemo({ project }) {
  if (project.slug !== "flowtest-studio") {
    return null;
  }

  return (
    <Section id="live-demo">
      <Container>
        <SectionHeading
          eyebrow="LIVE DEMO"
          title="Experience FlowTest Studio"
          description="Explore the interactive automation workflow, execution engine, and testing interface built for FlowTest Studio."
        />

        {/* Actions */}

        <div className="mb-16 flex flex-wrap justify-center gap-4">
          <MagneticButton className="inline-flex" strength={0.3}>
            <Link
              href="/flowtest"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Launch FlowTest Studio full demo"
              className="
                rounded-2xl
                bg-[#16f2b3]
                px-6
                py-3
                font-semibold
                text-black
                transition
                hover:scale-105
              "
            >
              Launch Full Demo
            </Link>
          </MagneticButton>

          <MagneticButton className="inline-flex" strength={0.3}>
            <Link
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View FlowTest Studio source code"
              className="
                rounded-2xl
                border
                border-white/10
                px-6
                py-3
                font-semibold
                text-white
                transition
                hover:bg-white/5
              "
            >
              View Source Code
            </Link>
          </MagneticButton>
        </div>

        {/* Demo */}

        <BrowserFrame>
          <DemoProvider>
            {/* Desktop */}

            <div className="hidden lg:block">
              <DemoLayout />
            </div>

            {/* Mobile */}

            <div className="lg:hidden">
              <MobileLiveDemo />
            </div>
          </DemoProvider>
        </BrowserFrame>
      </Container>
    </Section>
  );
}
