import { DebounceClickModule } from './../debounce-click/debounce-click.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DirectivesDocumentationComponent } from './directives-documentation.component';
import { DirectivesDocumentationRoutingModule } from './directives-documentation-routing.module';

import { CardModule } from './../../components/card/card.module';

@NgModule({
  declarations: [
    DirectivesDocumentationComponent,
  ],
  imports: [
    CardModule,
    CommonModule,
    FontAwesomeModule,
    DebounceClickModule,
    DirectivesDocumentationRoutingModule,
  ]
})
export class DirectivesDocumentationModule {}
