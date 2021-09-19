import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'appCreditCardFormatter'
})
export class CreditCardFormatterPipe implements PipeTransform {
  private readonly AMERICAN_EXPRESS_LENGTH = 15;
  private readonly VISA_LENGTH = 16;
  private readonly MASTERCARD_LENGTH = 16;

  transform(cardNumber: string): string | undefined {
    let invalidMessages = [];

    if (!this.hasCorrectLength(cardNumber)) {
      invalidMessages.push('Invalid Card Length.');
    }

    if (!this.isAllNumbers(cardNumber)) {
      invalidMessages.push('Invalid Characters.');
    }

    if (invalidMessages.length) {
      return invalidMessages.join(' ');
    }

    return this.formattCardNumber(cardNumber);
  }

  private hasCorrectLength(cardNumber: string): boolean {
    const cardLength = cardNumber.length;

    return cardLength === this.AMERICAN_EXPRESS_LENGTH ||
    cardLength === this.VISA_LENGTH ||
    cardLength === this.MASTERCARD_LENGTH;
  }

  private isAllNumbers(cardNumber: string): boolean {
    const stringNumbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

    return cardNumber.split('').every(char => stringNumbers.includes(char));
  }

  private formattCardNumber(cardNumber: string): string | undefined {
    const parts = cardNumber.match(/[\s\S]{1,4}/g);

    return parts?.join('-');
  }
}
