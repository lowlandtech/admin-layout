import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLayoutModule } from './admin-layout';
import { AsideModule } from './aside';
import { FooterModule } from './footer';
import { HeaderModule } from './header';
import { ContentModule } from './content';
import { NavModule } from './nav';
import { SiteLayoutModule } from './site-layout';

@NgModule({
  imports: [
    CommonModule,
    AdminLayoutModule,
    AsideModule,
    FooterModule,
    HeaderModule,
    ContentModule,
    NavModule,
    SiteLayoutModule
  ],
  exports: [
    AdminLayoutModule,
    AsideModule,
    FooterModule,
    HeaderModule,
    ContentModule,
    NavModule,
    SiteLayoutModule
  ]
})
export class LayoutsModule {}
