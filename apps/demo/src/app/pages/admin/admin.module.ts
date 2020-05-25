import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin.routes';
import { AdminComponent } from './admin.component';
import { AdminLayoutModule } from '@lowlandtech/admin-layout';
import { HeaderModule } from '@lowlandtech/header';
import { NavModule } from '@lowlandtech/nav';
import { MainModule } from '@lowlandtech/main';
import { AsideModule } from '@lowlandtech/aside';
import { FooterModule } from '@lowlandtech/footer';


@NgModule({
  declarations: [AdminComponent],
  imports: [
    CommonModule,
    AdminLayoutModule,
    HeaderModule,
    NavModule,
    MainModule,
    AsideModule,
    FooterModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
