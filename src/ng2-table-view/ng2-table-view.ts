import {NgTableView} from "./table/table";
import {Ng2TableViewSortable} from "./table/directive/sorting";
import {NgTableViewPaging} from "./table/directive/paging/paging";
import {Ng2TableViewFilter} from "./table/directive/filtering";

export const NG_TABLE_VIEW_DIRECTIVES = [NgTableView, Ng2TableViewFilter, NgTableViewPaging, Ng2TableViewSortable];

export * from './table/config/ColumnIfc';
export * from './table/config/ConfigBuilder';
export * from './table/config/TableColumn';
export * from './table/config/TableColumns';
export * from './table/config/TableView';


