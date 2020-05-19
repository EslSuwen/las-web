import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {Code404Component} from './code404/code404.component';
import {UserHomeComponent} from './user-home/user-home.component';
import {LoginComponent} from './login/login.component';
import {UpdatePasswordComponent} from './user-home/update-password/update-password.component';
import {UserInfoComponent} from './user-home/user-info/user-info.component';
import {RecordComponent} from './user-home/record/record.component';
import {ApplyComponent} from './user-home/apply/apply.component';
import {AuditComponent} from './user-home/audit/audit.component';
import {AuditRecordComponent} from './user-home/audit-record/audit-record.component';


const routes: Routes = [
  {
    path: '', // 默认路由
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {path: 'login', component: LoginComponent},
  // canActivate: [CanActivateAuthGuard],
  {
    path: 'home', component: UserHomeComponent,
    children: [
      {
        path: '',
        redirectTo: '/home/apply',
        pathMatch: 'full'
      },
      {path: 'audit', component: AuditComponent},
      {path: 'audit-record', component: AuditRecordComponent},
      {path: 'apply', component: ApplyComponent},
      {path: 'user-info', component: UserInfoComponent},
      {path: 'update-password', component: UpdatePasswordComponent},
      {path: 'record', component: RecordComponent},
      {path: '**', component: Code404Component}
    ],
  },
  {path: '**', component: Code404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
