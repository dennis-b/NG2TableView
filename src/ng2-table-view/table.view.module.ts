import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import {MdCheckboxModule} from '@angular2-material/checkbox';
import {MdInputModule} from '@angular2-material/input';
import {MdIconModule, MdIconRegistry} from '@angular2-material/icon';

import {NgTableView} from "./table/table";
import {TableCell} from "./table/directive/table-cell-custom-template";

import {Ng2TableViewSortable} from "./table/directive/sorting";

import {NgTableViewPaging} from "./table/directive/paging/paging";

import {Ng2TableViewFilter} from "./table/directive/filtering";

import NestedTableDataPipe from "./table/pipes/nested-table-data-pipe";
import TableDataPipe from "./table/pipes/table-data-pipe";

@NgModule({
    imports: [
        BrowserModule,
        MdInputModule.forRoot(),
        MdCheckboxModule.forRoot(),
        MdIconModule.forRoot(),
        FormsModule
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

    providers: [
        MdIconRegistry
    ],

    exports: [
        NgTableView,
        NgTableViewPaging,
        Ng2TableViewFilter,
        MdInputModule,
        MdCheckboxModule
    ]
})
export class Ng2TableViewModule {
}