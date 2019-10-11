import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'my-app';

    submitted = false;
    constructor(private fb: FormBuilder) { }
    myForm: FormGroup;
  //   onSubmit(f) {
  //     console.log(f.value);
  // }



  ngOnInit() {
    this.myForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
  });


  }
  get f() { return this.myForm.controls; }

  Submit() {
    this.submitted = true;
    if (this.myForm.invalid) {
      return;
  }

  alert('SUCCESS!! :-)')
  }

}
