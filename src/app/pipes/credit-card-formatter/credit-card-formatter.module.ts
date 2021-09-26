import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreditCardFormatterPipe } from './credit-card-formatter.pipe';

@NgModule({
  declarations: [
    CreditCardFormatterPipe,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    CreditCardFormatterPipe,
  ]
})
export class CreditCardFormatterModule { }
