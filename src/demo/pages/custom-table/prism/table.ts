import {Component} from '@angular/core';
import {CanActivate, OnActivate, ComponentInstruction} from "@angular/router-deprecated";
import {NG_TABLE_VIEW_DIRECTIVES, TableView} from "NG2TableView";
import {PageTableColumns} from "../cols/columns";
@Component({
    selector: "customTable",
    directives: [NG_TABLE_VIEW_DIRECTIVES],
    template: require('./template.html')
})
export class CustomTable extends TableView implements OnActivate {
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
            .setItemsPerPage(5)
            .setSelectable(true);

        this.buildTable();
    }
}