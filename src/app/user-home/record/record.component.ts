import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.scss']
})
export class RecordComponent implements OnInit {

  data: any = {};

  constructor() {
  }

  ngOnInit(): void {
    this.data = [
      {no: 1, expCname: '实验课程名', status: 0, ps: '备注'},
      {no: 2, expCname: '实验课程名', status: 1, ps: '备注'},
      {no: 3, expCname: '实验课程名', status: 2, ps: '备注'},
      {no: 4, expCname: '实验课程名', status: 0, ps: '备注'},
      {no: 5, expCname: '实验课程名', status: 1, ps: '备注12333'},
    ];
  }

}
