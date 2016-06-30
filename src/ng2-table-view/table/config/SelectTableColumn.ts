import {TableColumn} from "./TableColumn";
export class SelectTableColumn extends TableColumn {
    private selectable:boolean = true;

    constructor() {
        super();
        this.setTemplate(require("../template/select.html"));
    }

}
