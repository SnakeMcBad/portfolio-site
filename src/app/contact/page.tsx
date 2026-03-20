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
                <p>your-email@example.com</p>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="contact-panel">
                <h3>Links</h3>
                <p>GitHub: github.com/yourusername</p>
                <p>LinkedIn: linkedin.com/in/yourusername</p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}