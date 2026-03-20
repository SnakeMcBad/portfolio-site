import Container from "@/components/layout/Container";
import Reveal from "@/components/shared/Reveal";

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <Container>
          <Reveal>
            <h1>About</h1>
            <p>
              I am building toward a stronger software engineering career while working
              through my B.S. in Computer Science, with a focus on React, Next.js,
              frontend systems, interactivity, and product-minded implementation.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="section">
        <Container>
          <div className="simple-grid">
            <Reveal>
              <div className="about-panel">
                <h3>What I focus on</h3>
                <p>
                  I care about more than getting code to run. I care about structure,
                  readability, UX logic, tradeoffs, and whether a project reflects real
                  engineering judgment instead of tutorial-level assembly.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="about-panel">
                <h3>What I am building toward</h3>
                <p>
                  I want roles where I can contribute to serious product work, deepen
                  my frontend and full-stack skill set, and keep growing through projects
                  that require actual technical judgment.
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}