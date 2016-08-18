import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import{App}  from './app';

import {routing} from './app.routes';
import {DataService} from "../pages/service/data.service";
import {Ng2TableViewModule} from "../../ng2-table-view";

@NgModule({
    imports: [BrowserModule, FormsModule, Ng2TableViewModule, routing],
    declarations: [App],
    providers: [DataService],
    bootstrap: [App]
})
export class AppModule {
}