import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SiteLayoutModule } from '@lowlandtech/site-layout';
import { HeaderModule } from '@lowlandtech/header';
import { MainModule } from '@lowlandtech/main';
import { FooterModule } from '@lowlandtech/footer';

import { HomeRoutingModule } from './home.routes';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    SiteLayoutModule,
    HeaderModule,
    MainModule,
    FooterModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
