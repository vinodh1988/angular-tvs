import { Component, OnInit,EventEmitter, Output } from '@angular/core';
import { project } from 'src/app/models/project';
import { ProjectService } from 'src/app/services/project.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TouchSequence } from 'selenium-webdriver';


@Component({
  selector: 'app-projectform',
  templateUrl: './projectform.component.html',
  styleUrls: ['./projectform.component.css']
})
export class ProjectformComponent implements OnInit {
@Output('newitem') notifyParent:EventEmitter<string>=new EventEmitter<string>();
errors:string[]=[];
btnEvent=this.addProject;
projectid:string;
projecttitle:string;
teamsize:number;
duration:string;
coretech:string;
buttonname:string="Add Project";

  constructor(private ps:ProjectService,private ar:ActivatedRoute,private router:Router) {
     this.ar.params.subscribe(
      params=>
      {
        let pid=params['pid'];
        if(pid)
          this.buttonname="update Project"
          for(let x in this.ps.current){
            if(this.ps.current[x].projectid==pid)
             {
               this.projectid=this.ps.current[x].projectid;
               this.projecttitle=this.ps.current[x].projecttitle;
               this.teamsize=this.ps.current[x].teamsize;
               this.duration=this.ps.current[x].duration;
               this.coretech=this.ps.current[x].coretech;
               this.btnEvent=this.updateProject;
             }
          }
      }
   
     );
   }

  ngOnInit() {
  }



  validation(){
    this.errors=[];
      if(this.projectid==undefined || this.projectid.length==0)
        this.errors.push("Project id must be filled")
      else if(this.projectid.length<5 )
        this.errors.push("Project id must be atleast 5 char long");

     if(this.projecttitle==undefined || this.projecttitle.length==0)
        this.errors.push("Project title must be filled")
      else if(this.projecttitle.length<6 )
        this.errors.push("Project title must be atleast  6 char long");
 
      if(this.teamsize==undefined || isNaN(this.teamsize))
        this.errors.push("Team size must be filled and should be number")
      else if(this.teamsize<5 || this.teamsize>25 )
        this.errors.push("team size must be b/w 5 and and 25");

     if(this.duration==undefined || this.duration.length==0)
        this.errors.push("Duration must be filled")
     
        if(this.coretech==undefined || this.coretech.length==0)
        this.errors.push("Coretech  must be filled")
  }
  addProject(){
    
    this.validation();

     if(this.errors.length==0){
         let obj:project={
           projectid:this.projectid,
           projecttitle:this.projecttitle,
           duration:this.duration,
           teamsize:this.teamsize,
           coretech:this.coretech
         }

        this.ps.storeProject(obj).subscribe(
          (data)=>{
            this.projectid="";
            this.coretech="";
            this.teamsize=undefined;
            this.projecttitle="";
            this.duration="";
            alert("Data stored.!!!!")
            this.notifyParent.emit("success");
          },
          ()=>{alert("Data not stored")}
        )
     }
    
     
  }

  updateProject(){
    this.validation();
    if(this.errors.length==0){
      let obj:project={
        projectid:this.projectid,
        projecttitle:this.projecttitle,
        duration:this.duration,
        teamsize:this.teamsize,
        coretech:this.coretech
      }

     this.ps.updateProject(obj,obj.projectid).subscribe(
       (data)=>{
         alert("Data stored.!!!!");
         this.router.navigate(['/projects'])
       },
       ()=>{alert("Data not stored")}
     )
    }
  }

}
