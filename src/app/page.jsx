import AboutSection from "@/components/about-section";
import Header from "@/components/header";

export default function Home() {
  return (
    <main className="bg-dark-purple w-full h-screen overflow-y-scroll">
      <Header />
      <AboutSection />
    </main>
  )
}
