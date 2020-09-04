import { Component, OnInit } from '@angular/core';
import {CartService} from '../cart.service';
import {ProdServiceService} from '../prod-service.service';
import {AppComponent} from '../app.component';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {
  len:any;
  user: any;
  constructor( private ser1:CartService, private ser2: ProdServiceService,
    private reg: AppComponent) { 
      this.reg.log();
  }

  ngOnInit() {
    this.len = this.ser1.len();
    if(this.user !== null) {
      this.ser2.getUser().subscribe((x)=>{
      this.user = x;
      this.reg.log();

    });}
    
  }

}
