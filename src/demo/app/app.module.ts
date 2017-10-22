import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { Page } from "../pages/ng2-table-view-test/page";

import { routing } from './app.routes';
import { DataService } from "../pages/service/data.service";
import { Ng2TableViewModule } from "../../ng2-table-view";

@NgModule({
    imports: [BrowserModule, FormsModule, HttpClientModule, Ng2TableViewModule, routing],
    declarations: [AppComponent, Page],
    providers: [DataService],
    bootstrap: [AppComponent]
})
export class AppModule {
}