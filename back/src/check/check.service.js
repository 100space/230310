const repo = require("./check.repository");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const { algorithm, salt } = require("../../config");

const message = {
  success: { message: "로그인 성공", status: 200, isLogin: true },
  fail: { message: "아이디와 패스워드가 일치하지 않습니다.", status: 401, isLogin: false },
};

const expireTime = () => {
  return Math.floor(Date.now() / 1000) + 60 * 60;
};

const loginService = ({ userid, userpw }) => {
  try {
    const hash = crypto.createHmac(algorithm, salt).update(userpw).digest("hex");
    const result = repo.loginRepo({ userid, userpw: hash });
    if (!result) {
      return { ...message.fail };
    }
    const expire = expireTime();
    const token = jwt.sign({ ...result, expire }, salt);
    return { token, ...message.success, expire };
  } catch (e) {
    throw new Error(e);
  }
};

const getMe = ({ token }) => {
  try {
    const decoded = jwt.verify(token, salt);
    return decoded;
  } catch (e) {
    throw new Error(JSON.stringify({ message: e.message, status: 401 }));
  }
};

module.exports = { loginService, getMe };
