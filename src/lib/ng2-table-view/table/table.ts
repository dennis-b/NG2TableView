import {Component, EventEmitter, Output, ElementRef} from '@angular/core';
import {MATERIAL_DIRECTIVES, MATERIAL_PROVIDERS} from "../../../platform/browser/angular2-material2";
import {Ng2ThSortable} from './directive/sorting';
import {NgClass, CORE_DIRECTIVES, FORM_DIRECTIVES} from "@angular/common";
import {TableDataPipe} from "./pipes/table-data-pipe";
import {NestedTableDataPipe} from "./pipes/nested-table-data-pipe";
import {TableCell} from "./directive/table-cell-custom-template";


@Component({
    selector: 'ng2-table, [ng2-table]',
    inputs: ['rows', 'columns', 'config'],
    directives: [Ng2ThSortable, TableCell, NgClass, CORE_DIRECTIVES, FORM_DIRECTIVES, MATERIAL_DIRECTIVES],
    pipes: [TableDataPipe, NestedTableDataPipe],
    styles: [require('./table.css')],
    template: require('./table.html')
})

export class Table {
    public rows:Array<any> = [];
    public config:any = {};

    @Output() tableChanged:EventEmitter<any> = new EventEmitter();

    constructor(public element:ElementRef) {
    }

    // constructor(public dialog:MdDialog, public element:ElementRef) {
    // }

    showModal(ev, val) {
        // let config = new MdDialogConfig()
        //   .parent(DOM.query('#popupContainer'))
        //   .textContent(JSON.stringify(val))
        //   .title('More data')
        //   .ok('Ok')
        //   .targetEvent(ev);
        // this.dialog.open(MdDialogBasic, this.element, config);
    };


    onChangeTable(column:any) {
        this.tableChanged.emit({sorting: {columns: [column]}});
    }
}
