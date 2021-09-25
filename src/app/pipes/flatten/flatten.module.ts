import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlattenPipe } from './flatten.pipe';

@NgModule({
  declarations: [FlattenPipe],
  imports: [
    CommonModule
  ],
  exports: [FlattenPipe],
})
export class FlattenModule { }
