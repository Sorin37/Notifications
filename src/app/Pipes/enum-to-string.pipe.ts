import { Pipe, PipeTransform } from '@angular/core';
import { Categories } from '../Enumerations/categories';

@Pipe({
  name: 'enumToString'
})
export class EnumToStringPipe implements PipeTransform {

  transform(value: Categories): string {
    return Categories[value];
  }

}
