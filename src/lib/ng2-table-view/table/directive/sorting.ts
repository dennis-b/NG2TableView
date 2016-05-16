import {Directive, EventEmitter, ElementRef} from '@angular/core';
import {EmitterService} from "../service/emitter.service";

@Directive({
    selector: '[ng2TableViewSortable]',
    inputs: ['config: ng2TableViewSortable', 'column', 'index'],
    outputs: ['sortChanged'],
    providers: [EmitterService],
    host: {
        '(click)': 'onToggleSort($event, $target)',
        '[class.md-active]': 'active',
    }
})
export class Ng2ThSortable {
    public active:boolean = false;
    public config:any;
    public column:any;
    public index:any;
    public sortChanged:EventEmitter<any> = new EventEmitter();

    constructor() {
        EmitterService.subscribe((index)=> {
            if (this.index != index) {
                this.active = false
            }
        })
    }

    onToggleSort(event:any, target:any) {
        if (event) {
            event.preventDefault();
        }

        EmitterService.emit(this.index);
        this.active = true;

        if (this.config && this.column && this.column.sort) {
            switch (this.column.sortType) {
                case 'asc':
                    this.column.sortType = 'desc';
                    break;
                case 'desc':
                    this.column.sortType = 'asc';
                    break;
                default:
                    this.column.sortType = 'asc';
                    break;
            }

            this.sortChanged.emit(this.column);
        }
    }
}
