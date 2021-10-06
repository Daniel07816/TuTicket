import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//componentes
import { SigninComponent } from './componentes/signin/signin.component';
import { SignupComponent } from './componentes/signup/signup.component';
import { EventosComponent } from './componentes/eventos/eventos.component';
import {AuthGuard} from './auth.guard'

const routes: Routes = [
  {
    path: '',
    redirectTo: '/eventos',
    pathMatch: 'full'
  },
  {
    path: 'eventos',
    component: EventosComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'signin',
    component: SigninComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
