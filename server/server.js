require("dotenv").config()
const express = require("express");
const router = require("./router/auth-router");
const app = express();
const connectDb = require("./utils/db");
const errorMiddleware = require("./middlewares/error-middleware");
app.use(express.json());

app.use("/api/auth", router);

app.use(errorMiddleware)

const PORT = 5000;

connectDb().then(() => {
  app.listen(PORT, () => {
    console.log(`server is running at : ${PORT}`);
  });
});
