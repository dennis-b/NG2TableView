# NG2TableView [![npm version](https://badge.fury.io/js/NG2TableView.svg)](https://www.npmjs.com/package/NG2TableView)
NG2TableView for Angular2 apps.

Table component with sorting filtering, paging, custom cell template, nested values bind .. for Angular2, inspired by [ng2-table](https://github.com/valor-software/ng2-table)


# Usage & Demo

[http://dennis-b.github.io/NG2TableView/](http://dennis-b.github.io/NG2TableView/)

- - -

## Getting Started
Make sure you have [Nodejs](https://nodejs.org/)


Best way to install ***NG2TableView*** is through [npm](https://www.npmjs.com/package/NG2TableView)

  ```bash
  npm i NG2TableView --save
  ```
  Or, you can [download it in a ZIP file](https://github.com/dennis-b/NG2TableView/archive/master.zip).


## Usage
 ```bash
  import {Component} from '@angular/core';
  import {Http} from '@angular/http';
  import {CanActivate, OnActivate, ComponentInstruction} from "@angular/router-deprecated";
  import {PageTableColumns} from "./cols/columns";
  import {Utils} from "../../utils/app-utils";
  import {NG_TABLE_VIEW_DIRECTIVES, TableView} from "../../../ng2-table-view";

  @Component({
      selector: "demo-page",
      directives: [NG_TABLE_VIEW_DIRECTIVES],
      providers: [],
      pipes: [],
      template: require('./page.html')
  })
  @CanActivate((next) => {
      return Utils.getService(Http).get('demo/data/data.json')
          .map(res => res.json())
          .toPromise()
          .then((data)=> next.routeData.data['users'] = data)
  })
  export class Page extends TableView implements OnActivate {

      private users:Array<any>;

      constructor() {
          super([]);
      }

      routerOnActivate(next:ComponentInstruction, prev:ComponentInstruction):any|Promise<any> {
          this.users = next.routeData.data['users'];
          return Promise.resolve(true);
      }

      ngOnInit() {
          this.getBuilder()
              .setData(this.users)
              .addCols(PageTableColumns)
              .setPaging(true)
              .setItemsPerPage(5)
              .setSelectable(true);

          this.buildTable();

      }
  }

  ```

## API

...

