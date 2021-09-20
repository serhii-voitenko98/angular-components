import { Component, Input } from '@angular/core';
import { faCcAmex, faCcDiscover, faCcMastercard, faCcVisa } from '@fortawesome/free-brands-svg-icons';
import { faCreditCard } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-credit-card-input',
  templateUrl: './credit-card-input.component.html',
  styleUrls: ['./credit-card-input.component.scss']
})
export class CreditCardInputComponent {
  @Input()
  creditCardNumber = '';
  @Input()
  set isReadOnly(value: boolean) {
    this.creditCardNumber = value
      ? this.formatReadOnlyCCNum(this.creditCardNumber)
      : this.creditCardNumber;
    this._isReadOnly = value;
  }

  faCcAmex = faCcAmex
  faCcVisa = faCcVisa;
  faCcMastercard = faCcMastercard;
  faCcDiscover = faCcDiscover;
  faCreditCard = faCreditCard;

  private _isReadOnly = false;

  get isReadOnly(): boolean {
    return this._isReadOnly;
  }

  private formatReadOnlyCCNum(ccNum: string): string {
    const parts = ccNum.match(/[\s\S]{1,4}/g) || [];
    const onlyLastFourShown = parts.map((part, index) => {
      if (index === parts.length - 1) {
        return part;
      }

      return 'xxxx';
    })

    return onlyLastFourShown.join('-');
  }
}
