import { Container } from '@openedx/paragon';

const ExamplePage = () => (
  <main>
    <Container className="pt-5">
      <h1>Host Page</h1>
      <p>I am the host page. I share react, react-dom, and @openedx/paragon with my guests.</p>
      <iframe title="guest" width="100%" height="400" src="http://localhost:8081" />
    </Container>
  </main>
);

export default ExamplePage;
