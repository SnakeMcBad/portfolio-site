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
            eyebrow="Projects"
            title="Software and Platform work"
            description="A mix of frontend, backend, automation, and integration work drawn from real development experience, with an emphasis on solo-work, practical implementation, maintainable structure, and full-stack problem solving."
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