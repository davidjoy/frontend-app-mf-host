import {
  APP_INIT_ERROR, APP_READY,
  AppProvider, ErrorPage,
  initialize,
  subscribe,
} from '@openedx/frontend-base';
import ReactDOM from 'react-dom';

import Footer from '@edx/frontend-component-footer/dist/components/Footer';
import Header from '@edx/frontend-component-header/dist/Header';
import { init } from '@module-federation/runtime';
import HostPage from './host-page/HostPage';
import messages from './i18n';

import './index.scss';

init({
  name: 'host',
  remotes: [
    {
      name: 'guest',
      entry: 'http://localhost:8081/remoteEntry.js',
    },
  ],
});

subscribe(APP_READY, () => {
  ReactDOM.render(
    <AppProvider>
      <Header />
      <HostPage />
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
    auth: () => {}, // This MFE turns off auth so it can run independently of edx-platform.
  },
});
