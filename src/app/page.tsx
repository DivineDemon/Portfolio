import { Header } from "@/sections/header";
import { HeroSection } from "@/sections/hero";
import { ProjectsSection } from "@/sections/projects";
import { TapeSection } from "@/sections/tape";
import { TestimonialsSection } from "@/sections/testimonials";

const Home = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <ProjectsSection />
      <TapeSection />
      <TestimonialsSection />
    </div>
  );
};

export default Home;
