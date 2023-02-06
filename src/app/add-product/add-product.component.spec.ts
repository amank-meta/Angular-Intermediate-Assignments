import {ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { AddProductComponent } from './add-product.component';

describe('AddProductComponent', () => {
  let component: AddProductComponent;
  let fixture: ComponentFixture<AddProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [ AddProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be valid ', () => {
    component.addProductForm.setValue({
      "name": "Watch", 
      "image" : "./assets/watch.jpg",
      "price" : "1000"
    });
    expect(component.addProductForm.valid).toEqual(true);
  });

  it('should be invalid ', () => {
    component.addProductForm.setValue({
      "name": "Watch", 
      "image" : "",
      "price" : ""
    });
    expect(component.addProductForm.valid).toEqual(true);
  });

  
 
});
