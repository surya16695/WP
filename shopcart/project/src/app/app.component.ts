import { Component } from '@angular/core';
import {CartService} from './cart.service';
import {ProdServiceService} from './prod-service.service';
import{Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  stat:boolean = false;
  title = 'project-wp';
  len:any;
  login:boolean = true;
  constructor(private ser3:CartService,
    private ser4:ProdServiceService,
    private rout: Router) {
    this.len = this.ser3.len();
    this.stat = this.ser4.isLoggedin();
  }
  ngOnInit(){
    // this.stat = this.ser4.isLoggedin();
  }
  set(val){
    this.len = val;
    this.stat = this.ser4.isLoggedin();
  }
  log(){
    this.stat = this.ser4.isLoggedin();
  }
  logout() {
    this.ser4.login = false;
    this.stat = this.ser4.isLoggedin();
    this.rout.navigate(['/main']); 
  }
  
}
