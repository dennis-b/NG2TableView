import {RouterConfig} from '@angular/router';
import {Page} from "./pages/ng2-table-view-test/page";
import {DataService} from "./pages/service/data.service";

export const routes:RouterConfig = [
    {path: '', component: Page, canActivate: [DataService]},
    {path: 'home', component: Page, canActivate: [DataService]}
];
