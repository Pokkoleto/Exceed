const todoList = document.querySelector('.todo-list')
const todoForm = document.querySelector('.todo-form')
const todoInput = document.querySelector('.todo-input')

todoForm.addEventListener('submit',onAddTodo)

async function onAddTodo(e){
    e.preventDefault()

    if(!todoInput.value) return

    const response = await fetch('http://localhost:4000/todos', {
        method: 'POST',
        body: JSON.stringify({ title : todoInput.value }),
        headers: {
            'Content-Type': 'application/json'
        }
    })

    const data = await response.json()
    console.log(data)

    todoItem = createTodoItem(data.todo)

    todoList.appendChild(todoItem)
    todoInput.value=''
}

async function onTodoMarkAsComplete(e){
    const todoItem = e.target.parentNode
    const todoId = todoItem.dataset.todoId
    const completed = todoItem.classList.contains('completed')

    await fetch(`http://localhost:4000/todos/${todoId}`,{
        method:'PATCH',
        body: JSON.stringify( { completed : !completed } ),
        headers:{
            'Content-Type' : 'application/json'
        }
    })
    todoItem.classList.toggle('completed')
}

async function onDeleteTodo(e){
    const todoItem = e.target.parentNode
    const todoId = todoItem.dataset.todoId
    await fetch(`http://localhost:4000/todos/${todoId}`,{
        method:'DELETE'
    })
    todoItem.remove()
}

function createTodoCompletedButton(){
    const btnTodoCompleted = document.createElement('button')
    const icon = document.createElement('i')

    icon.classList.add('fas','fa-check')
    btnTodoCompleted.classList.add('btn-todo-completed')

    btnTodoCompleted.appendChild(icon)

    return btnTodoCompleted
}

function createTodoDeleteButton(){
    const btnTodoDelete = document.createElement('button')
    const icon = document.createElement('i')

    icon.classList.add('fas','fa-trash')
    btnTodoDelete.classList.add('btn-todo-delete')

    btnTodoDelete.appendChild(icon)

    return btnTodoDelete
}

function createTodoItem(todo){
    const todoItem = document.createElement('div')
    const todoTitle = document.createElement('p')
    const btnTodoCompleted = createTodoCompletedButton()
    const btnTodoDelete = createTodoDeleteButton()

    if(todo.completed) todoItem.classList.add('completed')
    todoItem.classList.add('todo-item')
    todoTitle.classList.add('todo-title')

    todoTitle.innerText = todo.title
    todoItem.dataset.todoId = todo.id

    todoItem.appendChild(todoTitle)
    todoItem.appendChild(btnTodoCompleted)
    todoItem.appendChild(btnTodoDelete)

    btnTodoCompleted.addEventListener('click', onTodoMarkAsComplete)
    btnTodoDelete.addEventListener('click', onDeleteTodo)

    return todoItem
}

async function getTodo(){
    const response = await fetch('http://localhost:4000/todos')
    const todos = await response.json()
    console.log(todos)
    return todos
}

function createTodoList(todos){
    todos.forEach(todo => {
        const todoItem = createTodoItem(todo)
        todoList.appendChild(todoItem)
    });
}

;(async () => {
    const todos = await getTodo()
    createTodoList(todos)
})()