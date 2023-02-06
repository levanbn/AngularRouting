import { UsersInfoComponent } from './info/users-info/users-info.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './info/users.component';

const routes: Routes = [
  {
    path: 'users',
    component:UsersComponent,
  },
  {
    path: 'users-info',
    component:UsersInfoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
