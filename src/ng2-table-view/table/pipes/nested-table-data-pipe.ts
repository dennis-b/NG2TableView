import {PipeTransform, Pipe} from '@angular/core';
import {ListWrapper} from "@angular/common/src/facade/collection";

@Pipe({name: 'nestedTableData'})
export class NestedTableDataPipe implements PipeTransform {
  transform(value:any, str:string):string {
    return str.split('.').reduce((a, b) => a ? a[b] : "-", value);
  }
}
