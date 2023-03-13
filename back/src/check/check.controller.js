const service = require("./check.service");

const login = (req, res, next) => {
  try {
    const { userid, userpw } = req.body;
    const { token, expire, ...result } = service.loginService({ userid, userpw });
    const expires = new Date(expire * 1000);
    if (token) return res.status(200).cookie("token", token, { expires, path: "/" }).json(result);
    res.status(401).json(result);
  } catch (e) {
    next(e);
  }
};

const logout = (req, res, next) => {
  try {
    res.clearCookie("token");
    res.status(200).json({ message: "로그아웃 성공", status: 200, isLogin: false });
  } catch (e) {
    next(e);
  }
};

const me = (req, res, next) => {
  try {
    const { token } = req;
    const result = service.getMe({ token });
    res.status(200).json({ message: "회원정보 가져오기 성공", status: 200, ...result });
  } catch (e) {
    next(e);
  }
};

module.exports = { me, login, logout };
