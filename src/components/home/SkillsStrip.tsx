import Container from "@/components/layout/Container";
import Reveal from "@/components/shared/Reveal";

const skills = [
  "Next.js",
  "React",
  "TypeScript",
  "Node.js",
  "JavaScript",
  "Motion",
  "CSS",
  "WordPress Integration",
  "UI Architecture",
  "Interactive Frontend Systems",
];

export default function SkillsStrip() {
  return (
    <section className="section-tight">
      <Container>
        <Reveal>
          <div className="skills-strip">
            {skills.map((skill) => (
              <span key={skill} className="skill-pill">
                {skill}
              </span>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}