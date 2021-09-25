import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LinkedinPostComponent } from './linkedin-post.component';

@NgModule({
  declarations: [
    LinkedinPostComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
  ],
  exports: [LinkedinPostComponent],
})
export class LinkedinPostModule {}
