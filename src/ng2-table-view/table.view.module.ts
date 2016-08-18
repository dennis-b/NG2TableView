import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import {MdCheckboxModule} from '@angular2-material/checkbox';
import {MdInputModule} from '@angular2-material/input';
import {MdIconModule} from '@angular2-material/icon';

import {NgTableView} from "./table/table";
import {Ng2TableViewSortable} from "./table/directive/sorting";
import {NgTableViewPaging} from "./table/directive/paging/paging";
import {Ng2TableViewFilter} from "./table/directive/filtering";


@NgModule({
    imports: [BrowserModule, MdInputModule, MdCheckboxModule, MdIconModule, FormsModule],
    declarations: [NgTableView, Ng2TableViewSortable, NgTableViewPaging, Ng2TableViewFilter],
    exports: [NgTableView, Ng2TableViewSortable, NgTableViewPaging, Ng2TableViewFilter, MdInputModule, MdCheckboxModule]
})
export class Ng2TableViewModule {
}