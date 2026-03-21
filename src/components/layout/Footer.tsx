import Container from "./Container";

export default function Footer() {
  return (
    <footer className="site-footer">
      <Container className="footer-inner">
        <p>© {new Date().getFullYear()} Mustafa Alghanimi. Built with Next.js, React, and Motion.</p>
        <p>With a focus on frontend systems, interactivity, and software engineering case studies.</p>
      </Container>
    </footer>
  );
}