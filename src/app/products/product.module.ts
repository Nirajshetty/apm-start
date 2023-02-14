import { NgModule } from '@angular/core';

import { ProductListComponent } from './product-list.component';
import { ConvertToSpacesPipe } from '../shared/convert-to-spaces.pipe';

import { ProductDetailComponent } from './product-detail.component';

import { RouterModule } from '@angular/router';
import { ProductDetailGuard } from './product-detail.guard';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    ProductListComponent,
    ConvertToSpacesPipe,
    ProductDetailComponent
  ],
  imports: [
    RouterModule.forChild([
      {
        path: '', children: [
          { path: '', component: ProductListComponent },
          {
            path: ':id',
            canActivate: [ProductDetailGuard],
            component: ProductDetailComponent
          }
        ]
      }
      
    ]),
    SharedModule
  ]
})
export class ProductModule { }
