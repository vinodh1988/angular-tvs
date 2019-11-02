import { Component, OnInit } from '@angular/core';
import { MenuItemModel } from '@syncfusion/ej2-navigations';

@Component({
  selector: 'app-crudmenu',
  templateUrl: './crudmenu.component.html',
  styleUrls: ['./crudmenu.component.css']
})
export class CrudmenuComponent implements OnInit {
menuItems:MenuItemModel[]=[
  {
       text:"AG GRID"
  },
  {
       text:"CRUD OPERATIONS",
       items:[{text:"Insert"},{text:"Update"},{text:"Delete"}]
  }
]
  constructor() { }

  ngOnInit() {
  }

}
