export interface ColumnIfc {
  title:String;
  name:String;
  modal:Boolean;
  uiFilter:String;
  sort:Boolean;
  template:String;
    sortType?: SortTypes;
}


export enum SortTypes {
    ASCENDING = "asc",
    DESCENDING = "desc"
}