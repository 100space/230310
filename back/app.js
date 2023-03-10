const express = require("express");
const cors = require("cors");

const setMiddleWare = (app) => {
  app.use(
    cors({
      origin: true,
      credentials: true,
    })
  );
  app.use(express.json());
};

const setRouter = (app) => {
  app.use(require("./routes"));
};

const setErrorHandler = (app) => {
  app.use((err, req, res, next) => {
    const result = JSON.parse(err.message);
    if (result.status) return res.status(result.status).json(result);
    res.status(500).send(err.message);
  });
};

const App = () => {
  const app = express();
  setMiddleWare(app);
  setRouter(app);
  setErrorHandler(app);
  return app;
};

module.exports = App();
