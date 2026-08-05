import Projects from "../components/projects/Projects";
import NextPage from "../components/layout/NextPage";

export const metadata = {
  title: "Projects",
};

export default function ProjectsPage() {
  return (
    <main>
      <Projects />

      <NextPage
        href="/contact"
        number="04"
        title="Contact"
        description="Let's work together"
      />
    </main>
  );
}
