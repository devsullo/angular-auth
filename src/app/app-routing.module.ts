import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserAreaComponent } from './user-area/user-area.component';
import { AuthComponent } from './auth/auth.component';

const routes: Routes = [
  {
    path: 'user-area',
    component: UserAreaComponent,
  },
  {
    path: 'auth',
    component: AuthComponent
  },
  { path: '**', redirectTo: 'auth', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
