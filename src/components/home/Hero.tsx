import Container from "@/components/layout/Container";
import ButtonLink from "@/components/shared/ButtonLink";
import Reveal from "@/components/shared/Reveal";

export default function Hero() {
  return (
    <section className="hero">
      <Container className="hero-grid">
        <Reveal className="hero-copy">
          <span className="hero-kicker">B.S. in Computer Science in Progress</span>
          <h1>
            Building interactive
            <br />
            web experiences
            <br />
            that feel engineered.
          </h1>
          <p>
            I build polished, product-minded web projects with a focus on React,
            frontend architecture, interactive UI systems, and full-stack problem
            solving. My portfolio is centered on real implementation work.
          </p>

          <div className="hero-actions">
            <ButtonLink href="/case-studies/chatroom-plugin/">
              Read the flagship case study
            </ButtonLink>
            <ButtonLink href="/projects/" variant="secondary">
              Explore projects
            </ButtonLink>
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="hero-panel">
            <span className="hero-panel-label">Featured Build</span>
            <h3>Real-Time Chatroom Plugin</h3>
            <p>
              A Discord-inspired WordPress chat experience with permissions,
              moderation behavior, message grouping, and role-aware interaction logic.
            </p>

            <div className="hero-metrics">
              <div className="metric-card">
                <strong>Role-aware UI</strong>
                <span>Admin, moderator, and user behavior paths</span>
              </div>
              <div className="metric-card">
                <strong>State-heavy UX</strong>
                <span>Blocked users, message controls, grouped rendering</span>
              </div>
              <div className="metric-card">
                <strong>Real constraints</strong>
                <span>WordPress integration and product-minded tradeoffs</span>
              </div>
              <div className="metric-card">
                <strong>Case study first</strong>
                <span>Architecture, decisions, lessons, and next steps</span>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}