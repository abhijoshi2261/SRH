import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'indianNumber'
})
export class IndianNumberPipe implements PipeTransform {

  transform(value: number, fractionDigits: number = 2): string {
    if (value === null || value === undefined) {
      return '';
    }

    let [integer, fraction] = value.toFixed(fractionDigits).split('.');

    // Use regular expression to insert commas for Indian numbering format
    integer = integer.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    return `${integer}.${fraction}`;
  }
}
