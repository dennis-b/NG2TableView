import {ColumnIfc} from "./ColumnIfc";

export class TableColumns {

  private tableColumns:Array<ColumnIfc> = [];

  constructor() {
  }

  addCol(col:ColumnIfc) {
    this.tableColumns.push(col);
    return this;
  }

  getCols():Array<ColumnIfc> {
    return this.tableColumns;
  }


}
