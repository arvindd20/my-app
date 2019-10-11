import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent implements OnInit {

  message="This is output message";

  @Output() messageEvent = new EventEmitter<string>();
  constructor() { }

  sendMessage() {
    this.messageEvent.emit(this.message)
  }

  ngOnInit() {
  }

}
