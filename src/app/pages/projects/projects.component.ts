import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/services/project.service';
import { project } from 'src/app/models/project';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
projects:project[];
  constructor(private ps:ProjectService) {

   }

  ngOnInit() {
     this.ps.getProjects().subscribe(
       (data:project[])=>{
         this.projects=data;
         this.ps.current=data;
        },
       ()=>this.projects=[]
     );
  }

}
