import { Component, Input } from '@angular/core';
import {
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/animations';
import { ProductLogService } from '../product-log.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  animations: [
    trigger('motion', [
      state('void', style({ transform : 'translateY(0)'})),
      transition('void => *', [
        style({transform : 'translateY(70%)'}),
        animate(150)
      ])
    ]),

    trigger('fade', [
      transition('* => void', [
        animate(1, style({transform: 'translateX(100%)'}))
      ])
    ])
  ]
})
export class ProductComponent {

  constructor(private productLogService:ProductLogService){}
  products:any =this.productLogService.getProduct();
  display = true;
  onClick() {
    this.display = !this.display;
  }
}
