const { createConfig } = require('@openedx/frontend-build');
const { ModuleFederationPlugin } = require('@module-federation/enhanced');

const config = createConfig('webpack-dev');

config.output.uniqueName = 'mf-shell';

config.plugins = [
  ...config.plugins,

  new ModuleFederationPlugin({
    name: 'shelly',
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
        singleton: true,
        requiredVersion: '^22.0.0',
      },
    },
  }),
];

module.exports = config;
