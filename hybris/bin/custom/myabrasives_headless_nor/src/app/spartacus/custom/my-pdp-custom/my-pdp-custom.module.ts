import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CmsConfig, ConfigModule} from "@spartacus/core";
import {MyPdpCustomComponent} from './my-pdp-custom.component';



@NgModule({
  declarations: [
    MyPdpCustomComponent
  ],
  imports: [
    CommonModule,

    ConfigModule.withConfig({
      cmsComponents: {
        ProductIntroComponent: {
          component: MyPdpCustomComponent
        }
      }
    }as CmsConfig)
  ]
})
export class MyPdpCustomModule { }
