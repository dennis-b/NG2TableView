import {Json} from '@angular/common/src/facade/lang';
import {PipeTransform, Pipe} from '@angular/core';
import * as moment from 'moment'

@Pipe({name: 'tableData', pure: false})
export default class TableDataPipe implements PipeTransform {
    transform(value:any, col:any = null, row:any = null):string {

        let val = col.name.split('.').reduce((a, b) => a ? a[b] : "-", row);
        if (col && col.uiFilter == 'json') {
            return Json.stringify(val);
        }

        if (col && col.uiFilter == 'date') {
            return moment(val).format("DD/MM/YYYY : hh:mm");
        }

        return value;
    }
}
