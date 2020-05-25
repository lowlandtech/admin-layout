import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LayoutsModule } from '@lowlandtech/layouts';

import { HomeComponent } from './home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: {
      title: 'Home'
    }
  }
];

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    LayoutsModule,
    RouterModule.forChild(routes)
  ]
})
export class HomeModule { }
