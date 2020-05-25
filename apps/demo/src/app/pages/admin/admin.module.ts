import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LayoutsModule } from '@lowlandtech/layouts';

import { AdminComponent } from './admin.component';

export const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    data: { title: 'admin' }
  }
];

@NgModule({
  declarations: [AdminComponent],
  imports: [
    CommonModule,
    LayoutsModule,
    RouterModule.forChild(routes)
  ]
})
export class AdminModule { }
