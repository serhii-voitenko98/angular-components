import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TwitterPostComponent } from './twitter-post.component';

@NgModule({
  declarations: [
    TwitterPostComponent,
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
  ],
  exports: [TwitterPostComponent],
})
export class TwitterPostModule { }
