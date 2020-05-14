import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {Code404Component} from './code404/code404.component';
import {LoginComponent} from './login/login.component';
import {UserHomeComponent} from './user-home/user-home.component';
import {RegisterComponent} from './register/register.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NZ_I18N, zh_CN} from 'ng-zorro-antd/i18n';
import {registerLocaleData} from '@angular/common';
import zh from '@angular/common/locales/zh';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import {NgZorroAntdModule, NzBadgeModule, NzDropDownModule, NzIconModule} from 'ng-zorro-antd';
import { ModalComponent } from './modal/modal.component';

registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
    Code404Component,
    LoginComponent,
    UserHomeComponent,
    RegisterComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    ReactiveFormsModule,
    NzDropDownModule,
    NzBadgeModule,
    NzIconModule
  ],
  providers: [{provide: NZ_I18N, useValue: zh_CN}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
