import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'account'
})
export class AccountPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
