import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BonusAddComponent } from './bonus/add/add.component';
import { AddComponent } from './user/add/add.component';
import { DetailComponent } from './user/detail/detail.component';
import { ListComponent } from './user/list/list.component';
import { UpdateComponent } from './user/update/update.component';

const routes: Routes = [
  {
    path:'',
    component: ListComponent
  },
  {
    path:'add',
    component: AddComponent
  },
  {
    path:'edit/:id',
    component: UpdateComponent
  },
  {
    path:'detail/:id',
    component: DetailComponent
  },
  {
    path:'bonusAdd/:id',
    component: BonusAddComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
