import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './components/product/product.component'
import { ProductDetailComponent } from './components/product-detail/product-detail.component'

const routes: Routes = [
  { path: 'product', component: ProductComponent },
  { path: 'productDetail/:id', component: ProductDetailComponent },
  { path: '', redirectTo: '/product',pathMatch: 'full' },
	{ path: '**', redirectTo: '/product',pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
