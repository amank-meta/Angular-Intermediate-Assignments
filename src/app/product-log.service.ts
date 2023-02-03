import { Injectable } from '@angular/core';
import { Product } from './Product';

@Injectable({
  providedIn: 'root'
})
export class ProductLogService {

  constructor() { }

  items:Product[] =
  [
    { name: 'Camera', image: './assets/camera2.jpeg',price:'8000' }
  ]

  addProduct(productData:any){
    
    this.items.push(productData)
    console.log("Product added")
    console.warn(productData)
  }

  // logMyDetail(){
  //   for(let user=0;user<this.users.length;user++){
  //     console.log(this.users[user]);
  //   }
  // }

  getProduct(){
    console.log("Getting data")
    console.log(this.items)
    return this.items;
  }
}
