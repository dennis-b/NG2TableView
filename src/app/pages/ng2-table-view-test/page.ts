import {Component} from '@angular/core';
import {Http} from '@angular/http';
import {CanActivate, OnActivate, ComponentInstruction} from "@angular/router-deprecated";
import {TableView} from "../../../lib/ng2-table-view/table/config/TableView";
import {PageTableColumns} from "./cols/columns";
import {Ng2TableFilter} from "../../../lib/ng2-table-view/table/directive/filtering";
import {TableViewPaging} from "../../../lib/ng2-table-view/table/directive/paging/paging";
import {Table} from "../../../lib/ng2-table-view/table/table";
import {Utils} from "../../utils/app-utils";
const gsap = require('gsap');

@Component({
    selector: "page",
    directives: [Table, TableViewPaging, Ng2TableFilter],
    providers: [],
    pipes: [],
    template: require('./page.html')
})
@CanActivate((next) => {
    return Utils.getService(Http).get('data/data.json')
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
        this.setData(this.users)
            .addCols(PageTableColumns)
            .isPaging(true);
        this.onChangeTable(this.tableBuilder);
    }
}
