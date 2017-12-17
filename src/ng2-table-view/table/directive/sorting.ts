import {Directive, EventEmitter, ElementRef} from '@angular/core';
import {EmitterService} from "../service/emitter.service";
import { SortTypes } from '../config/ColumnIfc';

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
export class Ng2TableViewSortable {
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
                case SortTypes.ASCENDING:
                    this.column.sortType = SortTypes.DESCENDING;
                    break;
                case SortTypes.DESCENDING:
                    this.column.sortType = SortTypes.ASCENDING;
                    break;
                default:
                    this.column.sortType = SortTypes.ASCENDING;
                    break;
            }

            this.sortChanged.emit(this.column);
        }
    }
}
