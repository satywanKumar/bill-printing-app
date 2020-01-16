import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(bills: any[], partyName:String): any {
    console.log(bills,partyName);
    if(partyName == undefined)
    {
      return bills;
    }
    return bills.filter(bills=>
      bills.partyName.toLowerCase().indexOf(partyName.toLowerCase()) !== -1);
  }

}
