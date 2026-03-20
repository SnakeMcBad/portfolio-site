import Container from "@/components/layout/Container";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/shared/ProjectCard";
import Reveal from "@/components/shared/Reveal";
import SectionHeading from "@/components/shared/SectionHeading";

export default function FeaturedProjects() {
  const featured = projects.filter((project) => project.featured);

  return (
    <section className="section">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Selected Work"
            title="Projects built around real constraints"
            description="This portfolio is not meant to be a pile of random experiments. It is meant to show how I think, structure work, and build products with actual tradeoffs in mind."
          />
        </Reveal>

        <div className="projects-grid">
          {featured.map((project, index) => (
            <Reveal key={project.slug} delay={index * 0.08}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}