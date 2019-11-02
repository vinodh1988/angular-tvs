import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule,FormsModule} from '@angular/forms';
import { AgtableComponent } from './agtable/agtable.component';
import { CrudformComponent } from './crudform/crudform.component';
import { Routes, RouterModule } from '@angular/router';
import { AgGridModule } from 'ag-grid-angular';


const routes:Routes=[
  {path:"agtable",component:AgtableComponent},
  {path:"insert",component: CrudformComponent},
  {path:"update/:uid",component:CrudformComponent},
  {path:"delete/:did",component:CrudformComponent}
]

@NgModule({
  declarations: [AgtableComponent, CrudformComponent],
  imports: [
    CommonModule,
    AgGridModule.withComponents([]),
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    FormsModule
  ],
  exports:[RouterModule]
})
export class DataformsModule { }
