import { angularOutputTarget, ValueAccessorConfig } from '@stencil/angular-output-target'
import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

const EVENTS = {
  "Select": "onSelect",
  "Change": "onChange"
};

const ATTRS = {
  "Checked": "checked",
  "Value": "value"
};

export const angularValueAccessorBindings: ValueAccessorConfig[] = [];

export const config: Config = {
  namespace: 'stencil-components',
  taskQueue: 'async',
  outputTargets: [
    angularOutputTarget({
      componentCorePackage: 'stencil-components',
      directivesProxyFile: '../stencil-components-angular/lib/src/directives/proxies.ts',
      valueAccessorConfigs: angularValueAccessorBindings,
    }),
    {
      type: 'dist',
      esmLoaderPath: '../loader'
    },
    {
      type: 'docs-readme'
    },
    {
      type: 'www',
      serviceWorker: null // disable service workers
    }
  ],
  plugins: [
    sass()
  ]
};
