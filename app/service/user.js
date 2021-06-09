'use strict';
const Service = require('egg').Service;
class UserService extends Service {
  async userList() {
    return this.app.mysql.query('select * from user');
  }
}
module.exports = UserService;
