import {
    NgModule,
    Component,
    OnInit,
    ViewContainerRef,
    ReflectiveInjector,
    Input,
    Compiler,
    ViewChild
} from "@angular/core";

import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {MdCheckboxModule} from '@angular2-material/checkbox';
import {MdInputModule} from '@angular2-material/input';


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

    @NgModule({
        imports: [BrowserModule, FormsModule, MdCheckboxModule, MdInputModule],
        declarations: [CellComponent]
    })
    class CellComponentModule {
    }

    return {CellComponentModule, CellComponent};
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
        var moduleType = compileToComponent(this.cellTemplate, this.cellData);
        this.compiler.compileModuleAndAllComponentsAsync(moduleType.CellComponentModule)
            .then(({componentFactories}) => {
                const compFactory = componentFactories.find(x => x.componentType === moduleType.CellComponent);
                const injector = ReflectiveInjector.fromResolvedProviders([], this.viewContainerRef.parentInjector);
                this.viewContainerRef.clear();
                this.viewContainerRef.createComponent(compFactory, 0, injector);
            });
    }
}
