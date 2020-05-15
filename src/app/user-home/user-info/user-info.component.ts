import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {

  user: any;

  constructor() {
  }

  ngOnInit(): void {
    this.user = {uid: '123', uname: 'name', uphone: '12345678', uemail: 'test@test.com', ulimit: '管理员'};
  }

}
