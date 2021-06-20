const UserModel = require("../models/userModel");
const bcrypt = require("bcrypt");
const uuid = require("uuid");
const mailServise = require("./mailService");
const tokenService = require("./tokenService");
const UserDto = require("../dtos/userDto");

class UserService {
  async registration(email, password) {
    const candidate = await UserModel.findOne({ email });

    if (candidate) {
      console.log("alreadyExist");
    }

    const activationLink = uuid.v4();

    const hachPassword = await bcrypt.hash(password, 2);

    const user = await UserModel.create({
      email,
      password: hachPassword,
      activationLink,
    });

    await mailServise.sendActivationMail(
      email,
      `${process.env.API_URL}/api/activate/${activationLink}`
    );

    const userDto = new UserDto(user);
    const tokens = tokenService.generateToken({ ...userDto });
    // await tokenService.saveToken(userDto.id, tokens.refreshToken);

    return {
      ...tokens,
      user: userDto,
    };
  }
}

module.exports = new UserService();
