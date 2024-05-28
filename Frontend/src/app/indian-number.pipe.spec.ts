import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'indianNumber'
})
export class IndianNumberPipe implements PipeTransform {

  transform(value: number): string {
    if (value === null || value === undefined) return '';

    let stringValue = value.toString();
    let lastThree = stringValue.substring(stringValue.length - 3);
    let otherNumbers = stringValue.substring(0, stringValue.length - 3);
    if (otherNumbers !== '') {
      lastThree = ',' + lastThree;
    }
    let result = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;
    return result;
  }
}