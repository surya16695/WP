import { Injectable } from '@angular/core';
import {ProdServiceService} from './prod-service.service';

@Injectable({
  providedIn: 'root'
})
export class FileService {
  product:any;
  constructor(private prodser:ProdServiceService) { 
    this.product = this.prodser.getProducts();
  }
  getDetails() {
    return this.product;
  }
  getLen() {
    return this.product.length;
  }
  
}
