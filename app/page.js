import HeroSection from "./components/hero";
import NextPage from "./components/common/NextPage";

export default function Home() {
  return (
    <>
      <HeroSection />

      <NextPage
        href="/about"
        number="01"
        title="About Me"
        description="Learn more about my background"
      />
    </>
  );
}