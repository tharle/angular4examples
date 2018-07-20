import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { ProductDetailGuard } from './product-detail.guard';
import { ProductRoutingModule } from './product-routing.module';

@NgModule({
  imports: [
    SharedModule,
    ProductRoutingModule
  ],
  declarations: [
  	ProductListComponent,
    ProductDetailComponent,
  ]
})
export class ProductModule { }
