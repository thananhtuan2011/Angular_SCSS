import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateTimeCustom'
})
export class DateTimeCustomPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
