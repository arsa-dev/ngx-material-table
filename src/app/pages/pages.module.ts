import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { routes } from './pages.routes';
import { SharedModule } from '../shared/shared.module';

import { NgxMaterialTableModule } from '../../ngx-material-table/ngx-material-table.module';

@NgModule({
  imports: [
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    NgxMaterialTableModule,
    SharedModule,
  ],
})
export class PagesModule {
}
