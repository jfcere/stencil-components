import { NgModule } from '@angular/core';
import { defineCustomElements } from 'stencil-components/loader';

import { MyButton } from './directives/proxies';

defineCustomElements(window);

const DECLARATIONS = [
  MyButton,
];

@NgModule({
  declarations: DECLARATIONS,
  exports: DECLARATIONS,
  imports: [],
  providers: [],
})
export class StencilComponentsModule { }
