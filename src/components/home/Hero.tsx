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
            Currently building a full-featured social media platform from the ground up — feeds,
            groups, blogging, live chat, and more.
          </p>

          <div className="hero-actions">
            <ButtonLink href="/projects/social-media-platform/">
              Social Media Platform Breakdown
            </ButtonLink>
            <ButtonLink href="/projects/" variant="secondary">
              Explore Projects
            </ButtonLink>
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="hero-panel">
            <span className="hero-panel-label">Featured Project</span>
            <h3>Full-Stack Social Media Platform</h3>
            <p>
              An end-to-end social network with community feeds, groups, blogs, real-time chat,
              and a notification system — built with deep custom feature work throughout.
            </p>

            <div className="hero-metrics">
              <div className="metric-card">
                <strong>Frontend</strong>
                <span>JavaScript, React, CSS, HTML — custom UI across all features</span>
              </div>
              <div className="metric-card">
                <strong>Backend</strong>
                <span>PHP, Node.js, MySQL, WordPress, PeepSo</span>
              </div>
              <div className="metric-card">
                <strong>Features</strong>
                <span>Feeds, Groups, Blog, Real-Time Chat, Notifications</span>
              </div>
              <div className="metric-card">
                <strong>Focus</strong>
                <span>Feature depth, UX polish, scalable architecture</span>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
