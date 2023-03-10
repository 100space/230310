const service = require("./check.service");

const login = (req, res, next) => {
  try {
    const { userid, userpw } = req.body;
    const { token, ...result } = service.loginService({ userid, userpw });
    const expires = new Date(result.exp * 1000);
    if (token) return res.status(200).cookie("token", token, { expires }).json(result);
    res.status(401).json(result);
  } catch (e) {
    next(e);
  }
};

const logout = (req, res, next) => {
  try {
    const auth = req.headers.authorization;
    if (!auth) throw new Error(JSON.stringify({ message: "Authorization이 없습니다.", status: 401 }));
    const [type, token] = auth.split(" ");
    if (type.toLowerCase() !== "bearer") throw new Error(JSON.stringify({ message: "Authorization Type Error", status: 401 }));
    const result = service.logoutService({ token });
    // res.clearCookie("token");
    res.status(200).json({ message: "로그아웃 성공", status: 200, isLogin: false });
  } catch (e) {
    next(e);
  }
};

module.exports = { login, logout };
