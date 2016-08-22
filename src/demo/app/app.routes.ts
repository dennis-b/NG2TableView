import {Routes, RouterModule} from '@angular/router';
import {CustomTable} from "../pages/custom-table/page";
import {RegularTable} from "../pages/regular-table/regular-table";
import {FilterTable} from "../pages/filter/filter-table";
import {CustomTemplateTable} from "../pages/custom-template/custom-template";
import {DataService} from "../service/data.service";

export const routes: Routes = [
    {path: '', redirectTo: 'index', pathMatch: 'full'},
    {path: 'index', component: CustomTable, resolve: {data: DataService}},
    {path: 'table-view', component: CustomTable, resolve: {data: DataService}},
    {path: 'pagination-table', component: RegularTable, resolve: {data: DataService}},
    {path: 'filter-table', component: FilterTable, resolve: {data: DataService}},
    {path: 'custom-template-table', component: CustomTemplateTable, resolve: {data: DataService}},
];

export const routing = RouterModule.forRoot(routes);