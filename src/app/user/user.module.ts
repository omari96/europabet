import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';
import { UpdateComponent } from './update/update.component';

import { MatTableModule } from '@angular/material/table';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { AppRoutingModule } from '../app-routing.module';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsViewComponent } from '../_shared/forms-view/forms-view.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DetailComponent } from './detail/detail.component';
import { BonusModule } from '../bonus/bonus.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatPaginatorModule} from '@angular/material/paginator';


@NgModule({
  declarations: [ListComponent, AddComponent, UpdateComponent, FormsViewComponent, DetailComponent],

  imports: [
    CommonModule,
    BrowserModule,
    MatTableModule,
    ReactiveFormsModule,
    MatButtonModule,
    AppRoutingModule,
    RouterModule,
    BrowserAnimationsModule,
    BonusModule,
    MatFormFieldModule,
    MatPaginatorModule,
  ],
  exports: [
    ListComponent,
    AddComponent,
    UpdateComponent,
    MatTableModule,
  ]
})
export class UserModule { }
