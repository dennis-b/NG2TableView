import {Component, ViewEncapsulation} from '@angular/core';
import {RouteConfig, Router} from '@angular/router-deprecated';
import {Page} from "./pages/ng2-table-view-test/page";

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
    {path: '/', name: 'Index', component: Page, useAsDefault: true},
    {path: '/home', name: 'Page', component: Page}
])
export class App {
    constructor() {

    }

    ngOnInit() {
    }

}
