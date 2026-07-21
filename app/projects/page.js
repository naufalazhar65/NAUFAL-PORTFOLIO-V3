import Projects from "../components/projects";
import NextPage from "../components/common/NextPage";

export const metadata = {
  title: "Projects | Naufal",
};

export default function ProjectsPage() {
  return (
    <main>
      <Projects />
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
