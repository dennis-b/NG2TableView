import {Component, OnInit} from '@angular/core';
import {PageTableColumns} from "./cols/columns";
import {TableView} from "../../../ng2-table-view";
import {Route, ActivatedRoute} from "@angular/router";

@Component({
    selector: "demo-page",
    directives: [],
    providers: [],
    pipes: [],
    template: require('./page.html')
})
export class Page extends TableView implements OnInit {

    constructor(private route: ActivatedRoute) {
        super(route.data.getValue().users);
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
