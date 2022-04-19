const express = require("express");
const connect = require("./configs/db");
const productController = require("./controllers/product.controller");
const { body, validationResult } = require("express-validator");
const { register, login } = require("./controllers/auth.controller");
const passport = require("./configs/google.auth");
const userController = require("./controllers/user.controller");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());
app.use("/products", productController);
app.use("/users", userController);

app.post("/register", register);
app.post("/login", login);

// google auth routes
app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["email", "profile"] })
);

app.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    successRedirect: "http://127.0.0.1:5500/products.html",
    failureRedirect: "/auth/google/failure",
  })
);

app.get("/auth/google/success", (req, res) => {
  return res.send({ message: "logged in" });
});
passport.serializeUser(function (user, done) {
  return done(null, user);
});
passport.deserializeUser(function (user, done) {
  return done(null, user);
});
app.get("", async (req, res) => {
  try {
    return res.send("Server is live now");
  } catch (error) {
    return res.send(error.message);
  }
});

const port = process.env.PORT || 9999;
app.listen(port, async () => {
  try {
    await connect();
    console.log("Listening the port number 9999");
  } catch (error) {
    console.log(error.message);
  }
});
