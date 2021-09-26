import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { DebounceClickModule } from './../debounce-click/debounce-click.module';
import { DebounceInputModule } from './../debounce-input/debounce-input.module';
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
    DebounceInputModule,
    DirectivesDocumentationRoutingModule,
  ]
})
export class DirectivesDocumentationModule {}
