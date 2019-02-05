import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { NgxMaterialTableModule } from '../ngx-material-table';

import { PagesModule } from './pages/pages.module';

import { AppComponent } from './app.component';

import { routes } from './app.routes';

import { ScrollPositionDirective } from './theme/directives/scrollPosition.directive';

@NgModule({
  declarations: [
    AppComponent,
    ScrollPositionDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes, { useHash: true }),
    NgxMaterialTableModule,
    PagesModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
