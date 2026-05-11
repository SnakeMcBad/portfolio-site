import Container from "@/components/layout/Container";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/shared/ProjectCard";
import Reveal from "@/components/shared/Reveal";

export default function ProjectsPage() {
  return (
    <>
      <section className="page-hero">
        <Container>
          <Reveal>
            <h1>Projects</h1>
            <p>
              A collection of full-stack, frontend, and infrastructure work — spanning social
              platforms, communication systems, and developer tooling, with an emphasis on
              practical implementation and end-to-end ownership.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="section">
        <Container>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <Reveal key={project.slug} delay={index * 0.06}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
