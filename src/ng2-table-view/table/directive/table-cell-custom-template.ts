import {
    Component,
    OnInit,
    ViewContainerRef,
    ReflectiveInjector,
    Input,
    Compiler,
    ViewChild,
    ComponentMetadata
} from "@angular/core";

function compileToComponent(template, data) {
    @Component({
        selector: 'cell',
        template: template
    })
    class CellComponent {
        private cellData: any = {};

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
export class TableCell implements OnInit {

    @ViewChild('target', {read: ViewContainerRef}) target;
    @Input() public cellTemplate: String = '';
    @Input() public cellData: any = {};

    constructor(private viewContainerRef: ViewContainerRef, private compiler: Compiler) {
    }

    ngOnInit() {
        this.compiler.compileComponentAsync(compileToComponent(this.cellTemplate, this.cellData))
            .then(factory => {
                const injector = ReflectiveInjector.fromResolvedProviders([], this.viewContainerRef.parentInjector);
                this.viewContainerRef.clear();
                this.viewContainerRef.createComponent(factory, 0, injector);
            });


    }
}
