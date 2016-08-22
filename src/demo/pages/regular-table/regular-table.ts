import {Component} from '@angular/core';
import {PageTableColumns} from "./cols/columns";
import {Utils} from "../../utils/app-utils";
import {TableView} from "NG2TableView";
import {ActivatedRoute} from "@angular/router";

let html = require('!!prismjs?lang=markup!./prism/template.html');
let template = require('./regular-table.html');

import {code, cols} from './prism/table'

@Component({
    selector: "demo-page",
    template: Utils.format(template, html)
})
export class RegularTable extends TableView {

    private code = "";
    private cols = "";

    constructor(private route: ActivatedRoute) {
        super(route.data.getValue().data);
        this.code = code;
        this.cols = cols;
    }


    ngOnInit() {
        this.getBuilder()
            .addCols(PageTableColumns)
            .setPaging(true)
            .setItemsPerPage(5);

        this.buildTable();

    }


}
