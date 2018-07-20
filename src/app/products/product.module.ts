import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { ProductDetailGuard } from './product-detail.guard';
import { ConvertToSpacesPipe } from '../shared/convert-to-spaces.pipe'
import { StartComponent } from '../shared/star.component';

@NgModule({
  imports: [
    CommonModule, 
    FormsModule,
    RouterModule.forChild([
      {path: 'products', component: ProductListComponent},
      {path: 'products/:id', 
        component: ProductDetailComponent,
        canActivate: [ProductDetailGuard]},
    ])
  ],
  declarations: [
  	ProductListComponent,
    ConvertToSpacesPipe,
    StartComponent,
    ProductDetailComponent,
  ]
})
export class ProductModule { }
