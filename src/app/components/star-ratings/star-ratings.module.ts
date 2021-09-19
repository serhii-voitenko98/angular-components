import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarRatingsComponent } from './star-ratings.component';

@NgModule({
  declarations: [
    StarRatingsComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
  ],
  exports: [StarRatingsComponent],
})
export class StarRatingsModule { }
