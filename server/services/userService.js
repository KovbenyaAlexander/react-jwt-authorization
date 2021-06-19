const UserModel = require("../models/userModel");
const bcrypt = reqire("bcrypt");
const uuid = require("uuid");
const mailServise = require("./mailService");
const tokenService = require("./tokenService");
const userDto = require("../dtos/userDto");

class UserService {
  async registration(email, password) {
    const candidate = await UserModel.findOne({ email });

    if (candidate) {
      throw new Error("User already exist");
    }

    const activationLink = uuid.v4();
    const hachPassword = await bcrypt.hash(password, 2);
    const user = await UserModel.create({ email, password: hachPassword });
    await mailServise.sendActivationMail(email, activationLink);

    const userDto = new userDto(user);
    const tokens = tokenService.generateToken({ ...userDto });
    await tokenService.saveToken(userDto.id, tokens.refreshToken);

    return {
      ...tokens,
      user: userDto,
    };
  }
}

module.exports = new UserService();
