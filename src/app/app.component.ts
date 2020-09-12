import { Component, VERSION } from '@angular/core';
import { CustomerdataService } from './customerdata.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

  constructor(private custService : CustomerdataService){

  }
  name = 'Angular ' + VERSION.major;
  custdatatochild = "parent";
  ngOnInit(){
    this.custdata = this.custService.sendcustomerdata();
  }

  sendcustdata(){
    return this.custdata;
  }
  custdatafromchild;
  displaycustdatatoparents(customerdata){
    this.custdatafromchild = customerdata;    

  }

  custdata;
}
