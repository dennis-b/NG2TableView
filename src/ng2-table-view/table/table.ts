import {Component, EventEmitter, Output} from '@angular/core';
import {MATERIAL_DIRECTIVES} from "../../ng2-material";
import {Ng2TableViewSortable} from './directive/sorting';
import {NgClass, CORE_DIRECTIVES, FORM_DIRECTIVES} from "@angular/common";
import {TableDataPipe} from "./pipes/table-data-pipe";
import {NestedTableDataPipe} from "./pipes/nested-table-data-pipe";
import {TableCell} from "./directive/table-cell-custom-template";
import * as _ from 'underscore'

@Component({
    selector: 'ng2TableView, [ng2TableView]',
    inputs: ['rows', 'columns', 'config'],
    directives: [Ng2TableViewSortable, TableCell, NgClass, CORE_DIRECTIVES, FORM_DIRECTIVES, MATERIAL_DIRECTIVES],
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
        for (var i = 0; i < this.config.data.length; i++) {
            var item = this.config.data[i];
            if (_.contains(this.config.filtered, item)) {
                item.selected = this.allSelected;
            } else {
                item.selected = {};
            }
        }
    }

    onChangeTable(column:any) {
        this.tableChanged.emit({sorting: {columns: [column]}});
    }
}
