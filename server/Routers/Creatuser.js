const bodyParser = require("body-parser");
const express = require("express");
const router = express.Router();
const User_credential = require("../Models/User");

const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const jwtSecret = "ilovenehayouaremyheart!";

const jp = bodyParser.json();

//creatuser

router.post(
  "/creatuser",
  jp,

  body("name").isLength({ min: 4 }),
  body("email").isEmail(),
  body("password").isLength({ min: 5 }),

  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const salt = await bcrypt.genSalt(10);
    let hashpassword = await bcrypt.hash(req.body.password, salt);

    try {
      const response = await User_credential.create({
        name: req.body.name,
        email: req.body.email,
        password: hashpassword,
      });

      res.json({ response, success: true });
    } catch (error) {
      console.log({ error });
      res.json({ success: false });
    }
  }
);

// Loginuser

router.post(
  "/loginuser",
  jp,

  body("email").isEmail(),
  body("password").isLength({ min: 5 }),

  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    let email = req.body.email;
    try {
      let userdata = await User_credential.findOne({ email });
      if (!userdata) {
        return res
          .status(400)
          .json({ errors: "Enter your correct credentials" });
      }

      const pwdCompare = await bcrypt.compare(
        req.body.password,
        userdata.password
      );
      if (!pwdCompare) {
        return res
          .status(400)
          .json({ errors: "Enter your correct credentials" });
      }

      const data = {
        user: {
          id: userdata.id,
        },
      };
      const authToken = jwt.sign(data, jwtSecret);

      return res.cookie("token",authToken,{
        httpOnly:true,
        maxAge:1000*30*1
    }).json({ userdata, success: true, authToken: authToken });
    } catch (error) {
      console.log({ error });
    }
  }
);
module.exports = router;
