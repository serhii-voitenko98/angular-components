import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreditCardInputComponent } from './credit-card-input.component';

@NgModule({
  declarations: [
    CreditCardInputComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    FontAwesomeModule,
  ],
  exports: [CreditCardInputComponent],
})
export class CreditCardInputModule {}
