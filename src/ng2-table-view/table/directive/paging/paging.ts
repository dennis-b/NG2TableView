import {Component, EventEmitter, ElementRef, Renderer, Input, OnChanges, SimpleChanges} from '@angular/core';
import * as _ from 'lodash'

@Component({
    selector: 'ngTableViewPaging',
    outputs: ['pageChanged'],
    template: require("./pagination.html"),
    styles: [require("./paging.css")]
})
export class NgTableViewPaging implements OnChanges {


    @Input() public config: any = {};
    @Input() public dataLength: number = 0;

    public pageChanged: EventEmitter<any> = new EventEmitter();
    private totalPages: number = 1;
    private totalPagesArr: Array<number> = [];

    constructor() {
    }

    ngOnChanges(changes: SimpleChanges): any {
        this.totalPages = this.calculateTotalPages();
        this.totalPagesArr = new Array(this.totalPages);
    }

    ngOnInit() {
        this.totalPages = this.calculateTotalPages();
        this.totalPagesArr = new Array(this.totalPages);

    }

    itemsPerPageSelect() {
        this.totalPages = this.calculateTotalPages();
        this.totalPagesArr = new Array(this.totalPages);
        this.pageChanged.emit(this.config);
    }

    toNumber(val) {
        return Number(val);
    }

    calculateTotalPages() {
        var totalPages = this.config.itemsPerPage < 1
            ? 1
            : Math.ceil(this.dataLength / this.config.itemsPerPage);
        return Math.max(totalPages || 0, 1);
    }

    noNext() {
        return this.config.page == this.totalPages;
    }

    noPrevious() {
        return this.config.page == 1;
    };

    onPageSelect() {
        this.selectPage(this.config.page, null);
    }

    selectPage(page, event) {
        if (!_.isEmpty(this.config) && page) {
            this.config.page = Number(page);
            this.pageChanged.emit(this.config);
        }
    }
}
