import ContactSection from "../components/contact";
import NextPage from "../components/common/NextPage";


export const metadata = {
  title: "Contact | Naufal",
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