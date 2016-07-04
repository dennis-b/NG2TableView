import {Component} from '@angular/core';
import {PageTableColumns} from "./cols/columns";
import {NG_TABLE_VIEW_DIRECTIVES, TableView} from "../../../ng2-table-view";
import {ActivatedRoute} from "@angular/router";

@Component({
    selector: "demo-page",
    directives: [NG_TABLE_VIEW_DIRECTIVES],
    providers: [],
    pipes: [],
    template: require('./page.html')
})
export class Page extends TableView {

    constructor(private activatedRoute:ActivatedRoute) {
        super(activatedRoute.snapshot.params["users"]);
    }

    ngOnInit() {
        this.getBuilder()
            .addCols(PageTableColumns)
            .setPaging(true)
            .setItemsPerPage(5)
            .setSelectable(true);

        this.buildTable();
    }
}
