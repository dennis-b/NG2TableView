import {TableConfigBuilder} from "./ConfigBuilder";
import * as _ from 'underscore'
import {TableColumn} from "./TableColumn";

export class TableView {

    public tableData:Array<any> = [];
    public tableBuilder:TableConfigBuilder;

    constructor(data) {
        this.tableBuilder = new TableConfigBuilder(data || []);
    }

    setData(data:any) {
        this.tableBuilder.setData(data);
        return this.tableBuilder;
    }

    getBuilder() {
        return this.tableBuilder;
    }

    changePage(page:any, data:Array<any> = this.tableBuilder.data):Array<any> {
        let start = (page.page - 1) * page.itemsPerPage;
        if (start >= data.length) {
            return data.slice(0, data.length);
        }
        let end = page.itemsPerPage > -1 ? (start + page.itemsPerPage) : data.length;
        return data.slice(start, end);
    }

    changeSort(data:any, config:any) {
        if (!config.sorting || !config.sorting.columns || config.sorting.columns.length == 0) {
            return data;
        }
        let columns = this.tableBuilder.sorting.columns || [];
        let sorted = _.sortBy(data, columns[0].name);
        if (columns[0].sortType === 'desc') {
            sorted.reverse();
        }
        return sorted;
    }

    changeFilter(data:any, config:any):any {
        if (!config.filtering || _.isEmpty(config.filtering)) {
            return data;
        }
        let filterKeys = _.keys(config.filtering);
        for (var i = 0; i < filterKeys.length; i++) {
            var filterKey = filterKeys[i];
            data = data.filter((item) => {
                let calculatedItem = filterKey.split(".").reduce((a, b) => a ? a[b] : "", item);
                let filterString = this.tableBuilder.filtering[filterKey].filterString;
                return String(calculatedItem).toLowerCase().match(String(filterString).toLowerCase())
            })
        }
        return data;
    }

    buildTable() {
        if (this.tableBuilder.selectable) {
            var tableColumn = new TableColumn().setTemplate(require("../template/select.html"));
            this.tableBuilder.insertCol(0, tableColumn)

        }
        this.onChangeTable();

    }


    onChangeTable(config?:any) {

        if (config && config.filtering) {
            Object.assign(this.tableBuilder.filtering, config.filtering);
        }

        if (config && config.sorting) {
            this.tableBuilder.sorting = config.sorting;
        }

        let filteredData = this.changeFilter(this.tableBuilder.data, this.tableBuilder);
        let sortedData = this.changeSort(filteredData, this.tableBuilder);
        this.tableBuilder.rows = this.tableBuilder.paging ? this.changePage(this.tableBuilder, sortedData) : sortedData;
        this.tableBuilder.length = sortedData.length;
    }


}
