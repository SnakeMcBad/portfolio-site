import Container from "@/components/layout/Container";
import ButtonLink from "@/components/shared/ButtonLink";
import Reveal from "@/components/shared/Reveal";

export default function CTASection() {
  return (
    <section className="section">
      <Container>
        <Reveal>
          <div className="cta-panel">
            <div className="cta-row">
              <div>
                <h3>Looking for an engineer who can explain the why, not just the what?</h3>
                <p>
                  Start with the chatroom plugin case study. It is the clearest
                  example of my current thinking around architecture, UX, constraints,
                  and product-minded implementation.
                </p>
              </div>

              <div className="hero-actions">
                <ButtonLink href="/case-studies/chatroom-plugin/">
                  Read case study
                </ButtonLink>
                <ButtonLink href="/contact/" variant="secondary">
                  Contact me
                </ButtonLink>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}