/*
 * These are globally available services in any component or any other service
 */



// Angular 2
import {FORM_PROVIDERS, LocationStrategy, HashLocationStrategy} from '@angular/common';

// Angular 2 Http
import {HTTP_PROVIDERS} from '@angular/http';

// Angular 2 Router
import {provideRouter} from '@angular/router';

import {MATERIAL_PROVIDERS} from '../../../ng2-material';

import {routes} from '../../app.routes';
import {DataService} from "../../pages/service/data.service";
import {disableDeprecatedForms, provideForms} from '@angular/forms';
/*
 * Application Providers/Directives/Pipes
 * providers/directives/pipes that only live in our browser environment
 */
export const APPLICATION_PROVIDERS = [
    DataService,
    ...FORM_PROVIDERS,
    ...HTTP_PROVIDERS,
    ...MATERIAL_PROVIDERS,
    provideRouter(routes),
    disableDeprecatedForms(),
    provideForms(),
    {provide: LocationStrategy, useClass: HashLocationStrategy}
];

export const PROVIDERS = [...APPLICATION_PROVIDERS];
