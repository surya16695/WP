import { Component, OnInit } from '@angular/core';
import { EmailValidator } from '@angular/forms';
import {ProdServiceService} from '../prod-service.service';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
// import { MustMatch } from './_helpers/must-match.validator';
import{Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  bool: boolean = false;
  registerForm: FormGroup;
  email:String;
  password:String;
  angForm: FormGroup;
  submitted = false;
  constructor(private serv: ProdServiceService,
    private formBuilder: FormBuilder,
    private router:Router) {
     }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
  });
  }
  get f() { return this.registerForm.controls; }
    validate() {
        this.submitted = true;
        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
        var obj = {mail: this.email, pwd: this.password};
        this.serv.validate(obj).subscribe((data) => {
          if(data) {
            this.serv.login = true;
            // console.log(this.serv.isLoggedin());
            this.router.navigate(['/userdetails']);
          } else {
            this.bool = true;
          }
            }
         );
    }
}
