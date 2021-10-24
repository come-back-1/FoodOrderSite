import { Pipe, PipeTransform } from '@angular/core';
import { Items } from './Items';

@Pipe({
  name: 'searchfilter'

})
export class SearchfilterPipe implements PipeTransform {

  transform(Item: Items[], searchValue: string): Items[] {

    if(!Item || !searchValue) {
      return Item;
    }
    return Item.filter(Items =>  
      Items.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
      Items.id.toString().toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
      Items.price.toString().toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
      );
  }

}
