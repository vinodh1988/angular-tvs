import { Component, OnInit } from '@angular/core';
import { ChartdataService } from 'src/app/services/chartdata.service';

@Component({
  selector: 'app-firstchart',
  templateUrl: './firstchart.component.html',
  styleUrls: ['./firstchart.component.css']
})
export class FirstchartComponent implements OnInit {
chartData:object[]=[];
primaryXaxis={ valueType: 'Category'}

  constructor(private cs:ChartdataService) { 
     this.chartData=this.cs.manhours;
     console.log(this.chartData);
  }

  ngOnInit() {
  }

}
