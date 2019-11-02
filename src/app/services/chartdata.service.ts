import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChartdataService {
manhours:object[];
  constructor() { 
    this.manhours=[
      {month:"January",hours:"3453",hours2:"4843"},
      {month:"Febraury",hours:"2453",hours2:"2843"},
      {month:"March",hours:"4453",hours2:"5843"},
      {month:"April",hours:"4956",hours2:"4113"},
      {month:"May",hours:"3452",hours2:"3843"},
      {month:"June",hours:"3251",hours2:"3146"},
      {month:"July",hours:"4788",hours2:"3713"},
      {month:"August",hours:"4677",hours2:"2643"},
      {month:"September",hours:"3898",hours2:"1943"},
      {month:"October",hours:"2884",hours2:"4456"},
      {month:"November",hours:"4808",hours2:"3797"},
      {month:"December",hours:"4899",hours2:"4051"}

    ]
  }
}
