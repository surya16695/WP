import { Injectable } from '@angular/core';
import { FileService } from './file.service';
// import { del } from 'selenium-webdriver/http';
@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: any = [];
  oldCart: any = [];
  flag = 0;
  temp:any;
  tot:any;
  constructor(private ser4:FileService) { }
  set(val){
    for (let i = 0; i < this.cart.length; i++) {
      if(val.name == this.cart[i].name) {
        
        if(val.quantity >this.cart[i].quantity)
        {
        console.log(val.quantity);
        console.log(this.cart[i].quantity);
        this.cart[i].quantity += 1;
        this.flag=0;
        break;}
      } else {
        this.flag++;
      }
    }
    if(this.flag == this.cart.length){
      var obj = {"name" : val.name,"quantity":1, "price":val.price, "totquan":val.quantity, "image":val.image};
      this.cart.push(obj);
      this.flag=0;
    }
    if(this.cart.length==0){
    var obj = {"name" : val.name,"quantity":1, "price":val.price,"totquan":val.quantity, "image":val.image};
    this.cart.push(obj);
  }
  }
  get() {
    return this.cart;
  }
  len(){
    this.temp=0;
    for (let i = 0; i < this.cart.length; i++) {
      this.temp+=this.cart[i].quantity;
    }
    return this.temp;
  }
  del(i) {
    this.cart.splice(i,1);
  }
  inc(i){
    console.log(this.cart[i].totquan);
    if(this.cart[i].totquan > this.cart[i].quantity)
    {this.cart[i].quantity += 1;
    return false;}else{return true;}
  }
  dec(i){
    this.cart[i].quantity -= 1;
    if(this.cart[i].quantity==0){
      this.del(i);
    }
  }
  total(){
    this.tot = 0;
    for (let i = 0; i < this.cart.length; i++) {
      this.tot+=this.cart[i].quantity*this.cart[i].price;
    }
    return this.tot;
  }
  clear(){
    this.oldCart = this.cart;
    this.cart = [];
  }
  getCart() {
    return this.oldCart;
  }
  clearOld() {
    this.oldCart = [];
  }
}
