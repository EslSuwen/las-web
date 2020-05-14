import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../service/authentication.service';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.scss']
})
export class UserHomeComponent implements OnInit {
  toggleFlag = true;
  userName = '';


  constructor(private authenticationService: AuthenticationService) {
  }

  ngOnInit() {

    this.userName = this.authenticationService.getUserName();

  }

  logout() {
  }
}
