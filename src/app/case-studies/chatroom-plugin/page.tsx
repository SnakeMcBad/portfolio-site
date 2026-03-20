import Container from "@/components/layout/Container";
import Reveal from "@/components/shared/Reveal";
import ButtonLink from "@/components/shared/ButtonLink";

export default function ChatroomCaseStudyPage() {
  return (
    <>
      <section className="case-study-hero">
        <Container>
          <Reveal>
            <span className="eyebrow">Flagship Case Study</span>
            <h1 className="section-title">Real-Time WordPress Chatroom Plugin</h1>
            <p className="section-description">
              A Discord-inspired chat experience designed for a WordPress-based community,
              focused on permissions, moderation, state-heavy UI behavior, and a more native
              product feel than an off-the-shelf embed could provide.
            </p>

            <div className="case-study-meta">
              <span>Role: Full-stack engineer</span>
              <span>Stack: Node.js, React, JavaScript, WordPress</span>
              <span>Status: Active portfolio case study</span>
            </div>

            <div className="hero-actions" style={{ marginTop: "1.5rem" }}>
              <ButtonLink href="/projects/" variant="secondary">
                Back to projects
              </ButtonLink>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="section">
        <Container>
          <div className="case-study-grid">
            <Reveal>
              <div className="case-study-panel">
                <h3>The problem</h3>
                <p>
                  The goal was to create a richer community chat experience that felt
                  integrated with the platform instead of bolted onto it. That meant
                  handling real interface behavior, permissions, moderation controls,
                  and message presentation in a way that supported the product rather
                  than fighting it.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.06}>
              <div className="case-study-panel">
                <h3>Key constraints</h3>
                <ul>
                  <li>Needed to live inside a WordPress ecosystem</li>
                  <li>Role-aware behavior for different user types</li>
                  <li>Interactive message controls without a messy UI</li>
                  <li>Blocked-user behavior had to remain understandable</li>
                  <li>No public demo due to infrastructure and hosting cost tradeoffs</li>
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="case-study-panel">
                <h3>What I built</h3>
                <p>
                  The project centered on real-time messaging patterns, grouped message
                  rendering, edit and delete controls, moderation-aware UI, and the
                  logic needed to keep behavior coherent when user state changed.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.14}>
              <div className="case-study-panel">
                <h3>Engineering challenges</h3>
                <ul>
                  <li>Keeping grouped message rendering consistent</li>
                  <li>Handling blocked users without breaking interaction patterns</li>
                  <li>Managing permission-based controls cleanly</li>
                  <li>Balancing richer UX with maintainable plugin structure</li>
                  <li>Making tradeoffs under practical deployment constraints</li>
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.18}>
              <div className="case-study-panel">
                <h3>What this project demonstrates</h3>
                <p>
                  This is not just a chat UI. It shows how I think through product
                  boundaries, user behavior, state complexity, and maintainable
                  implementation inside a constrained environment.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.22}>
              <div className="case-study-panel">
                <h3>Next steps</h3>
                <ul>
                  <li>Deeper visual walkthroughs and screenshots</li>
                  <li>Architecture diagrams for frontend and backend flow</li>
                  <li>Expanded write-up on auth and moderation decisions</li>
                  <li>Scalability roadmap for future real-time growth</li>
                  <li>Accessibility and testing improvements</li>
                </ul>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}