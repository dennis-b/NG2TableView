import {Component, ViewChild, ElementRef, AfterContentChecked} from '@angular/core';
import {PageTableColumns} from "./cols/columns";
import {Utils} from "../../utils/app-utils";
import {TableView} from "NG2TableView";
import {ActivatedRoute} from "@angular/router";

let html = require('!!prismjs?lang=markup!./prism/template.html');
let cellHtml = require('!!prismjs?lang=markup!./cols/custom-template.html');
let template = require('./custom-template.html');

import {code, cols} from './prism/table'

@Component({
    selector: "filter-table",
    template: Utils.format(template, html, cellHtml)
})
export class CustomTemplateTable extends TableView {

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
