import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { routes } from './app.routes';
import { AppComponent } from './app.component';
import { LayoutsModule } from '@lowlandtech/layouts';

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
