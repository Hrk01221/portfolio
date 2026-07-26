import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Projects } from "@/sections/Projects";
import { Education } from "@/sections/Education";
import { Skills } from "@/sections/Skills";
import { Contact } from "@/sections/Contact";
import { Navbar } from "@/layout/Navbar";
import { Footer } from "@/sections/Footer";
import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";
import { MouseSpotlight } from "@/components/MouseSpotlight";
function App() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-40% 0px -40% 0px",
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <MouseSpotlight/>
      {/* Background*/}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background" />
      </div>
      <div
        onClick={() => {
          document.getElementById("hero")?.scrollIntoView({
            behavior: "smooth",
          });
        }}
        className="fixed right-2 bottom-2 lg:right-10 lg:bottom-10 rounded-full glass p-3 lg:p-4 cursor-pointer z-20"
      >
        <ArrowUp className="w-5 h-5" />
      </div>
      <Navbar activeSection={activeSection} />
      <main>
        <Hero />
        <About />
        <Projects />
        <Education />
        <Skills />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;
