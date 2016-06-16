import {Component, ViewEncapsulation} from '@angular/core';
import {RouteConfig, Router} from '@angular/router-deprecated';
import {CustomTable} from "./pages/custom-table/page";
import {RegularTable} from "./pages/regular-table/regular-table";
import {FilterTable} from "./pages/filter/filter-table";
import {CustomTemplateTable} from "./pages/custom-template/custom-template";

@Component({
    selector: 'app',
    pipes: [],
    providers: [],
    directives: [],
    encapsulation: ViewEncapsulation.None,
    styles: [require('./app.css')],
    template: require('./app.html')
})
@RouteConfig([
    {path: '/', name: 'Index', component: CustomTable, useAsDefault: true},
    {path: '/table-view', name: 'TableView', component: CustomTable},
    {path: '/pagination-table', name: 'RegularTable', component: RegularTable},
    {path: '/filter-table', name: 'FilterTable', component: FilterTable},
    {path: '/custom-template-table', name: 'CustomTemplateTable', component: CustomTemplateTable}
])
export class App {
    constructor() {

    }

    ngOnInit() {
    }

}
