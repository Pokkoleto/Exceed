const express = require("express")
const todoRouter = require("./routers/todosRouter")
const authRouter = require("./routers/authRouter")

const cors = require("cors")

const app = express()

app.use(cors())
app.use(express.json())
app.use("/", todoRouter)
app.use("/", authRouter)

app.listen(4000, () => console.log("Listen to port 4000"))
