import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionComponent } from './accordion.component';

@NgModule({
  declarations: [
    AccordionComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
  ],
  exports: [AccordionComponent],
})
export class AccordionModule { }
