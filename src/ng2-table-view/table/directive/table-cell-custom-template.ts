import {Component, DynamicComponentLoader, ElementRef, ViewContainerRef, Input, Injector} from "@angular/core";

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
  template: '<div #container></div>'
})
export class TableCell {

  @Input() public cellTemplate:String = '';
  @Input() public cellData:any = {};

  constructor(private loader:DynamicComponentLoader, private elementRef:ViewContainerRef) {
  }

  ngOnInit() {
    this.loader.loadNextToLocation(compileToComponent(this.cellTemplate, this.cellData), this.elementRef)
  }
}
