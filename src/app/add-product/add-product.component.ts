import { isNgTemplate } from '@angular/compiler';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductComponent } from '../product/product.component';
import {Product} from '../Product'
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  @Output() productEmitter = new EventEmitter<Product>();

  constructor(private route:Router){}
  addProductForm = new FormGroup(
    {
      name:new FormControl('',[Validators.required]),
      image:new FormControl('',[Validators.required]),
      price:new FormControl('',[Validators.required])
    }
  )

  get name()
  {
    return this.addProductForm.get('name');
  }
  get price()
  {
    return this.addProductForm.get('price');
  }
  get image()
  {
    return this.addProductForm.get('image');
  }
  onSubmit()
  {
    console.log(this.addProductForm.value)
    let item = this.addProductForm.value;
    let newItem = new Product(item.name,item.image,item.price);
    this.productEmitter.emit(newItem);
    this.route.navigate(['home']);
  }
}
