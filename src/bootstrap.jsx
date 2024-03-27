import 'core-js/stable';
import 'regenerator-runtime/runtime';

import {
  APP_INIT_ERROR, APP_READY, subscribe, initialize,
} from '@edx/frontend-platform';
import { AppProvider, ErrorPage } from '@edx/frontend-platform/react';
import ReactDOM from 'react-dom';

import Header from '@edx/frontend-component-header/dist/Header';
import Footer from '@edx/frontend-component-footer/dist/components/Footer';
import { init } from '@module-federation/runtime/.';
import messages from './i18n';
import ShellPage from './shell-page/ShellPage';

import './index.scss';

init({
  name: 'shell',
  remotes: [
    {
      name: 'domain1',
      entry: 'http://localhost:8081/remoteEntry.js',
    },
  ],
});

subscribe(APP_READY, () => {
  ReactDOM.render(
    <AppProvider>
      <Header />
      <ShellPage />
      <Footer />
    </AppProvider>,
    document.getElementById('root'),
  );
});

subscribe(APP_INIT_ERROR, (error) => {
  ReactDOM.render(<ErrorPage message={error.message} />, document.getElementById('root'));
});

initialize({
  messages,
  handlers: {
    auth: () => {},
  },
});
