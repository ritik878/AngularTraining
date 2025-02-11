import { Injectable } from '@angular/core';
import { Product } from './product.models';

@Injectable({
    providedIn: 'root'
})
export class ProductsService {

    products: Product[] = [
        {
            id: 1,
            name: 'Blue Jeans',
            price: 50,
            description: 'Comfortable blue jeans',
            imageUrl: 'https://ramrajcotton.in/cdn/shop/files/2304-9680H40LF5-6724.jpg?v=1718198305&width=1080',
            category: 'Jeans',
            quantity: 100,
            color: 'Blue',
            discount: 10
        },
        {
            id: 2,
            name: 'Red Shirt',
            price: 30,
            description: 'Stylish red shirt',
            imageUrl: 'https://www.andamen.com/cdn/shop/products/01_ad9eae79-57f1-4fc8-9294-0bf60a207899.jpg?v=1701683737',
            category: 'Shirt',
            quantity: 200,
            color: 'Red',
            discount: 5
        },
        {
            id: 3,
            name: 'Black Pants',
            price: 40,
            description: 'Elegant black pants',
            imageUrl: 'https://trekkit.in/cdn/shop/files/Kangri_GTX_Pants_Black-1_515160aa-5f6f-471f-9d76-3605647c16fe.png?v=1738931365&width=1800`',
            category: 'Pants',
            quantity: 150,
            color: 'Black',
            discount: 15
        },
        {
            id: 4,
            name: 'White T-Shirt',
            price: 20,
            description: 'Casual white t-shirt',
            imageUrl: 'https://www.andamen.com/cdn/shop/products/01_ad9eae79-57f1-4fc8-9294-0bf60a207899.jpg?v=1701683737',
            category: 'Shirt',
            quantity: 300,
            color: 'White',
            discount: 0
        },
        {
            id: 5,
            name: 'Green Shorts',
            price: 25,
            description: 'Comfortable green shorts',
            imageUrl: 'https://www.andamen.com/cdn/shop/products/01_ad9eae79-57f1-4fc8-9294-0bf60a207899.jpg?v=1701683737',
            category: 'Shorts',
            quantity: 120,
            color: 'Green',
            discount: 10
        },
        {
            id: 6,
            name: 'Yellow Dress',
            price: 60,
            description: 'Beautiful yellow dress',
            imageUrl:'https://www.andamen.com/cdn/shop/products/01_ad9eae79-57f1-4fc8-9294-0bf60a207899.jpg?v=1701683737',
            category: 'Dress',
            quantity: 80,
            color: 'Yellow',
            discount: 20
        },
        {
            id: 7,
            name: 'Blue Jacket',
            price: 70,
            description: 'Warm blue jacket',
            imageUrl:'https://www.andamen.com/cdn/shop/products/01_ad9eae79-57f1-4fc8-9294-0bf60a207899.jpg?v=1701683737',
            category: 'Jacket',
            quantity: 90,
            color: 'Blue',
            discount: 25
        },
        {
            id: 8,
            name: 'Black Hat',
            price: 15,
            description: 'Stylish black hat',
            imageUrl:'https://www.andamen.com/cdn/shop/products/01_ad9eae79-57f1-4fc8-9294-0bf60a207899.jpg?v=1701683737',
            category: 'Accessories',
            quantity: 250,
            color: 'Black',
            discount: 5
        },
        {
            id: 9,
            name: 'Brown Belt',
            price: 20,
            description: 'Leather brown belt',
            imageUrl:'https://www.andamen.com/cdn/shop/products/01_ad9eae79-57f1-4fc8-9294-0bf60a207899.jpg?v=1701683737',
            category: 'Accessories',
            quantity: 180,
            color: 'Brown',
            discount: 10
        },
        {
            id: 10,
            name: 'White Sneakers',
            price: 50,
            description: 'Comfortable white sneakers',
            imageUrl:'https://www.andamen.com/cdn/shop/products/01_ad9eae79-57f1-4fc8-9294-0bf60a207899.jpg?v=1701683737',
            category: 'Shoes',
            quantity: 130,
            color: 'White',
            discount: 15
        },
        {
            id: 11,
            name: 'Blue Cap',
            price: 10,
            description: 'Casual blue cap',
            imageUrl:'https://www.andamen.com/cdn/shop/products/01_ad9eae79-57f1-4fc8-9294-0bf60a207899.jpg?v=1701683737',
            category: 'Accessories',
            quantity: 220,
            color: 'Blue',
            discount: 0
        },
        {
            id: 12,
            name: 'Red Scarf',
            price: 15,
            description: 'Warm red scarf',
            imageUrl:'https://www.andamen.com/cdn/shop/products/01_ad9eae79-57f1-4fc8-9294-0bf60a207899.jpg?v=1701683737',
            category: 'Accessories',
            quantity: 140,
            color: 'Red',
            discount: 5
        },
        {
            id: 13,
            name: 'Black Gloves',
            price: 25,
            description: 'Leather black gloves',
            imageUrl:'https://www.andamen.com/cdn/shop/products/01_ad9eae79-57f1-4fc8-9294-0bf60a207899.jpg?v=1701683737',
            category: 'Accessories',
            quantity: 110,
            color: 'Black',
            discount: 10
        },
        {
            id: 14,
            name: 'Green Hoodie',
            price: 40,
            description: 'Comfortable green hoodie',
            imageUrl:'https://www.andamen.com/cdn/shop/products/01_ad9eae79-57f1-4fc8-9294-0bf60a207899.jpg?v=1701683737',
            category: 'Hoodie',
            quantity: 160,
            color: 'Green',
            discount: 20
        },
        {
            id: 15,
            name: 'Yellow Socks',
            price: 5,
            description: 'Warm yellow socks',
            imageUrl:'https://www.andamen.com/cdn/shop/products/01_ad9eae79-57f1-4fc8-9294-0bf60a207899.jpg?v=1701683737',
            category: 'Accessories',
            quantity: 300,
            color: 'Yellow',
            discount: 0
        },
        {
            id: 16,
            name: 'Blue Tie',
            price: 20,
            description: 'Elegant blue tie',
            imageUrl:'https://www.andamen.com/cdn/shop/products/01_ad9eae79-57f1-4fc8-9294-0bf60a207899.jpg?v=1701683737',
            category: 'Accessories',
            quantity: 170,
            color: 'Blue',
            discount: 10
        },
        {
            id: 17,
            name: 'Black Suit',
            price: 100,
            description: 'Formal black suit',
            imageUrl:'https://www.andamen.com/cdn/shop/products/01_ad9eae79-57f1-4fc8-9294-0bf60a207899.jpg?v=1701683737',
            category: 'Suit',
            quantity: 50,
            color: 'Black',
            discount: 30
        },
        {
            id: 18,
            name: 'White Blouse',
            price: 35,
            description: 'Elegant white blouse',
            imageUrl:'https://www.andamen.com/cdn/shop/products/01_ad9eae79-57f1-4fc8-9294-0bf60a207899.jpg?v=1701683737',
            category: 'Blouse',
            quantity: 140,
            color: 'White',
            discount: 15
        },
        {
            id: 19,
            name: 'Red Skirt',
            price: 45,
            description: 'Stylish red skirt',
            imageUrl:'https://www.andamen.com/cdn/shop/products/01_ad9eae79-57f1-4fc8-9294-0bf60a207899.jpg?v=1701683737',
            category: 'Skirt',
            quantity: 90,
            color: 'Red',
            discount: 25
        },
        {
            id: 20,
            name: 'Black Boots',
            price: 75,
            description: 'Leather black boots',
            imageUrl:'https://www.andamen.com/cdn/shop/products/01_ad9eae79-57f1-4fc8-9294-0bf60a207899.jpg?v=1701683737',
            category: 'Shoes',
            quantity: 70,
            color: 'Black',
            discount: 35
        }
    ]
    constructor() { }

    getProducts() {
        return this.products
    }

    getProductById(id: number) {
        const products = this.getProducts();
        return products.find(product => product.id === id);
    }

}