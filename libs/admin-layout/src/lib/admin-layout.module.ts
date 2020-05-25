import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { AdminLayoutComponent } from './admin-layout.component';

export const routes: Route[] = [];

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [AdminLayoutComponent],
  exports: [AdminLayoutComponent],
})
export class AdminLayoutModule {}
