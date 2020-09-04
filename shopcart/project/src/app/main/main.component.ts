import { Component, OnInit,Pipe, PipeTransform } from '@angular/core';
import {FileService} from '../file.service';
import {CartService} from '../cart.service';
import {ProdServiceService} from '../prod-service.service';
import {Observable, of} from 'rxjs';
var cardArray:any = [];
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  tem:any;
  len:number;
  prods:any = [];
    constructor(private ser:ProdServiceService,
      private ser5:FileService,
      private ser1:CartService) { 
      this.len = ser1.len();
        this.ser.getProducts().subscribe((data)=>{
        console.log(data);
        this.tem = data;
        cardArray = this.tem;
        this.loadIt();
      });
    }
  ngOnInit() {
    
    }
  cart(val){
    this.ser1.set(val);
    this.len = this.ser1.len();
  }
  loadIt() {
    for(var i = 0; i < cardArray.length; i++) {
        this.prods.push(cardArray[i].name);
    }
  }
}
@Pipe({name: 'filterByName'})
export class filterNames implements PipeTransform {
  transform(listOfNames: string[], nameToFilter: string): number[] {
    if(!listOfNames || !nameToFilter) return null;
    listOfNames =  listOfNames.filter(n => n.toLowerCase().indexOf(nameToFilter.toLowerCase()) !== -1);
    var cards = cardArray;
    cards = cards.filter(tem => listOfNames.includes(tem.name));
    var indexArray: number[]=[];
    cards.forEach(tem => indexArray.push(cardArray.indexOf(tem)));
    return indexArray;
  }
}