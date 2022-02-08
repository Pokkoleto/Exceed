const express = require("express")
const User = require("../models/user")

const router = express.Router()

router.get("/allUser", async (_, res) => {
  await User.sync()
  const user = await User.findAll()
  res.status(200).json(user)
})

router.post("/register", async (req, res) => {
  console.log(req.body)

  await User.sync()
  try {
    const alreadyExist = await User.findOne({
      where: {
        email: req.body.email,
      },
    })
    console.log(alreadyExist)
    if (alreadyExist) throw alreadyExist
    const result = await User.create(req.body)
    const user = result.dataValues
    delete user.password
    res.status(201).json({ message: "register successfully", user })
  } catch {
    res.status(400).json({
      message: "already have this user",
    })
  }
})

router.post("/login", async (req, res) => {
  await User.sync()
  try {
    const result = await User.findOne({
      where: {
        email: req.body.email,
        password: req.body.password,
      },
    })
    const user = result.dataValues
    delete user.password
    res.status(201).json({ message: "login successfully", user })
  } catch (error) {
    res.status(400).json({
      message: "Failed to login wrong email or password",
    })
  }
})

module.exports = router
