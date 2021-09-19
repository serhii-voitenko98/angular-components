import { CreditCardFormatterPipe } from './../credit-card-formatter/credit-card-formatter.pipe';
import { CardModule } from './../../components/card/card.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PipesDocumentationComponent } from './pipes-documentation.component';
import { PipesDocumentationRoutingModule } from './pipes-documentation-routing.module';
import { TruncatePipe } from '../truncate/truncate.pipe';

@NgModule({
  declarations: [
    TruncatePipe,
    CreditCardFormatterPipe,
    PipesDocumentationComponent,
  ],
  imports: [
    CardModule,
    CommonModule,
    PipesDocumentationRoutingModule,
  ]
})
export class PipesDocumentationModule {}
