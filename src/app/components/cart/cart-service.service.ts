import { Injectable } from '@angular/core';
import { Product } from '../products-list/product.models';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {
  prodcuts: Product[] = [];
  constructor() {

  }
  getProducts() {
    return this.prodcuts;
  }
  addToCart(product: Product) {
    const existingProduct = this.prodcuts.find(p => p.id == product.id);
    existingProduct ? existingProduct.quantity++ : this.prodcuts.push(product);

  }
  removeFromCart(index: number) {
    this.prodcuts.splice(index, 1);

  }
  getLength() {

    return this.prodcuts.length;
  }
}
