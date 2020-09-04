import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {LoginComponent} from "./login/login.component";
import {MainComponent} from "./main/main.component";
import {RegisterComponent} from "./register/register.component";
import {CartComponent} from "./cart/cart.component";
import {UserdetailsComponent} from "./userdetails/userdetails.component";
import {ProductdetailsComponent} from "./productdetails/productdetails.component";
import {CheckoutComponent} from "./checkout/checkout.component";
import {SuccessComponent} from "./success/success.component";


const routes: Routes = [
  {path:"", redirectTo:"/main", pathMatch:"full"},
  {path: "login", component:LoginComponent},
  {path: "main", component: MainComponent},
  {path: "register", component: RegisterComponent},
  {path: "cart" , component:CartComponent},
  {path:"userdetails", component: UserdetailsComponent},
  {path:"productdetails/:i", component: ProductdetailsComponent},
  {path:"checkout",component:CheckoutComponent},
  {path:"success",component:SuccessComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
