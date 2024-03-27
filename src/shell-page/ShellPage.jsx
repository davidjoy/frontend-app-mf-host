import { Container } from '@openedx/paragon';
import {
  Suspense,
} from 'react';
import useFederatedComponent from './data/utils';

const ExamplePage = () => {
  const url = 'http://localhost:8081/remoteEntry.js';
  const scope = 'domain1';
  const module = './Domain1Page';

  const { Component: FederatedComponent, errorLoading } = useFederatedComponent(url, scope, module);

  return (
    <main>
      <Container className="pt-5">
        <h1>Shell Page</h1>
        <p>I am the parent page, and share react, react-dom, and @openedx/paragon to my remotes.</p>
      </Container>
      <Suspense fallback="Loading...">
        {errorLoading
          ? `Error loading module "${module}"`
          : FederatedComponent && <FederatedComponent />}
      </Suspense>
    </main>
  );
};

export default ExamplePage;
