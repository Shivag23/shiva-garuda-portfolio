import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";
import { Experience } from "@/components/experience";
import { Skills } from "@/components/skills";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="flex min-h-full flex-col">
      <Nav />
      <main className="flex-1">
        <Hero />
        <div className="hairline h-px w-full" />
        <Projects />
        <div className="hairline h-px w-full" />
        <Experience />
        <div className="hairline h-px w-full" />
        <Skills />
      </main>
      <Footer />
    </div>
  );
}
