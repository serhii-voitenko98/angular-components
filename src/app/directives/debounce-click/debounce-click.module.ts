import { DebounceClickDirective } from './debounce-click.directive';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    DebounceClickDirective
  ],
  imports: [
    CommonModule,
  ],
  exports: [DebounceClickDirective],
})
export class DebounceClickModule { }
