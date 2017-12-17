import { ColumnIfc, SortTypes } from "./ColumnIfc";



export class TableColumn implements ColumnIfc {

    title: string;
    name: string;
    modal: boolean;
    uiFilter: string;
    sort: boolean;
    sortType: SortTypes;
    template: string;

    constructor() {

    }

    setTitle(title: string) {
        this.title = title;
        return this;
    }

    setName(name: string) {
        this.name = name;
        return this;
    }

    setModal(modal: boolean) {
        this.modal = modal;
        return this;
    }

    setSort(sort: boolean) {
        this.sort = sort;
        return this;

    }

    setSortType(sortType: SortTypes) {
        this.sortType = sortType;
        return this;
    }

    setUiFilter(uiFilter: string) {
        this.uiFilter = uiFilter;
        return this;
    }

    setTemplate(template: string) {
        this.template = template;
        return this;
    }
}
