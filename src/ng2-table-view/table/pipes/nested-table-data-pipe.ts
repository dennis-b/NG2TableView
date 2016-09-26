import {PipeTransform, Pipe} from '@angular/core';

@Pipe({name: 'nestedTableData'})
export default class NestedTableDataPipe implements PipeTransform {
  transform(value:any, str:string):string {
    return str.split('.').reduce((a, b) => a ? a[b] : "-", value);
  }
}
