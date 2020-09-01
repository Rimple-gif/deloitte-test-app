import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { Item } from '../../models/item';
import { ProductService } from '../../services/product.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.less']
})
export class ProductDetailComponent implements OnInit {

  public id: string;
  public name:string;
  public product: Product;

  constructor(private activatedRoute: ActivatedRoute, private ps:ProductService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params =>{
      this.id = params['id']
      let products  = this.ps.getAll()
      this.product = products.find(p =>p.id == this.id)
    })
  }

}
