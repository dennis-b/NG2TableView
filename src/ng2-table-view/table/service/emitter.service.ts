import {Injectable, EventEmitter} from '@angular/core';

@Injectable()
export class EmitterService {
    private static emitter:EventEmitter<any> = new EventEmitter();


    static getEmitter():EventEmitter<any> {
        return this.emitter;
    }

    static emit(data:any) {
        this.emitter.emit(data);
    }

    static subscribe(fn) {
        this.emitter.subscribe(fn)
    }

}