import Container from "@/components/layout/Container";
import Reveal from "@/components/shared/Reveal";

export default function ContactPage() {
  return (
    <>
      <section className="page-hero">
        <Container>
          <Reveal>
            <h1>Contact</h1>
            <p>
              If you are hiring, collaborating, or just want to talk through a project,
              this is where to reach me.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="section">
        <Container>
          <div className="simple-grid">
            <Reveal>
              <div className="contact-panel">
                <h3>Email</h3>
                <p>terryal@terryal.com</p>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="contact-panel">
                <h3>Links</h3>
                <p>LinkedIn: https://www.linkedin.com/in/mustafa-alghanimi-87272a164/</p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}