const { createConfig } = require('@openedx/frontend-build');
const { ModuleFederationPlugin } = require('@module-federation/enhanced');

const config = createConfig('webpack-prod');

config.output.uniqueName = 'mf-host';

config.plugins = [
  ...config.plugins,

  new ModuleFederationPlugin({
    name: 'host',
    shared: {
      react: {
        singleton: true,
        requiredVersion: '^17.0.0',
      },
      'react-dom': {
        singleton: true,
        requiredVersion: '^17.0.0',
      },
      '@openedx/paragon': {
        requiredVersion: '^22.0.0',
      },
      '@edx/frontend-platform': {
        singleton: true,
        requiredVersion: '^7.1.2',
      },
      'prop-types': {
        requiredVersion: '^15.8.1',
      },
      'react-redux': {
        requiredVersion: '^7.2.9',
      },
      'react-router': {
        requiredVersion: '^6.22.3',
      },
      'react-router-dom': {
        requiredVersion: '^6.22.3',
      },
      redux: {
        requiredVersion: '^4.2.1',
      },
    },
  }),
];

module.exports = config;
