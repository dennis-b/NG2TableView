import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import {MdCheckboxModule} from '@angular2-material/checkbox';
import {MdInputModule} from '@angular2-material/input';
import {MdTabsModule} from '@angular2-material/tabs';
import {MdSidenavModule} from '@angular2-material/sidenav';
import {MdIconModule} from '@angular2-material/icon';
import {MdCardModule} from '@angular2-material/card';
import {MdButtonModule} from '@angular2-material/button';
import {MdListModule} from '@angular2-material/list';

import{App}  from './app';

import {routing} from './app.routes';
import {DataService} from "../service/data.service";
import {Ng2TableViewModule} from "NG2TableView";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        Ng2TableViewModule,
        routing,
        MdCheckboxModule,
        MdInputModule,
        MdTabsModule,
        MdSidenavModule,
        MdIconModule,
        MdButtonModule,
        MdListModule,
        MdCardModule
    ],
    declarations: [App],
    providers: [DataService],
    bootstrap: [App]
})
export class AppModule {
}