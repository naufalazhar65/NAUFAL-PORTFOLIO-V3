import Skills from "../components/skills";
import NextPage from "../components/layout/NextPage";

export const metadata = {
  title: "Skills",
};

export default function SkillsPage() {
  return (
    <main>
      <Skills />
      <NextPage
        href="/projects"
        number="03"
        title="Projects"
        description="Featured Works"
      />
    </main>
  );
}
