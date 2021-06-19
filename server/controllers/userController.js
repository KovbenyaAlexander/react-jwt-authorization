const userService = require("../services/userService");

class UserController {
  async registration(req, res, next) {
    try {
      const { email, password } = req.body;

      console.log(`email - ${email}`);
      console.log(`pass - ${password}`);

      const userData = await userService.registration(email, password);

      res.cookie("refreshToken", userData.refreshToken, {
        maxAge: 2592000000,
        httpOnly: true,
      });

      return res.json(userData);
    } catch (e) {
      res.json(e);
    }
  }

  async login(req, res, next) {}

  async logout(req, res, next) {}

  async activate(req, res, next) {}

  async refresh(req, res, next) {}

  async getUsers(req, res, next) {}
}

module.exports = new UserController();
