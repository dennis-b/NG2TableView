import {isBlank, isPresent, Json} from '@angular/common/src/facade/lang';
import {Injectable, PipeTransform, WrappedValue, Pipe} from '@angular/core';
import * as moment from 'moment'

@Pipe({name: 'tableData', pure: false})
@Injectable()
export class TableDataPipe implements PipeTransform {
  transform(value:any, col:any = null):string {
    if (col && col.uiFilter == 'json') {
      return Json.stringify(value);
    }

    if (col && col.uiFilter == 'date') {
      return moment(value).format("DD/MM/YYYY : hh:mm");
    }

    return value;
  }
}
