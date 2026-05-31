import { Hero } from "@/src/sections/Hero";
import { Work } from "@/src/sections/Work";
import { About } from "@/src/sections/About";
import { Projects } from "@/src/sections/Projects";
import { Contact } from "@/src/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Work />
      <About />
      <Projects />
      <Contact />
    </>
  );
}

