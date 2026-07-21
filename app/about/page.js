import AboutSection from "../components/about";
import NextPage from "../components/common/NextPage";

export const metadata = {
  title: "About | Naufal",
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
