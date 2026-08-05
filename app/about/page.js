import About from "@/app/components/about";
import NextPage from "@/app/components/layout/NextPage";

export const metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <>
      <About />

      <NextPage
        href="/skills"
        number="02"
        title="Skills"
        description="Technologies & Tools"
      />
    </>
  );
}