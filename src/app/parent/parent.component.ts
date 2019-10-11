import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  parentMessage: string ='This is "ParentMessage" which is shared in child component';
  serverId=2;

  isDisabled=false;
  getServerId(){
    return this.serverId;
  }

  serverStatus = 'This button will disabled after 5 sec';

  allowButton = false;

  constructor(private fb: FormBuilder) {
    setTimeout(() => {
      this.allowButton = true;
    },5000);
   }

   Omessage:string;
   receiveMessage($event) {
    this.Omessage = $event
  }
  ngOnInit() {
  }

}
