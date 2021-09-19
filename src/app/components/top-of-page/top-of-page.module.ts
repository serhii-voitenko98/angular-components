import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopOfPageComponent } from './top-of-page.component';

@NgModule({
  declarations: [
    TopOfPageComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
  ],
  exports: [TopOfPageComponent],
})
export class TopOfPageModule { }
