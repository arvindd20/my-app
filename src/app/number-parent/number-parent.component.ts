import { Component, ViewChild , OnInit } from '@angular/core';
// import { NumberComponent } from './number/number.component';

@Component({
  selector: 'app-number-parent',
  templateUrl: './number-parent.component.html',
  styleUrls: ['./number-parent.component.css']
})
export class NumberParentComponent implements OnInit {

  constructor() { }
  // @ViewChild(NumberComponent) numberComponent: NumberComponent;
  // increase() {
  //    this.numberComponent.increaseByOne();
  // }
  // decrease() {
  //    this.numberComponent.decreaseByOne();
  // }

  ngOnInit() {
  }

}
