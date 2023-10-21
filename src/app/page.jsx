import AboutSection from "@/components/about-section";
import CareerSection from "@/components/career-section";
import ContactSection from "@/components/contact-section";
import Header from "@/components/header";

export default function Home() {
  return (
    <main className="bg-dark-purple w-full h-screen md:overflow-y-scroll">
      <Header />
      <AboutSection />
      <CareerSection />
      <ContactSection />
    </main>
  )
}
