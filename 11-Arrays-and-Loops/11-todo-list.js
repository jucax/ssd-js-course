
const todoList = [];
renderTodoList();

// Render means to display something in the page
function renderTodoList() {
    let todoListHTML = '';

    // This technique is called Generating the HTMl
    for (let i = 0; i < todoList.length; i++) {
        const todo = todoList[i];
        const html = `<p>${todo}</p>`;
        // We need to generate a big HTML code
        todoListHTML += html;
    }
    console.log(todoListHTML);
    document.querySelector('.js-todo-list').innerHTML = 
    todoListHTML;
}


function addTodo() {
    const inputElement = document.querySelector('.js-name-input');
    const name = inputElement.value;
    
    todoList.push(name);
    console.log(todoList);

    // The text box clean the text after add it
    inputElement.value = '';
    renderTodoList();
}