import { TableColumn } from "./TableColumn";


const template = `<mat-checkbox [(ngModel)]="cellData.selected"></mat-checkbox>`


export class SelectTableColumn extends TableColumn {
    private selectable: boolean = true;

    constructor() {
        super();
        this.setTemplate(template);
    }

}
