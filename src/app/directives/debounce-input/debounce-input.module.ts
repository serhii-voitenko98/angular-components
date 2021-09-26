import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DebounceInputDirective } from './debounce-input.directive';

@NgModule({
  declarations: [
    DebounceInputDirective,
  ],
  imports: [
    CommonModule,
  ],
  exports: [DebounceInputDirective],
})
export class DebounceInputModule { }
