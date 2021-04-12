import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BonusAddComponent } from './add/add.component';

const routes: Routes = [

  {
    path:'bonusAdd/:id',
    component: BonusAddComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class BonusRoutingModule { }
