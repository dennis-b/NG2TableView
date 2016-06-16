import {Component} from '@angular/core';
import {CanActivate, OnActivate, ComponentInstruction} from "@angular/router-deprecated";
import {PageTableColumns} from "../cols/columns";
import {NG_TABLE_VIEW_DIRECTIVES, TableView} from "NG2TableView";

@Component({
    selector: "table-comp",
    directives: [NG_TABLE_VIEW_DIRECTIVES],
    providers: [],
    pipes: [],
    template: require('./regular-table.html')
})
export class RegularTable extends TableView {

    private users:Array<any>;

    constructor() {
        super([]);
    }

    routerOnActivate(next:ComponentInstruction, prev:ComponentInstruction):any|Promise<any> {
        this.users = next.routeData.data['users'];
        return Promise.resolve(true);
    }

    ngOnInit() {
        this.getBuilder()
            .setData(this.users)
            .addCols(PageTableColumns)
            .setPaging(true)
            .setItemsPerPage(5);

        this.buildTable();
    }
}
