import { Component, OnInit, ViewChild } from '@angular/core';
import { Product } from '../../models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

  public product: Product[];

  constructor(private ps:ProductService) { }

  ngOnInit() {
    this.product = this.ps.getAll();
    this.product = [...this.product]
    console.log(this.product)
  }

  updateFilter(event:{ target: {value: { toLowerCase : () => any;};};}){
    const val = event.target.value.toLowerCase();
    console.log(val)

    // var tempFilter:any;

    const temp = this.product.filter(function(d:Product){
       return (d.name.toLowerCase().indexOf(val) !== -1) ||
              val == null;
    })
    this.product = temp;  
    console.log(temp,"temp")
    }

  }

