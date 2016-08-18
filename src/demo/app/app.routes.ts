import {Page} from "../pages/ng2-table-view-test/page";
import {DataService} from "../pages/service/data.service";

import {Routes, RouterModule} from '@angular/router';

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {
        path: 'home',
        component: Page,
        resolve: {
            users: DataService
        }
    }
];

export const routing = RouterModule.forRoot(routes);

