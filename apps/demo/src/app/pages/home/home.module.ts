import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LayoutsModule } from '@lowlandtech/layouts';

import { HomeComponent } from './home.component';
import { routes } from './home.routes';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    LayoutsModule,
    RouterModule.forChild(routes)
  ]
})
export class HomeModule { }
