import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LayoutsModule } from '@lowlandtech/layouts';

import { routes } from './admin.routes';
import { AdminComponent } from './admin.component';

@NgModule({
  declarations: [AdminComponent],
  imports: [
    CommonModule,
    LayoutsModule,
    RouterModule.forChild(routes)
  ]
})
export class AdminModule { }
