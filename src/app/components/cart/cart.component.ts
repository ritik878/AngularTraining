import { Component } from '@angular/core';
import { Product } from '../products-list/product.models';
import { CartServiceService } from './cart-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
  products: Product[] = [];
  total: number = 0;
  constructor(private cartService: CartServiceService,private router:Router) {
    this.products = this.cartService.getProducts();
    this.products= this.products.map(product => { return { ...product, price: product.price - product.price * product.discount / 100,quantity:1 } });
    this.total = this.products.reduce((acc, product) => acc + product.price * product.quantity, 0);
  }
  removeFromCart(index: number) {
    this.products.splice(index, 1);
    this.cartService.removeFromCart(index);
    console.log('Im clicked');
  } 
  addCount(index:number,type:string)
  {
    if(type==='add'){
      this.products[index].quantity++;
    }
    else{
      if(this.products[index].quantity>1){
        this.products[index].quantity--;
      }
    }
    // this.products[index].quantity++;
    this.total = this.products.reduce((acc, product) => acc +(product.price - product.price * product.discount / 100)*product.quantity, 0);
  }
  backtoShop()
  {
    this.router.navigate(['/home/products']);
  }
}
