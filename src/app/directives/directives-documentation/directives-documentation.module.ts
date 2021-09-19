import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectivesDocumentationComponent } from './directives-documentation.component';
import { DirectivesDocumentationRoutingModule } from './directives-documentation-routing.module';

@NgModule({
  declarations: [
    DirectivesDocumentationComponent
  ],
  imports: [
    CommonModule,
    DirectivesDocumentationRoutingModule,
  ]
})
export class DirectivesDocumentationModule {}
