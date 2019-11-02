import { Component, OnInit } from '@angular/core';
import { SupplyService } from 'src/app/services/supply.service';
import { product } from 'src/app/models/supplymaster';

@Component({
  selector: 'app-productchart',
  templateUrl: './productchart.component.html',
  styleUrls: ['./productchart.component.css']
})
export class ProductchartComponent implements OnInit {
  chartData:product[]=[];
  primaryXaxis={ valueType: 'Category'}

  constructor(private ss:SupplyService) { }

  ngOnInit() {
      this.ss.getProducts().subscribe(
        (data:product[])=>this.chartData=data,
        ()=>this.chartData=[]
      );
  }

}
