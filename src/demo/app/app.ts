import {Component, ViewEncapsulation} from '@angular/core';

@Component({
    selector: 'app',
    encapsulation: ViewEncapsulation.None,
    styles: [require('./app.css')],
    template: require('./app.html')
})
export class App {
    constructor() {

    }

    ngOnInit() {
    }

}
