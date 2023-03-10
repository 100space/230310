const repo = require("./check.repository");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const { algorithm, salt } = require("../../config");

const message = {
  success: { message: "로그인 성공", status: 200, isLogin: true },
  fail: { message: "아이디와 패스워드가 일치하지 않습니다.", status: 401, isLogin: false },
};

const expire = () => {
  return Math.floor(Date.now() / 1000) + 60 * 60;
};

const loginService = ({ userid, userpw }) => {
  try {
    const hash = crypto.createHmac(algorithm, salt).update(userpw).digest("hex");
    const result = repo.loginRepo({ userid, userpw: hash });
    if (!result) {
      return { ...message.fail };
    }
    const exp = expire();
    const token = jwt.sign({ ...result, exp }, salt);
    return { token, ...message.success, exp };
  } catch (e) {
    throw new Error(e);
  }
};

const logoutService = ({ token }) => {
  try {
    const now = Math.floor(Date.now() / 1000);
    console.log(now);
    const decoded = jwt.verify(token, salt);
    console.log(decoded);
    // console.log(decoded);
    return token;
  } catch (e) {}
};

module.exports = { loginService, logoutService };
