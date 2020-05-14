import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {Code404Component} from './code404/code404.component';
import {UserHomeComponent} from './user-home/user-home.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';


const routes: Routes = [
  {
    path: '', // 默认路由
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  // canActivate: [CanActivateAuthGuard],
  {path: 'home', component: UserHomeComponent},
  {path: '**', component: Code404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
