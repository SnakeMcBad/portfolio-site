import Container from "@/components/layout/Container";
import ButtonLink from "@/components/shared/ButtonLink";
import Reveal from "@/components/shared/Reveal";

export default function Hero() {
  return (
    <section className="hero">
      <Container className="hero-grid">
        <Reveal className="hero-copy">
          <span className="hero-kicker">Software Engineer • 5 years of experience</span>
          <span></span><span className="hero-kicker">A.S. in Computer Science • B.S. in Progress</span>
          <h1>
            Mustafa (Terry)
            <br />
            Alghanimi
          </h1>
          <p>
            Results-driven software engineer with 5 years of experience in designing, automating, 
            and optimizing systems using Next.js, Node.js, React, Python, and Powershell. Strong 
            background in cloud-native development, infrastructure automation, and performance 
            analysis, with hands-on expertise in AWS Services, MongoDB, Jenkins, and Git.  
          </p>
          <p>
            Check my projects below!
          </p>

          <div className="hero-actions">
            <ButtonLink href="/projects/chatroom-plugin/">
              Communication Platform Project Breakdown
            </ButtonLink>
            <ButtonLink href="/projects/" variant="secondary">
              Explore Projects
            </ButtonLink>
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="hero-panel">
            <span className="hero-panel-label">Featured Project</span>
            <h3>Custom Real-Time Chat, Audio, and Video Platform</h3>
            <p>
              Built as a full-stack communication experience for the web, with work spanning
              frontend interaction, backend logic, media features, and platform integration.
            </p>

            <div className="hero-metrics">
              <div className="metric-card">
                <strong>Languages</strong>
                <span>JavaScript, Node.js, PHP, HTML, CSS, PowerShell</span>
              </div>
              <div className="metric-card">
                <strong>Backend</strong>
                <span>Node.js, MongoDB, Cloud integration, Encryption (TLS/SSL)</span>
              </div>
              <div className="metric-card">
                <strong>Development</strong>
                <span>GitHub versioning, iterative debugging, feature refinement</span>
              </div>
              <div className="metric-card">
                <strong>Project Focus</strong>
                <span>Live communication, sizable media handling, cleaner user experience</span>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}