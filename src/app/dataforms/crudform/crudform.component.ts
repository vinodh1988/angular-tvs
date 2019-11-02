import { Component, OnInit } from '@angular/core';
import { employee } from 'src/app/models/employee';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { EmployeeService } from 'src/app/services/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crudform',
  templateUrl: './crudform.component.html',
  styleUrls: ['./crudform.component.css']
})
export class CrudformComponent implements OnInit {
  empForm:any;
  employees:employee[];
  cities:string[]=["Chennai","Bangalore","Jaipur","Nagpur","Mumbai"];
  
    constructor(private formbuilder:FormBuilder,private es:EmployeeService,private router:Router) { 
     this.empForm= this.formbuilder.group({
        employee_id:['',[Validators.required,Validators.pattern("[0-9]+")]],
        name:['',[Validators.required,isSymbols]],
        designation:['',Validators.required],
        basic:['',[Validators.required, Validators.pattern("[0-9\.]+")]],
        qualification:['',Validators.required] ,
        city:['Chennai']
      });
    }
 

  ngOnInit() {
  }

  saveEmployee(){
    let obj={
      employee_id:this.empForm.value.employee_id,
      name:this.empForm.value.name,
      city:this.empForm.value.city,
      designation:this.empForm.value.designation,
      basic:this.empForm.value.basic,
      qualification:this.empForm.value.qualification
    }

    this.es.storeEmployee(obj).subscribe(
      ()=>{
        alert("Data is stored");
        this.router.navigate([""]);
      },
      ()=>alert("data Not Stored")
    )
  }

}

function isSymbols(input: FormControl){
  let temp:RegExp=new RegExp('[\._$@0-9]');
  let temp1:boolean=false;
  if(!temp.test(input.value))
      temp1=true;

    return temp1?null:{needFormat:true};
}