import api from "../axios/axios";

export default class UserService {
  static async getUsers(email, password) {
    return api.get("/users");
  }
}
