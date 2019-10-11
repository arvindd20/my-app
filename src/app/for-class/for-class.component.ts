import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-for-class',
  templateUrl: './for-class.component.html',
  styleUrls: ['./for-class.component.css']
})
export class ForClassComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  people: any[] = [
    {
      name: "Douglas  Pace",
      age: 35,
      country: "UK"
    },
    {
      name: "Mcleod  Mueller",
      age: 32,
      country: "USA"
    },
    {
      name: "Day  Meyers",
      age: 21,
      country: "HK"
    },
    {
      name: "Aguirre  Ellis",
      age: 34,
      country: "UK"
    },
    {
      name: "Cook  Tyson",
      age: 32,
      country: "USA"
    }
  ];

}
