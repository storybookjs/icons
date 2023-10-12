const componentTemplate = require('./src/templates/componentTemplate');

module.exports = {
  typescript: true,
  icon: true,
  svgProps: {
    width: '{size}',
    height: '{size}',
    ref: '{forwardedRef}',
  },
  replaceAttrValues: {
    '#000': '{color}',
  },
  plugins: [
    // Clean SVG files using SVGO
    '@svgr/plugin-svgo',
    // Generate JSX
    '@svgr/plugin-jsx',
    // Format the result using Prettier
    '@svgr/plugin-prettier',
  ],
  svgoConfig: {},
  prettierConfig: {
    parser: 'typescript',
  },
  template: componentTemplate,
};
