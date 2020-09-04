import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from '../_helpers/must-match.validator';
import { ProdServiceService } from '../prod-service.service';
import{Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  boo:boolean = false;
  booo:boolean = false;
username: String;
  email: String;
  phonenumber: Number;
  password: String;
  confirmpassword: String;
  registerForm: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder,
    private prodser: ProdServiceService, private rout: Router) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      phonenumber: ['', [Validators.required, Validators.minLength(10)]]
  }, {
      validator: MustMatch('password', 'confirmPassword')
  });
  }
  get f() { return this.registerForm.controls; }

    register() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }
    if(this.confirmpassword === this.password) {
        var user = {
            name: this.username,
            email: this.email,
            pwd: this.confirmpassword,
            phone: this.phonenumber,
            address: "",
            balance: 0,
            cart:[]
        };
        this.prodser.register(user).subscribe((bol)=> {
            if(bol) {
              this.booo = false;
              this.boo = true;
              this.prodser.reg = true;
              this.rout.navigate(['/main']);              
            } else {
              this.boo = false;
              this.booo = true;
              this.prodser.reg = false;
              this.rout.navigate(['/register']);
            }
          }
        );
        } else {
          this.boo = false;
          this.booo = true;
          this.rout.navigate(['/register']);
        }
    }
}
