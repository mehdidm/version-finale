import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toTnd'
})
export class ToTndPipe implements PipeTransform {
currencyRate:number=3.16;
  transform(value:number): number {
    return value*this.currencyRate;
  }

}
