import Container from "@/components/layout/Container";
import Reveal from "@/components/shared/Reveal";
import Timeline from "@/components/about/Timeline";

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <Container>
          <Reveal>
            <h1>About</h1>
            <p>
              I am a full-stack software developer with experience across frontend,
              backend, automation, plugins, and cloud-supported systems. My background
              includes building with Node.js, React, Next, PowerShell, Python, PHP, HTML,
              CSS, MongoDB, SQL, GitHub, and AWS, while continuing my path in computer science.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="section">
        <Container>
          <div className="simple-grid">
            <Reveal>
              <div className="about-panel">
                <h3>Technical background</h3>
                <p>
                  My work has included automation, deployment support, plugin development,
                  backend and data-layer work, frontend implementation, and performance-focused
                  system support. I enjoy projects that test my technical problem solving skills 
                  and help causes that I believe in!
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="about-panel">
                <h3>Career direction</h3>
                <p>
                  I want to keep growing as a software engineer by entering the Cybersecurity field.
                  I am working on my Bachelor's in Computer Science as well as my Security+ certificate. 
                  I use this portfolio as a way to express my solo progress and journey as a developer.
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
      
      <Timeline />
    </>
  );
}