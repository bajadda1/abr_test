import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {OutletPosition, provideOutlet } from "@spartacus/storefront";
import {MyPdpCustomOutletComponent} from './my-pdp-custom-outlet.component';



@NgModule({
  declarations: [
    MyPdpCustomOutletComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    provideOutlet({
      id: 'PDP.PRICE',
      position: OutletPosition.AFTER,
      component: MyPdpCustomOutletComponent,
    }),
  ],
})
export class MyPdpCustomOutletModule { }
