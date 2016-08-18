import {Component, EventEmitter, Output} from '@angular/core';
import {TableDataPipe} from "./pipes/table-data-pipe";
import {NestedTableDataPipe} from "./pipes/nested-table-data-pipe";
import {TableCell} from "./directive/table-cell-custom-template";
import * as _ from 'underscore'

@Component({
    selector: 'ng2TableView, [ng2TableView]',
    inputs: ['rows', 'columns', 'config'],
    directives: [TableCell],
    pipes: [TableDataPipe, NestedTableDataPipe],
    styles: [require('./table.css')],
    template: require('./table.html')
})

export class NgTableView {
    public rows:Array<any> = [];
    public config:any = {};
    private allSelected:any = {};
    @Output() tableChanged:EventEmitter<any> = new EventEmitter();

    constructor() {
    }

    onAllSelected($event) {
        this.allSelected = $event;
        this.config.data.map((item)=> {
            item.selected = _.contains(this.config.filtered, item) ? this.allSelected : {};
        });
    }

    onChangeTable(column:any) {
        this.tableChanged.emit({sorting: {columns: [column]}});
    }
}
