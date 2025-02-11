import { Component, ViewChild } from '@angular/core';
import { ProductsService } from './products.service';
import { Product } from './product.models';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { CartServiceService } from '../cart/cart-service.service';

@Component({
  selector: 'app-products-list',
  imports: [CommonModule,FormsModule,MatPaginator],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.scss'
})
export class ProductsListComponent {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  products:Product[]=[]
  paginatedProducts: Product[] = [];
  pageSize=6;
  constructor(private productService:ProductsService,private cartService:CartServiceService) {
    this.products = this.productService.getProducts();
  }
  ngAfterViewInit() {
    this.updatePaginator();
  }
  updatePaginator() {
    const startIndex = this.paginator?.pageIndex * this.paginator?.pageSize;
    const endIndex = startIndex + this.paginator?.pageSize;
    this.paginatedProducts = this.products.slice(startIndex, endIndex);
  }
  searchTerm:string;
  selectedColor: string = '';
  selectedCategory: string = '';
  
  colorOptions: string[] = ['Red', 'Green', 'Blue', 'Black', 'White','Brown','Yellow'];
  categoryOptions: string[] = ['Jeans', 'Shirt', 'Pants', 'Shorts','Dress','Jacket','Accessories','Shoes','Hoodie','Blouse','Suit','Skirt'];
  searchProduct(){
    if(this.searchTerm){
      this.products = this.products.filter(product=>{
        return product.name.toLowerCase().includes(this.searchTerm.toLowerCase());
      })
    }else{
      this.products = this.productService.getProducts();
    }
    this.updatePaginator();
  }
  filterProducts() {
    this.products = this.productService.getProducts();
    if(this.selectedColor|| this.selectedCategory){
    this.products = this.products.filter(product => {
     
      return (
        (!this.searchTerm || product.name.toLowerCase().includes(this.searchTerm.toLowerCase())) &&
        (!this.selectedColor || product.color === this.selectedColor) &&
        (!this.selectedCategory || product.category === this.selectedCategory)
      );
      
    });
    this.updatePaginator();
  }
  else{
    this.products = this.productService.getProducts();
  }
  }
  addToCart(product:Product){
    // this.productService.addToCart(product);
    this.cartService.addToCart(product);
    alert('Product added to cart');
  }

}
