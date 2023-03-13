const message = {
  invalidAuth: { message: "Invalid Authorization", status: 401 },
  authTypeErr: { message: "Authorization Type Error", status: 401 },
};

const messageToString = (message) => {
  return JSON.stringify(message);
};

const verify = (req, res, next) => {
  try {
    const auth = req.headers.authorization;
    if (!auth) throw new Error(messageToString(message.invalidAuth));
    const [type, token] = auth.split(" ");
    if (type.toLowerCase() !== "bearer") throw new Error(messageToString(message.authTypeErr));
    req.token = token;
    next();
  } catch (e) {
    next(e);
  }
};

module.exports = { verify };
