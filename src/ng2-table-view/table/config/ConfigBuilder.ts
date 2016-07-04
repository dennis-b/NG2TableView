import {ColumnIfc} from "./ColumnIfc";
/**
 * Created by Dennis on 27/04/2016.
 */
export class TableConfigBuilder {

    public data:Array<any> = [];
    public rows:Array<any> = [];
    public filtered:Array<any> = [];
    public columns:Array<ColumnIfc> = [];
    public page:number = 1;
    public itemsPerPage:number = 10;
    public numPages:number = 1;
    public length:number = 0;
    public paging:boolean = false;
    public sorting:any = {columns: []};
    public filtering:any = {};
    public selectable:boolean = false;

    constructor(data:Array<any>) {
        this.data = data;
        this.length = data.length;
    }

    addCol(col:ColumnIfc) {
        this.columns.push(col);
        return this;
    }

    insertCol(index:number, col:ColumnIfc) {
        this.columns.splice(index, 0, col);
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


    setNumPages(numPages:number) {
        this.numPages = numPages;
        return this;
    }

    setPaging(paging:boolean) {
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

    setSelectable(selectable:boolean) {
        this.selectable = selectable;
        return this;
    }


    setData(data:Array<any>) {
        this.data = data;
        this.length = data.length;
        return this;
    }
}
