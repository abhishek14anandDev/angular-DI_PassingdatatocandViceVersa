import { Injectable } from '@angular/core';

@Injectable()
export class CustomerdataService {

  constructor() { }

  custdataa = [{
    "name":"Abhishek Anand",
    "Age": 28,
    "contactno":"1234567890",
    "address":"Bangalore"
  },{
     "name":"Shobha Kumari",
    "Age": 29,
    "contactno":"1234567890",
    "address":"Patna"
  }]

  sendcustomerdata(){
    return this.custdataa;
  }

}