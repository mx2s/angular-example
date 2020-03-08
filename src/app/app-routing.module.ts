import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddUserComponent} from "./page/user/add-user/add-user.component";
import {IndexComponent} from "./page/index/index.component";


const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
  },
  {
    path: 'new-user',
    component: AddUserComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
