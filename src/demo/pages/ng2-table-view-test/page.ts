import { Component, OnInit } from '@angular/core';
import { PageTableColumns } from "./cols/columns";
import { TableView } from "../../../ng2-table-view";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: "demo-page",
    templateUrl: './page.html'
})
export class Page extends TableView implements OnInit {

    constructor(private route: ActivatedRoute) {
        // super(route.data.getValue().users);
        super(route.snapshot.data['users'])
    }

    ngOnInit() {
        const builder = this.getBuilder();
        builder.addCols(PageTableColumns)
            .setPaging(true)
            .setItemsPerPage(5)
            .setSelectable(true);

        this.buildTable();

        builder.setColumnSortable('email', true);
    }
}
