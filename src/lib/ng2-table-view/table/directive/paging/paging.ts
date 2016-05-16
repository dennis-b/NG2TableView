import {Component, EventEmitter, ElementRef, Renderer, Input} from '@angular/core';
import * as _ from 'underscore'
@Component({
  selector: 'tableViewPaging',
  outputs: ['pageChanged'],
  template: require("./pagination.html"),
  styles: [require("./paging.css")]
})
export class TableViewPaging {

  @Input() public config:any = {};

  public pageChanged:EventEmitter<any> = new EventEmitter();
  private totalPages:number = 1;
  private totalPagesArr:Array<number> = [];

  constructor() {
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
      : Math.ceil(this.config.length / this.config.itemsPerPage);
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
