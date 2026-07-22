import AboutSection from "../components/about";
import NextPage from "../components/layout/NextPage";

export const metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <main>
      <AboutSection />
      <NextPage
        href="/skills"
        number="02"
        title="Skills"
        description="Technologies & Tools"
      />
    </main>
  );
}
