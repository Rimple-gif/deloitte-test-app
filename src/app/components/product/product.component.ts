import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.less']
})
export class ProductComponent implements OnInit {

  public products: Product[];

  constructor(private ps:ProductService) { }

  ngOnInit() {
    this.products = this.ps.getAll();
  }

}
