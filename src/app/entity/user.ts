// 用户个人信息类
export class User {
  // 教职工号 String tID tid
  tid: string;
  // 用户姓名 String tName tname
  uname: string;
  // 用户电话 String tPhone tphone
  uphone: string;
  // 用户QQ String tQQ tqq
  uqq: string;
  // 用户邮箱 String tEmail temail
  uemail: string;
  // 密码 String tPassword tpassword
  upassword: string;
  // 权限（是否为管理员） int tLimit tlimit
  ulimit: number;
}


/**
 * 用户消息实体
 */
export class TeacherMsg {

  mid: number;

  uid: string;

  mtitle: string;

  mdate: string;

  mtext: string;

  mstatus: number;

  mresult: number;

}
