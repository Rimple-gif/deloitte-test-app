import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  public products: Product[];
  public item:Product[]

  constructor() {
    this.products = [
      { id: 'p01', name: 'Wooden chair', price: '100$', photo: '../../assets/images/pic1.jpg' },
      { id: 'p02', name: 'Pink sofa', price: '200$', photo: '../../assets/images/pic2.jpg' },
      { id: 'p03', name: 'Sofa set', price: '300$', photo: '../../assets/images/pic3.jpg' },
      { id: 'p04', name: 'Sofa black', price: '300$', photo: '../../assets/images/pic4.jpg' },
      { id: 'p05', name: 'table Lamp', price: '300$', photo: '../../assets/images/pic5.jpg' },
      { id: 'p06', name: 'Chair', price: '300$', photo: '../../assets/images/pic6.jpg' },
      { id: 'p07', name: 'Bed sofa', price: '300$', photo: '../../assets/images/pic7.jpg' },
      { id: 'p08', name: 'sofa set piece', price: '300$', photo: '../../assets/images/pic8.jpg' },
      { id: 'p09', name: 'Sofa with cutions', price: '300$', photo: '../../assets/images/pic9.jpg' }
    ];
   }

   getAll(){
     return this.products;
   }
}
