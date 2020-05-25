import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LayoutsModule } from '@lowlandtech/layouts';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'admin' },
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
  { path: 'admin', loadChildren: () => import('./pages/admin/admin.module').then(m => m.AdminModule) },
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    LayoutsModule,
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabled',
      useHash: true
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
