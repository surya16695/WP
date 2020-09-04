import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import{Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProdServiceService {
  mpwd: any;
  user: any;
  login: boolean = false;
  products: any;
  reg: boolean = true;
  constructor(private http:HttpClient) { }
  getProducts(): Observable<any> {
      console.log("products received");
      this.products = this.http.get('http://127.0.0.1:3000')
      console.log(this.products);
      return this.products;
  }
  validate(item: any) {
    this.mpwd = item;
    //this.getUser()
    return this.http.post('http://localhost:3000/login', item)
  }
  register(user: any) {
    return this.http.post('http://localhost:3000/register', user)
  }
  isLoggedin() {
    return this.login;
  }
  getUser() {
    // console.log(this.mpwd);
    return this.http.post('http://localhost:3000/getuser', this.mpwd)
  }
  rate(name, comment, rate) {
    // console.log("in service");
    var obj = {pro: name, com: comment, rat: rate};
    return this.http.post('http://localhost:3000/rev', obj).subscribe((data)=>console.log(data));
  }
  cart(address, cart) {
    var obj = {address: address, mail:this.mpwd.mail, crt: cart};
    this.http.post('http://localhost:3000/pay', obj).subscribe((next)=>console.log(next));
  }
}
