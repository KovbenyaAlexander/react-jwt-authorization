const jwt = require("jsonwebtoken");
const tokenModel = require("../models/tokenModel");

class TokenService {
  generateToken(payload) {
    const accesToken = jwt.sign(payload, process.env.JWT_ACCES_SECRET_KEY, {
      expiresIn: "30m",
    });
    const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_SECRET_KEY, {
      expiresIn: "30d",
    });

    return {
      accesToken,
      refreshToken,
    };
  }

  async saveToken(userId, refreshToken) {
    const tokenData = await tokenModel.findOne({ userId });
    if (tokenData) {
      tokenData.refreshToken = refreshToken;
      return tokenData.save();
    }

    const token = await tokenModel.create({ user: userId, refreshToken });
  }

  async removeToken(refreshToken) {
    const tokenData = await tokenModel.deleteOne({ refreshToken });
    return tokenData;
  }

  validateAccesToken(token) {
    try {
      const userData = jwt.verify(token, process.env.JWT_ACCES_SECRET_KEY);
      return userData;
    } catch (e) {
      return null;
    }
  }

  validateRefreshToken(token) {
    try {
      const userData = jwt.verify(token, process.env.JWT_REFRESH_SECRET_KEY);
      return userData;
    } catch (e) {}
  }

  async findToken(refreshToken) {
    const tokenData = await tokenModel.findOne({ refreshToken });
    return tokenData;
  }
}

module.exports = new TokenService();
