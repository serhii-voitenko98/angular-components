import { CreditCardFormatterModule } from './../credit-card-formatter/credit-card-formatter.module';
import { TruncateModule } from './../truncate/truncate.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardModule } from './../../components/card/card.module';
import { FlattenModule } from './../flatten/flatten.module';
import { FilterTermModule } from './../filter-term/filter-term.module';

import { PipesDocumentationComponent } from './pipes-documentation.component';
import { PipesDocumentationRoutingModule } from './pipes-documentation-routing.module';

@NgModule({
  declarations: [
    PipesDocumentationComponent,
  ],
  imports: [
    CardModule,
    CommonModule,
    FlattenModule,
    TruncateModule,
    FilterTermModule,
    CreditCardFormatterModule,
    PipesDocumentationRoutingModule,
  ]
})
export class PipesDocumentationModule {}
