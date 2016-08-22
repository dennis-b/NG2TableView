export const code = `import {Component} from '@angular/core';
import {TableView} from "NG2TableView";
import {PageTableColumns} from "../cols/columns";

@Component({
    selector: "customTable",
    template: require('./template.html')
})
export class CustomTable extends TableView {

    constructor() {
        super(route.data.getValue().data);
    }

    ngOnInit() {
        this.getBuilder()
            .addCols(PageTableColumns)
            .setPaging(true)
            .setItemsPerPage(5)
            .setSelectable(true);

        this.buildTable();
    }
}`;

export const cols = `import {ColumnIfc, TableColumns, TableColumn} from "NG2TableView";
export const PageTableColumns:Array&ltColumnIfc&gt = new TableColumns()
    .addCol(new TableColumn()
        .setTitle("index")
        .setName("index")
        .setSort(true)
    )
    .addCol(new TableColumn()
        .setTitle("Editable name ")
        .setName("name")
        .setTemplate(require("./custom-template.html"))
        .setSort(true)
    )
    .addCol(new TableColumn()
        .setTitle("gender")
        .setName("gender")
    )
    .addCol(new TableColumn()
        .setTitle("company")
        .setName("company")
    )
    .addCol(new TableColumn()
        .setTitle("email")
        .setName("email")
    )
    .addCol(new TableColumn()
        .setTitle("latitude")
        .setName("location.latitude")
    )
    .addCol(new TableColumn()
        .setTitle("longitude")
        .setName("location.longitude")
    )
    .getCols();`;
