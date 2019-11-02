import { Component, OnInit } from '@angular/core';
import { product, proColumnNames } from 'src/app/models/supplymaster';
import { SupplyService } from 'src/app/services/supply.service';

@Component({
  selector: 'app-visualization',
  templateUrl: './visualization.component.html',
  styleUrls: ['./visualization.component.css']
})
export class VisualizationComponent implements OnInit {
rows:product[]=[];
cols=proColumnNames;

  constructor(private ss:SupplyService) { }

  ngOnInit() {
      this.ss.getProducts().subscribe(
        (data:product[])=>this.rows=data,
        ()=>this.rows=[]
      )
  }

}
