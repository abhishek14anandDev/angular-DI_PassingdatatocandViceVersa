import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-templateforms',
  templateUrl: './customer-templateforms.component.html',
  styleUrls: ['./customer-templateforms.component.css']
})
export class CustomerTemplateformsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
customer = {name:"",lastname:"",Address:"",contactnumber:"",gender:""}
  onformsubmit(data){
   // alert("The name is " + data.customername + "and email id is " + data)
   // console.log("The name is " + data.customername + "and email id is " + data.email)
  }
}