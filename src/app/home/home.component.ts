import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  appointmentForm = new FormGroup({
    name: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required]),
    phone: new FormControl('',[Validators.required]),
    city: new FormControl('',[Validators.required]),
    date: new FormControl('',[Validators.required]),
    age: new FormControl('',[Validators.required,Validators.min(18)]),
    message: new FormControl('',[Validators.required])
  });

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.appointmentForm.value);
  }

}
