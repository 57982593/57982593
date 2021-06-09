'use strict';
const Controller = require('egg').Controller;
class UserController extends Controller {
  async info() {
    this.ctx.body = await this.ctx.service.user.userList();
  }
}
module.exports = UserController;
