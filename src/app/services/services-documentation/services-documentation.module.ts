import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicesDocumentationComponent } from './services-documentation.component';
import { ServicesDocumentationRoutingModule } from './services-documentation-routing.module';

@NgModule({
  declarations: [
    ServicesDocumentationComponent
  ],
  imports: [
    CommonModule,
    ServicesDocumentationRoutingModule,
  ]
})
export class ServicesDocumentationModule {}
