import {Directive, EventEmitter, ElementRef, Renderer, Input} from '@angular/core';

// import {setProperty} from 'angular2/ts/src/core/forms/directives/shared';
function setProperty(renderer:Renderer, elementRef:ElementRef, propName:string, propValue:any) {
  renderer.setElementProperty(elementRef, propName, propValue);
}

@Directive({
  selector: '[ng2TableViewFilter]',
  outputs: ['tableChanged'],
  host: {
    '(input)': 'onChangeFilter($event.target.value)'
  }
})
export class Ng2TableViewFilter {

  @Input('ng2TableFilter') public config:any = {};
  @Input() public column:string;
  public tableChanged:EventEmitter<any> = new EventEmitter();

  constructor(private element:ElementRef, private renderer:Renderer) {

  }

  ngOnInit() {
    this.config[this.column] = {filterString: ""};
    setProperty(this.renderer, this.element, 'value', this.config[this.column].filterString);
    // this.renderer.setElementProperty(this.element, 'value', this.config[this.column].filterString);
  }

  onChangeFilter(event:any) {
    this.config[this.column].filterString = event;
    this.tableChanged.emit({'filtering': this.config});
  }
}
