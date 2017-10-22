import { ColumnIfc, TableColumn, TableColumns } from "../../../../ng2-table-view";


const customTemplate = `<mat-form-field>
                            <input matInput placeholder="name" [(ngModel)]="cellData.name"/>
                        </mat-form-field>`

export const PageTableColumns: Array<ColumnIfc> = new TableColumns()
    .addCol(new TableColumn()
        .setTitle("index")
        .setName("index")
        .setSort(true)
    )
    .addCol(new TableColumn()
        .setTitle("Editable name ")
        .setName("name")
        .setTemplate(customTemplate)
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
    .getCols();
