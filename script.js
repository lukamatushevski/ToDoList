// Select elements
const todoInput = document.getElementById('todoInput');
const addBtn = document.getElementById('addBtn');
const todoList = document.getElementById('todoList');

// Add a new task
addBtn.addEventListener('click', function() {
    const taskText = todoInput.value.trim();

    if (taskText !== "") {
        const listItem = document.createElement('li');

        const task = document.createElement('span');
        task.textContent = taskText;
        task.addEventListener('click', function() {
            task.parentNode.classList.toggle('completed');
        });

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.classList.add('deleteBtn');
        deleteBtn.addEventListener('click', function() {
            todoList.removeChild(listItem);
        });

        listItem.appendChild(task);
        listItem.appendChild(deleteBtn);
        todoList.appendChild(listItem);

        // Clear the input field after adding
        todoInput.value = "";
    }
});
