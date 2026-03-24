import Container from "@/components/layout/Container";
import Reveal from "@/components/shared/Reveal";
import ButtonLink from "@/components/shared/ButtonLink";

export default function ChatroomCaseStudyPage() {
  return (
    <>
      <section className="case-study-hero">
        <Container>
          <Reveal>
            <span className="eyebrow">Case Study</span>
            <h1 className="section-title">Wordpress Text, Audio, and Video Communications Plugin</h1>
            <p className="section-description">
              A full-stack communication platform in the form of a plugin. Used for Wordpress sites, with added video and audio capabilities. 
              Role-aware, customizable, and secure.
            </p>

            <div className="case-study-meta">
              <span>Role: Full-stack engineer</span>
              <span>Stack: Node.js, React, JavaScript, Powershell, WordPress, PHP, HTML, CSS, Databases, Github</span>
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
      <h3 style={{ textAlign: 'center'}}>Hover over individual sections for images, or view the Gallery!</h3>
      <section className="section">
        <Container>
          <div className="case-study-grid">
            <Reveal>
              <div className="case-study-panel">
                <h3>What it is</h3>
                <p>
                  What I built here is essentially a full-stack, real-time communication system designed to work inside a web environment. 
                  The core of the project combines a custom Node.js signaling server, a WebRTC-based SFU powered by Jitsi, and a 
                  WordPress-integrated frontend plugin that handles chat, presence, and user interaction. 
                  The system supports persistent messaging, direct messaging rooms, and live audio/video sessions, 
                  all tied together through a unified interface. Architecturally, this required separating concerns cleanly: 
                  WordPress handles user identity and UI, Node.js manages real-time communication and signaling, and Jitsi handles media routing at scale.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.06}>
              <div className="case-study-panel">
                <h3>Key Constraints</h3>
                <p>
                  One of the biggest constraints was infrastructure. Initially, I used a cloud VM environment that introduced 
                  limitations in networking and performance. The setup was time consuming and it couldn’t reliably host more 
                  than 2 users without significant performance issues. I had to develop a deeper understanding of how networking actually works 
                  end-to-end: DNS resolution, TCP handshakes, reverse proxy behavior, and how cloud providers enforce security rules. 
                  Moving from a VM to a physical Ubuntu server was a deliberate decision to gain more control over the environment, reduce 
                  latency, and remove hidden constraints imposed by managed infrastructure. 
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="case-study-panel">
                <h3>Engineering Challenges - 1</h3>
                <p>
                  A major engineering challenge was orchestrating multiple services to behave as a single system. 
                  Nginx became the central routing layer, terminating SSL and directing traffic to either the Jitsi 
                  SFU or the Node.js signaling server based on subdomains and paths. Getting this right required careful 
                  handling of WebSocket upgrades, proxy headers, and service isolation. Debugging 502 errors, 
                  failed TLS handshakes, and unreachable ports forced me to rely on tools such as `tcpdump`, `ss`, 
                  and `iptables` to trace packet flow and identify where communication was breaking down. This required 
                  a gained understanding of how each layer of the stack interacts under real-world conditions.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.14}>
              <div className="case-study-panel">
                <h3>Engineering challenges - 2</h3>
                <p>
                  Another challenge was ensuring real-time reliability and scalability. WebRTC systems are sensitive to latency, 
                  bandwidth, and connection stability, so I had to choose an SFU approach rather than peer-to-peer. Integrating 
                  Jitsi via Docker introduced its own complexity, especially around port mapping, UDP traffic for media, and aligning 
                  it with my reverse proxy setup. At the same time, I had to make sure the Node.js server could handle concurrent 
                  connections efficiently, manage sessions securely, and support features like direct messaging rooms without degrading 
                  performance. This required thoughtful separation of responsibilities and an awareness of how each component scales under load.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.18}>
              <div className="case-study-panel">
                <h3>What this project demonstrates</h3>
                <p>
                  What this project ultimately demonstrates is not just the ability to write code, but the ability to design and operate 
                  a complete real-time system. While working on this project, I gained an understanding of backend architecture, networking, 
                  DevOps practices, and frontend integration working together toward a cohesive product. More importantly, it reflects the ability 
                  to diagnose complex, multi-layered problems and systematically resolve them. This is the kind of work that moves beyond tutorials or 
                  isolated features and into building production-capable systems, where reliability, performance, and maintainability all matter.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.22}>
              <div className="case-study-panel">
                <h3>Next steps</h3>
                <p>
                  This project will eventually be available for commercial sale on the Wordpress and Peepso plugin platforms.
                  The remaining features that I wish to work on include: <br></br>* Using AI to add child-safety attachment analysis.
                  <br></br>* Adding individual video/audio streaming to Direct Message rooms. <br></br>* Add stream quality option selection.
                  <br></br> * Add platform-specific integration that make the experience more seemless. <br></br>
                  * Take suggestions from real users on additional features.
                </p>
              </div>
            </Reveal>
          </div>
          <div className="hero-actions" style={{ marginTop: "1.5rem" }}>
            <ButtonLink href="/projects/" variant="secondary">
              Back to projects
            </ButtonLink>
          </div>
        </Container>
        
      </section>
    </>
  );
}