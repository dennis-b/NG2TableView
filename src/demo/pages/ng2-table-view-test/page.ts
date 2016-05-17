import {Component} from '@angular/core';
import {Http} from '@angular/http';
import {CanActivate, OnActivate, ComponentInstruction} from "@angular/router-deprecated";
import {PageTableColumns} from "./cols/columns";
import {Utils} from "../../utils/app-utils";
import {NG_TABLE_VIEW_DIRECTIVES, TableView} from "../../../ng2-table-view";

@Component({
    selector: "demo-page",
    directives: [NG_TABLE_VIEW_DIRECTIVES],
    providers: [],
    pipes: [],
    template: require('./page.html')
})
@CanActivate((next) => {
    return Utils.getService(Http).get('demo/data/data.json')
        .map(res => res.json())
        .toPromise()
        .then((data)=> next.routeData.data['users'] = data)
})
export class Page extends TableView implements OnActivate {

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
            .setSelectable(true);

        this.buildTable();

    }


}
