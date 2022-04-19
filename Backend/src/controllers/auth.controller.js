const User = require("../models/user.auth.model");
require("dotenv").config();
var jwt = require("jsonwebtoken");

const newToken = (user) => {
  return jwt.sign({ user }, process.env.seceretKey);
};

const register = async (req, res) => {
  try {
    let user = await User.findOne({ email: req.body.email });

    if (user) {
      return res.status(500).send({ message: "This Email is not available" });
    }

    user = await User.create(req.body);

    const token = newToken(user);

    return res.status(200).send({ user, token });

    return res.status(200).send("Register");
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const login = async (req, res) => {
  try {
    // checking the mailid
    let user = await User.findOne({ email: req.body.email });

    if (!user) {
      return res.status(500).send({ message: "This Email is not available" });
    }

    // checking password
    const match = user.checkPassword(req.body.password);

    if (!match) {
      return res.status(500).send({ message: "This Email is not available" });
    }

    // if password is matched
    const token = newToken(user);

    return res.status(200).send({ user, token });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

module.exports = { register, login };
