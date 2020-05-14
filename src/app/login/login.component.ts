import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {environment} from '../../environments/environment';
import {AuthenticationService} from '../service/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  validationForm: FormGroup;
  authModel: any = {};
  imgUrl = `${environment.apiUrl}/api/createImageCode`;
  username: string;

  constructor(
    public fb: FormBuilder,
    public router: Router,
    private authenticationService: AuthenticationService,
  ) {
    this.validationForm = fb.group({
      userFormEx: [null, [Validators.required]],
      passwordFormEx: [null, Validators.required],
      codeFormEx: [null, Validators.required],
    });
  }

  get userFormEx() {
    return this.validationForm.get('userFormEx');
  }

  get passwordFormEx() {
    return this.validationForm.get('passwordFormEx');
  }

  get codeFormEx() {
    return this.validationForm.get('codeFormEx');
  }

  onSubmit() {
    // this.validationForm.controls.input.markAsTouched();
  }

  ngOnInit() {
    this.authenticationService.logout();

  }

  login() {
    this.router.navigate(['home']);
    this.authenticationService.login(this.authModel.username, this.authModel.password, this.authModel.imgCode)
      .subscribe(result => {
        // 判断验证码是否输入正确
        this.username = this.authenticationService.getUserName();
        const judge = this.authenticationService.isLoggedIn();
        if (result) {
          // login successful
          if (judge) {

          } else {
            // 验证码输入错误
            alert('验证码错误');
          }

        } else {
          // login failed
          alert('Username or password is incorrect');
        }
      });
  }

  private log(message: string) {
  }

  refresh() {
    this.imgUrl = this.imgUrl + '?' + Math.random();
  }

  // 输入正确，确认进入
  successLogin() {
    this.router.navigate(['home']);
  }
}
