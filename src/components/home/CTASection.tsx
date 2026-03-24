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
                <h3>Thank you for making it to the bottom</h3>
                <p>
                  If you have not done so yet, please look through my case study on the chat platform I created! <br></br>
                  If you have any questions or opportunities for me, don't hesitate to contact me!
                </p>
              </div>

              <div className="hero-actions">
                <ButtonLink href="/projects/chatroom-plugin/">
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