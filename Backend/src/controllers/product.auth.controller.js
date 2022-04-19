const express = require("express");

const router = express.Router();

const Product = require("../models/product.auth.model");
const authenticate = require("../middlewares/authenticate");

router.post("", authenticate, async (req, res) => {
  req.body.user_id = req.userID;
  try {
    const product = await Product.create(req.body);

    return res.status(200).send(product);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
});

module.exports = router;
