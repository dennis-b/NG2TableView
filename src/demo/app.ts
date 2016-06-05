import {Component, ViewEncapsulation} from '@angular/core';
import {RouteConfig, Router} from '@angular/router-deprecated';
import {CustomTable} from "./pages/custom-table/page";
import {RegularTable} from "./pages/regular-table/regular-table";

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
    {path: '/custom-table', name: 'CustomTable', component: CustomTable},
    {path: '/regular-table', name: 'RegularTable', component: RegularTable}
])
export class App {
    constructor() {

    }

    ngOnInit() {
    }

}
