import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @Input() custdatatochild;
  @Output() custdatatoparents = new EventEmitter();


  emitcustdata(){
    let custdataforparent = this.custdatatochild;

    this.custdatatoparents.emit(custdataforparent);
  }
}