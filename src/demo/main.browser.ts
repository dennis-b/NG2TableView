/*
 * Providers provided by Angular
 */
/*
 * Platform and Environment
 * our providers/directives/pipes
 */
import {DIRECTIVES, PIPES, PROVIDERS} from '../platform/browser';
import {bootstrap} from '@angular/platform-browser-dynamic';
import {ComponentRef} from '@angular/core';
import {ENV_PROVIDERS} from '../platform/environment';
/*
 * App Component
 * our top level component that holds all of our components
 */
import {App} from './app';
import {setInjector} from './utils/app-utils';

/*
 * Bootstrap our Angular app with a top level component `App` and inject
 * our Services and Providers into Angular's dependency injection
 */
export function main(initialHmrState?:any):Promise<any> {

    return bootstrap(App, [
        ...PROVIDERS,
        ...DIRECTIVES,
        ENV_PROVIDERS,
        ...PIPES
    ])
        .then((appRef:ComponentRef<any>) => {
            // store a reference to the application injector
            setInjector(appRef.injector);
        })
        .catch(err => console.error(err));

}


/*
 * Vendors
 * For vendors for example jQuery, Lodash, angular2-jwt just import them anywhere in your app
 * You can also import them in vendors to ensure that they are bundled in one file
 * Also see custom-typings.d.ts as you also need to do `typings install x` where `x` is your module
 */


document.addEventListener('DOMContentLoaded', () => main());