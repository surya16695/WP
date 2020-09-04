import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {ProdServiceService} from '../prod-service.service';
import{Router} from '@angular/router';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  arr:any=[];
  quan:number;
  total:number;
  flag:boolean = false;
  username: String;
  email: String;
  phonenumber: Number;
  address:string;
  registerForm: FormGroup;
  submitted = false;
  user: any;
  constructor(private cser:CartService,private formBuilder: FormBuilder, private pser: ProdServiceService,private rout: Router) {
    this.arr = cser.get();
    this.quan = cser.len();
    this.total = cser.total();
   }

  ngOnInit() {
    this.arr = this.cser.get();
    this.quan = this.cser.len();
    this.total = this.cser.total();
    this.registerForm = this.formBuilder.group({

      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phonenumber: ['', [Validators.required, Validators.minLength(10)]],
      address: ['', [Validators.required, Validators.minLength(20)]]
  });
    this.pser.getUser().subscribe((x)=>{
      this.user = x;
      if(this.user == null){
        console.log("Register");
      }
      this.username = this.user.name;
      this.email = this.user.email;
      this.phonenumber = this.user.phone;
      this.address = this.user.address;
      // console.log(x);
    });
    // console.log(this.user.name);
  }
  
  get f() { return this.registerForm.controls; }
  onSubmit() {
  this.submitted = true;
    // stop here if form is invalid
    if (this.user == null) {
        return this.rout.navigate(['/login']);
    }

    this.pser.cart(this.address, this.arr);
    this.cser.clear();
    this.rout.navigate(['/success']);
  }


  // out(){
    
  // }
}
