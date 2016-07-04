import {Component, ViewEncapsulation} from '@angular/core';

@Component({
    selector: 'app',
    pipes: [],
    providers: [],
    directives: [],
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
