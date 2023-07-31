const express = require("express");
const { authentication } = require("../middlewares/authentication");
const { authorization } = require("../middlewares/authorization");
const {
  createUser,
  getUser,
  updateUser,
} = require("../controllers/user.controller");
const { validation } = require("../middlewares/validation");

const router = express.Router();

router
  .post("/create", validation, authentication, authorization, createUser)
  .get("/display", getUser)
  .patch("/update/:id", validation, updateUser);

module.exports = {
  userRouter: router,
};
