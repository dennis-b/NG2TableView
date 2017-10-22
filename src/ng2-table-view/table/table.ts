import { Component, EventEmitter, Output } from '@angular/core';
import * as _ from 'lodash';


@Component({
    selector: 'ng2TableView, [ng2TableView]',
    inputs: ['rows', 'columns', 'config'],
    templateUrl: './table.html',
    styleUrls: ['./table.css'],
})

export class NgTableView {
    public rows: Array<any> = [];
    public config: any = {};
    private allSelected: any = {};
    @Output() tableChanged: EventEmitter<any> = new EventEmitter();

    constructor() {
    }

    onAllSelected($event) {
        this.allSelected = $event.checked;
        this.config.data.map((item) => {
            item.selected = _.includes(this.config.filtered, item) ? this.allSelected : false;
        });
    }

    onChangeTable(column: any) {
        this.tableChanged.emit({sorting: {columns: [column]}});
    }
}
