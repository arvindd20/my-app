import { Component, OnInit, Input, } from '@angular/core';

@Component({
  selector: 'app-for-input',
  templateUrl: './for-input.component.html',
  styleUrls: ['./for-input.component.css']
})
export class ForInputComponent implements OnInit {
  @Input() childMessage: string;

  newChildMsg ='Hello child';
  onClickMe() {
    this.newChildMsg = 'Bye child';
 }

   constructor() { }

  ngOnInit() {
  }

}
