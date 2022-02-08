const express = require('express')
const Todo = require('../models/todo')

const router = express.Router()

router.get('/todos', async (req, res) => {
  await Todo.sync()
  const todo = await Todo.findAll()
  res.status(200).json(todo)
})

router.post('/todos', async (req, res) => {
  console.log(req.body)
  await Todo.sync()
  try {
    const todo = await Todo.create(req.body)
    res
      .status(201)
      .json({ message: 'Todo added successfully', todo: todo.dataValues })
  } catch (error) {
    res.status(400).json({
      message: 'Failed to add todo',
      errors: error.errors.map((e) => e.message)
    })
  }
})

router.delete('/todos/:id', async (req, res) => {
  await Todo.sync()
  try {
    const result = await Todo.destroy({
      where: {
        id: req.params.id
      }
    })
    if (!result) throw result
    res.status(200).json({ message: 'Deleted todo successfully' })
  } catch (error) {
    res.status(404).json({ message: 'Todo not found' })
  }
})

router.patch('/todos/:id', async (req, res) => {
  await Todo.sync()
  try {
    const result = await Todo.update(
      { completed: req.body.completed },
      {
        where: {
          id: req.params.id
        }
      }
    )
    if (!result[0]) throw result[0]
    res.status(200).json({ message: 'Toggle todo successfully' })
  } catch (error) {
    res.status(404).json({ message: 'Todo not found' })
  }
})

router.get('/clear', async (req, res) => {
  await Todo.drop()
  res.json({ message: 'Dropped todos table' })
})

module.exports = router
