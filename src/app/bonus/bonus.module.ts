import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import {MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import {MatListModule} from '@angular/material/list';
import { BonusAddComponent } from './add/add.component';
import { MatButtonModule } from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { AppRoutingModule } from '../app-routing.module';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  declarations: [
    ListComponent,
    BonusAddComponent,
  ],
  imports: [
    CommonModule,
    MatInputModule,
    ReactiveFormsModule,
    MatListModule,
    MatButtonModule,
    MatSelectModule,
    MatFormFieldModule,
    MatTableModule,
    AppRoutingModule,
    MatDialogModule
  ],
  exports:[
    ListComponent
  ]
})
export class BonusModule { }
