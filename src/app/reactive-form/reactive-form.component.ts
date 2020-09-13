import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms'

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  customerform = new FormGroup({
    name : new FormControl(),
    lastname : new FormControl(),
    Address : new FormControl(),
    Phonenum : new FormControl()
  })

  onSubmit(){
    console.log(this.customerform.value);
  }
}