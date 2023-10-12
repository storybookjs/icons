function componentTemplate(
  { template },
  opts,
  { imports, componentName, props, jsx, exports }
) {
  const code = `
    import * as React from 'react';
    import { IconProps } from '../types';

    %%NEWLINE%%

    export const %%COMPONENT_NAME%%  = React.forwardRef<SVGSVGElement, IconProps>(
      ({ color = 'currentColor', size = 14, ...props }, forwardedRef) => {
        return %%JSX%%
      }
    );

    %%NEWLINE%%
    %%EXPORTS%%
  `;

  const mapping = {
    COMPONENT_NAME: componentName,
    JSX: jsx,
    EXPORTS: exports,
    NEWLINE: '\n',
  };

  /**
   * API Docs: https://babeljs.io/docs/en/babel-template#api
   */
  const typeScriptTpl = template(code, {
    plugins: ['jsx', 'typescript', 'tsx'],
    preserveComments: true,
    syntacticPlaceholders: true,
  });

  return typeScriptTpl(mapping);
}

module.exports = componentTemplate;
