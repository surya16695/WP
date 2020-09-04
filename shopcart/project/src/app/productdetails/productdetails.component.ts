import { Component, OnInit, Input } from '@angular/core';
import {FileService} from '../file.service';
import { ActivatedRoute, Router } from '@angular/router';
import {CartService} from '../cart.service';
import {ProdServiceService} from '../prod-service.service';


@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {
  rate: number;
  comment:string;
  in:any;
  tem:any;
  len:number;
  rat:number = 0;
  rated: boolean = false;
  constructor(private service:FileService,
    private ser:ProdServiceService,
    private route: ActivatedRoute,private ser1:CartService, private rot: Router) { 
      this.len = ser1.len();
      this.in = +this.route.snapshot.paramMap.get('i');
      console.log("this.in", this.in)
      this.ser.getProducts().subscribe((data)=>{
        // console.log("Main");
        // console.log(data);
        this.tem = data;
        for(var i = 0;i<this.tem[this.in].reviews.length;i++){
          this.rat += this.tem[this.in].reviews[i].rating;
        }
        this.rat =Math.round(this.rat / this.tem[this.in].reviews.length);
      });
      
  }
  ngOnInit() {
   
  }
  cart(val){
    this.ser1.set(this.tem[val]);
    this.len = this.ser1.len();
  }
  rating() {
    // console.log(this.ser.isLoggedin());
    if(this.ser.isLoggedin()) {
      // console.log(this.tem[this.in].name + this.comment + this.rate);
      this.rated = true;
      this.ser.rate(this.tem[this.in].name,this.comment, this.rate);
      this.rot.navigate(['/productdetails/' + this.in]);
    } else {
      this.rot.navigate(['/login']);
    }
  }

}
