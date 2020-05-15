import {Component, OnInit, ViewChild} from '@angular/core';
import {FormControl} from '@angular/forms';
import {ModalComponent} from '../../modal/modal.component';

@Component({
  selector: 'app-apply',
  templateUrl: './apply.component.html',
  styleUrls: ['./apply.component.scss']
})
export class ApplyComponent implements OnInit {

  @ViewChild('frame', {static: true}) frame: ModalComponent;


  // status: number;
  status = 0;
  feedback = 2;
  // 周次
  weekList = [];
  weekSelected = [];
  weekSettings = {};
  // 星期
  dayList = [];
  daySelected = [];
  daySettings = {};
  // 节次
  timeList = [];
  timeSelected = [];
  timeSettings = {};
  // 校区
  regionList = [];
  regionSelected = [];
  regionSettings = {};
  // 班级
  classList = [];
  classSelected = [];
  classSettings = {};
  // 年级
  gradeList = [];
  gradeSelected = [];
  gradeSettings = {};

  beizhu: FormControl;

  constructor() {
  }

  ngOnInit(): void {

    this.beizhu = new FormControl();

    this.weekList = [
      {id: 1, itemName: '第一周'},
      {id: 2, itemName: '第二周'},
      {id: 3, itemName: '第三周'},
      {id: 4, itemName: '第四周'},
      {id: 5, itemName: '第五周'},
      {id: 6, itemName: '第六周'},
      {id: 7, itemName: '第七周'},
      {id: 8, itemName: '第八周'},
      {id: 9, itemName: '第九周'},
      {id: 10, itemName: '第十周'},
      {id: 11, itemName: '十一周'},
      {id: 12, itemName: '十二周'},
      {id: 13, itemName: '十三周'},
      {id: 14, itemName: '十四周'},
      {id: 15, itemName: '十五周'},
      {id: 16, itemName: '十六周'},
      {id: 17, itemName: '十七周'},
      {id: 18, itemName: '十八周'},
      {id: 19, itemName: '十九周'},
      {id: 20, itemName: '二十周'},
    ];
    this.weekSettings = {
      badgeShowLimit: 2,
      singleSelection: false, // 是否单选
      text: '选择周次',
      enableCheckAll: true, // 是否可以全选
      selectAllText: '全选',
      unSelectAllText: '全不选',
      enableSearchFilter: false, // 查找过滤器
      // showCheckbox: false,
      // enableFilterSelectAll: true, // “全选”复选框可以选择所有过滤结果
      // limitSelection 选择个数的限制
      // searchPlaceholderText 搜索的默认文字
    };
    this.dayList = [
      {id: '1', itemName: '星期一'},
      {id: '2', itemName: '星期二'},
      {id: '3', itemName: '星期三'},
      {id: '4', itemName: '星期四'},
      {id: '5', itemName: '星期五'},
      {id: '6', itemName: '星期六'},
      {id: '7', itemName: '星期天'},
    ];
    this.daySettings = {
      badgeShowLimit: 2,
      singleSelection: false, // 是否单选
      text: '选择星期',
      enableCheckAll: true, // 是否可以全选
      selectAllText: '全选',
      unSelectAllText: '全不选',
      enableSearchFilter: false, // 查找过滤器
      // showCheckbox: false,
      // enableFilterSelectAll: true, // “全选”复选框可以选择所有过滤结果
      // limitSelection: 5,
      // searchPlaceholderText 搜索的默认文字
    };
    this.timeList = [
      {id: '1', itemName: '上午第一节'},
      {id: '2', itemName: '上午第二节'},
      {id: '3', itemName: '下午第一节'},
      {id: '4', itemName: '下午第二节'},
      {id: '5', itemName: '晚上第一节'},
      {id: '6', itemName: '晚上第二节'},
    ];
    this.timeSettings = {
      singleSelection: true, // 是否单选
      text: '选择节次',
      // enableCheckAll: true, // 是否可以全选
      // selectAllText: '全选',
      // unSelectAllText: '全不选',
      enableSearchFilter: false, // 查找过滤器
      // showCheckbox: false,
      // enableFilterSelectAll: true, // “全选”复选框可以选择所有过滤结果
      // limitSelection: 5,
      // searchPlaceholderText 搜索的默认文字
    };
    this.regionList = [
      {id: '1', itemName: '双福校区'},
      {id: '2', itemName: '南岸校区'},
    ];
    this.regionSettings = {
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
    const date = new Date();
    this.gradeList = [
      {id: '1', itemName: date.getFullYear()}, // 20
      {id: '2', itemName: date.getFullYear() - 1}, // 19
      {id: '3', itemName: date.getFullYear() - 2}, // 18
      {id: '4', itemName: date.getFullYear() - 3}, // 17
      {id: '4', itemName: date.getFullYear() - 4}, // 16

    ];
    this.gradeSettings = {
      singleSelection: true, // 是否单选
      text: '选择年级',
      // enableCheckAll: true, // 是否可以全选
      // selectAllText: '全选',
      // unSelectAllText: '全不选',
      enableSearchFilter: false, // 查找过滤器
      // showCheckbox: false,
      // enableFilterSelectAll: true, // “全选”复选框可以选择所有过滤结果
      // limitSelection: 5,
      // searchPlaceholderText 搜索的默认文字
    };
    this.classList = [
      {id: '1', itemName: '计算机1班'},
      {id: '2', itemName: '计算机2班'},
      {id: '3', itemName: '计算机3班'},
      {id: '4', itemName: '计算机4班'},
      {id: '5', itemName: '物联网1班'},
      {id: '6', itemName: '物联网2班'},
      {id: '7', itemName: '电子信息1班'},
      {id: '8', itemName: '电子信息2班'},
      {id: '9', itemName: '电子信息3班'},
      {id: '10', itemName: '电子信息4班'},
      {id: '11', itemName: '电子信息5班'},
      {id: '12', itemName: '电子信息6班'},
      {id: '13', itemName: '曙光班'},
    ];
    this.classSettings = {
      badgeShowLimit: 2,
      singleSelection: false, // 是否单选
      text: '选择班级',
      enableCheckAll: true, // 是否可以全选
      selectAllText: '全选',
      unSelectAllText: '全不选',
      enableSearchFilter: false, // 查找过滤器
      // showCheckbox: false,
      // enableFilterSelectAll: true, // “全选”复选框可以选择所有过滤结果
      // limitSelection: 5,
      // searchPlaceholderText 搜索的默认文字
    };

    this.frame.show();
  }

  submit() {

  }

}
