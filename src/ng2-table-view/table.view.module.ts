import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgTableView } from "./table/table";
import { TableCell } from "./table/directive/table-cell-custom-template";
import { Ng2TableViewSortable } from "./table/directive/sorting";
import { NgTableViewPaging } from "./table/directive/paging/paging";
import { Ng2TableViewFilter } from "./table/directive/filtering";
import NestedTableDataPipe from "./table/pipes/nested-table-data-pipe";
import TableDataPipe from "./table/pipes/table-data-pipe";
import { TableMaterialModule } from './table-material.module';

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        TableMaterialModule
    ],

    declarations: [
        NgTableView,
        Ng2TableViewSortable,
        NgTableViewPaging,
        Ng2TableViewFilter,
        NestedTableDataPipe,
        TableDataPipe,
        TableCell
    ],


    exports: [
        NgTableView,
        NgTableViewPaging,
        Ng2TableViewFilter,
        TableMaterialModule
    ]
})
export class Ng2TableViewModule {
}