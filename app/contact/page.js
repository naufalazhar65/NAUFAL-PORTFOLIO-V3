import ContactSection from "../components/contact";
import NextPage from "../components/layout/NextPage";


export const metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <main>
      <ContactSection />
      <NextPage
  href="/"
  number="00"
  title="Back to Home"
  description="Return to the homepage"
/>
    </main>
  );
}