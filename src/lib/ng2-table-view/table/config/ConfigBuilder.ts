import {ColumnIfc} from "./ColumnIfc";
/**
 * Created by Dennis on 27/04/2016.
 */
export class TableConfigBuilder {

  public data:Array<any> = [];
  public rows:Array<any> = [];
  public columns:Array<ColumnIfc> = [];
  public page:number = 1;
  public itemsPerPage:number = 10;
  public maxSize:number = 5;
  public numPages:number = 1;
  public length:number = 0;
  public paging:boolean = false;
  public sorting:any = {columns: []};
  public filtering:any = {};

  constructor(data:Array<any>) {
    this.data = data;
    this.length = data.length;
  }

  addData(data:Array<any>) {
    this.data = data;
    this.length = data.length;
    return this
  }

  addCol(col:ColumnIfc) {
    this.columns.push(col);
    return this;
  }

  addCols(cols:Array<ColumnIfc>) {
    Array.prototype.push.apply(this.columns, cols);
    return this;
  }

  setItemsPerPage(itemsPerPage:number) {
    this.itemsPerPage = itemsPerPage;
    return this;
  }

  setMaxSize(maxSize:number) {
    this.maxSize = maxSize;
    return this;
  }

  setNumPages(numPages:number) {
    this.numPages = numPages;
    return this;
  }

  isPaging(paging:boolean) {
    this.paging = paging;
    return this;
  }

  setSorting(sorting:any) {
    this.sorting = sorting;
    return this;
  }

  setFiltering(filtering:any) {
    this.filtering = filtering;
    return this;
  }


  setData(data:any) {
    this.data = data;
    return this;
  }
}
