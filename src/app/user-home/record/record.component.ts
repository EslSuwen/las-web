import {Component, OnInit, ViewChild} from '@angular/core';
import {ModalComponent} from '../../modal/modal.component';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.scss']
})
export class RecordComponent implements OnInit {
  @ViewChild('successModal', {static: true}) successModal: ModalComponent; // 操作成功模态
  @ViewChild('failModal', {static: true}) failModal: ModalComponent; // 操作失败的模态
  @ViewChild('removeModal', {static: true}) removeModal: ModalComponent; // 操作失败的模态
  @ViewChild('updateModal', {static: true}) updateModal: ModalComponent; // 修改的模态


  data: any = {};
  feedback = 0;
  removeNo: number;


  applyModel: any = {
    campus: '南岸校区', labName: '实验室1', deviceName: '设备2', deviceNum: '4', tutor: '导师3',
    date: '2020-5-25', startTime: '13:00', overTime: '15:00', ps: '这是预约备注。'
  };
  isLabSelected = true;
  isDeviceSelected = true;
  // 实验室
  labList = [];
  labSelected: any;
  labSettings = {};
  // 设备数量
  deviceNumList = [];
  deviceNumSelected: any;
  deviceNumSettings = {};
  // 校区
  campusList = [];
  campusSelected = [{id: '2', itemName: '南岸校区'}];
  campusSettings = {};
  // 设备
  deviceList = [];
  deviceSelected: any;
  deviceSettings = {};
  // 导师
  tutorList = [];
  tutorSelected: any;
  tutorSettings = {};

  psFormControl: FormControl;

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

    this.labList = [
      {id: '0', itemName: '未找到实验室'},
      {id: '1', itemName: '实验室1'},
      {id: '2', itemName: '实验室2'},
      {id: '3', itemName: '实验室3'},
      {id: '4', itemName: '实验室4'},
      {id: '5', itemName: '实验室5'},
      {id: '6', itemName: '实验室6'},
      {id: '7', itemName: '实验室7'},
    ];
    this.labSettings = {
      badgeShowLimit: 2,
      singleSelection: true, // 是否单选
      text: '选择实验室',
      enableCheckAll: false, // 是否可以全选
      enableSearchFilter: true, // 查找过滤器
      // showCheckbox: false,
      // enableFilterSelectAll: true, // “全选”复选框可以选择所有过滤结果
      // limitSelection: 5,
      // searchPlaceholderText 搜索的默认文字
    };
    this.deviceList = [
      {id: '0', itemName: '无'},
      {id: '1', itemName: '未找到设备'},
      {id: '2', itemName: '设备2'},
      {id: '3', itemName: '设备3'},
      {id: '4', itemName: '设备4'},
      {id: '5', itemName: '设备5'},
      {id: '6', itemName: '设备6'},
      {id: '7', itemName: '设备7'},
    ];
    this.deviceSettings = {
      badgeShowLimit: 2,
      singleSelection: true, // 是否单选
      text: '选择设备',
      enableCheckAll: false, // 是否可以全选
      enableSearchFilter: true, // 查找过滤器
      // showCheckbox: false,
      // enableFilterSelectAll: true, // “全选”复选框可以选择所有过滤结果
      // limitSelection: 5,
      // searchPlaceholderText 搜索的默认文字
    };
    this.deviceNumList = [
      {id: '1', itemName: '0'},
      {id: '2', itemName: '1'},
      {id: '3', itemName: '2'},
      {id: '4', itemName: '3'},
      {id: '5', itemName: '4'},
      {id: '6', itemName: '5'},
    ];
    this.deviceNumSettings = {
      singleSelection: true, // 是否单选
      text: '选择设备数量',
      enableSearchFilter: false, // 查找过滤器
    };
    this.campusList = [
      {id: '1', itemName: '双福校区'},
      {id: '2', itemName: '南岸校区'},
    ];
    this.campusSettings = {
      singleSelection: true, // 是否单选
      text: '选择校区',
      // enableCheckAll: true, // 是否可以全选
      // selectAllText: '全选',
      // unSelectAllText: '全不选',
      enableSearchFilter: false, // 查找过滤器
      // showCheckbox: false,
      // enableFilterSelectAll: true, // “全选”复选框可以选择所有过滤结果
      // limitSelection: 5,
      // searchPlaceholderText 搜索的默认文字
    };
    this.tutorList = [
      {id: '0', itemName: '导师0'},
      {id: '1', itemName: '导师1'},
      {id: '2', itemName: '导师2'},
      {id: '3', itemName: '导师3'},
      {id: '4', itemName: '导师4'},
      {id: '5', itemName: '导师5'},
    ];
    this.tutorSettings = {
      singleSelection: true, // 是否单选
      text: '选择导师',
      enableSearchFilter: true, // 查找过滤器
    };

  }

  onLabSelected(item: any) {
    if (item.itemName === '未找到实验室') {
      this.isLabSelected = false;
      this.applyModel.labName = '';
    } else {
      this.isLabSelected = true;
      this.applyModel.labName = item.itemName;
    }

  }

  onDeviceSelected(item: any) {
    if (item.itemName === '未找到设备') {
      this.isDeviceSelected = false;
      this.applyModel.deviceName = '';
    } else {
      this.isDeviceSelected = true;
      this.applyModel.deviceName = item.itemName;
    }
  }

  onDeviceNumSelected(item: any) {
    this.applyModel.deviceNum = item.itemName;
  }

  onCampusSelected(item: any) {
    this.applyModel.campus = item.itemName;
  }

  onTutorSelected(item: any) {
    this.applyModel.tutor = item.itemName;
  }

  toRemove(no: number) {
    this.removeNo = no;
    this.removeModal.show();
  }

  remove() {
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i].no === this.removeNo) {
        this.data.splice(i, 1);
        this.successModal.show();
        return;
      }
    }
  }

  toUpdate(no: number) {

    for (const each of this.campusList) {
      if (each.itemName === this.applyModel.campus) {
        this.campusSelected = [{id: each.id, itemName: each.itemName}];
      }
    }
    for (const each of this.labList) {
      if (each.itemName === this.applyModel.labName) {
        this.labSelected = [{id: each.id, itemName: each.itemName}];
      }
    }
    for (const each of this.deviceList) {
      if (each.itemName === this.applyModel.deviceName) {
        this.deviceSelected = [{id: each.id, itemName: each.itemName}];
      }
    }
    for (const each of this.deviceNumList) {
      if (each.itemName === this.applyModel.deviceNum) {
        this.deviceNumSelected = [{id: each.id, itemName: each.itemName}];
      }
    }
    for (const each of this.tutorList) {
      if (each.itemName === this.applyModel.tutor) {
        this.tutorSelected = [{id: each.id, itemName: each.itemName}];
      }
    }
    this.updateModal.show();
  }

  update() {
    this.successModal.show();
  }

}
