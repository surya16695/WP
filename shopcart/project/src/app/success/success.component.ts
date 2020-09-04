import { Component, OnInit } from '@angular/core';
import {CartService} from "../cart.service";

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {
  temp1: any = [];
  // total: any =0;
  // boo:boolean;
  // len:any;
  constructor(private ser2:CartService) {
    this.temp1 = this.ser2.getCart();
    this.ser2.clearOld();
    // this.len = this.ser2.len();
    // this.total = this.ser2.total();
   }
  ngOnInit() {
  }

}
