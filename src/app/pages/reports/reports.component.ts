import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {HttpClient, HttpEventType} from '@angular/common/http'
import { FileUploader } from 'ng2-file-upload';

const URL="http://localhost:49383/api/Files/PostFile";
@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {

  public uploader: FileUploader = new FileUploader({ url: URL, itemAlias: 'file' });

  ngOnInit() {
    
    this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
         console.log('ImageUpload:uploaded:', item, status, response);
         alert('File uploaded successfully');
    };
 }
  constructor() {
     
   }

 

  

  }
