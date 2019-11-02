import { Component, OnInit } from '@angular/core';
import { SupplyService } from 'src/app/services/supply.service';
import { columnNames, supplymaster } from 'src/app/models/supplymaster';

@Component({
  selector: 'app-agtable',
  templateUrl: './agtable.component.html',
  styleUrls: ['./agtable.component.css']
})
export class AgtableComponent implements OnInit {
  cols=columnNames;
  rows:supplymaster[]=[];
  constructor(private ss:SupplyService) { }

  ngOnInit() {
       this.ss.getSupplyMaster().subscribe(
           (data:supplymaster[])=>this.rows=data,
           ()=>this.rows=[]
       )
  }

}
