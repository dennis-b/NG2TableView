import {Component, ViewContainerRef, Input, ComponentResolver, ViewChild} from "@angular/core";

function compileToComponent(template, data) {
    @Component({
        selector: 'cell',
        template: template
    })
    class CellComponent {
        private cellData:any = {};

        constructor() {
            this.cellData = data;
        }
    }
    return CellComponent;
}

@Component({
    selector: 'table-cell',
    template: '<div #target></div>'
})
export class TableCell {

    @ViewChild('target', {read: ViewContainerRef}) target;
    @Input() public cellTemplate:String = '';
    @Input() public cellData:any = {};

    constructor(private componentResolver:ComponentResolver, private viewContainerRef:ViewContainerRef) {
    }

    ngOnInit() {
        this.componentResolver.resolveComponent(compileToComponent(this.cellTemplate, this.cellData)).then((factory) => {
            this.target.createComponent(factory, 0, this.viewContainerRef.injector);
        });
    }
}
