
let todos = [];

function addTodo() {
    const todoInput = document.getElementById('todo-input');
    const todoDate = document.getElementById('todo-date');
    
    console.log(todoInput.value);
    console.log(todoDate.value);
    if (todoInput.value.trim() === ''|| todoDate.value === '') 
        
        alert('Please enter a todo item and date');
        return;
     else {
       const newtodo = {
        Text: todoInput.value,
        Date: todoDate.value
       }
       todos.push(newtodo);
       console.log(todos);
        todoInput.value = '';
        todoDate.value = '';
       }
}

function displayTodos() {
    const todoList = document.getElementById('todo-list');
    todoList.innerHTML = '';    

    todos.forEach((todo, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${todo.Text} - ${todo.Date}`;
        todoList.appendChild(listItem);
    });
}

function deleteTodo(index) {
    todos.splice(index, 1);
    displayTodos();
}

function filterTodos() {
    const filterDate = document.getElementById('filter-date').value;
    const filteredTodos = todos.filter(todo => todo.Date === filterDate);
    const todoList = document.getElementById('todo-list');
    todoList.innerHTML = '';
    
    filteredTodos.forEach((todo, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${todo.Text} - ${todo.Date}`;
        todoList.appendChild(listItem);
    }); 
}