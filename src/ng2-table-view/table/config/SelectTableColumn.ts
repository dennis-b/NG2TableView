import {TableColumn} from "./TableColumn";
export class SelectTableColumn extends TableColumn {
    selectable:boolean;

    constructor() {
        super();
        this.selectable = true;

    }

}
