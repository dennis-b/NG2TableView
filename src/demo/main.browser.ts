/*
 * Providers provided by Angular
 */
/*
 * Platform and Environment
 * our providers/directives/pipes
 */
import {bootstrap} from '@angular/platform-browser-dynamic';

import {DIRECTIVES, PIPES, PROVIDERS} from './platform/browser';
import {ComponentRef} from '@angular/core';
import {ENV_PROVIDERS, decorateComponentRef} from './platform/environment';
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
            setInjector(appRef.injector);
            decorateComponentRef(appRef);
        })
        .catch(err => console.error(err));
}


if ('development' === ENV && HMR === true) {
    // activate hot module reload
    let ngHmr = require('angular2-hmr');
    ngHmr.hotModuleReplacement(main, module);
} else {
    // bootstrap when document is ready
    document.addEventListener('DOMContentLoaded', () => main());
}