let todoList = [];

// Load from localStorage on page load
if(localStorage.getItem('todos')){
  todoList = JSON.parse(localStorage.getItem('todos'));
}
displayItems();

function addTodo(){
  let input = document.querySelector('#text');
  let dateInput = document.querySelector('#date');
  let inputValue = input.value.trim();
  let dateValue = dateInput.value;

  if(!inputValue){
    alert("Todo cannot be empty!");
    return;
  }

  todoList.push({item: inputValue, duedate: dateValue, completed: false});
  input.value = '';
  dateInput.value = '';
  saveAndDisplay();
}

function displayItems(){
  let container = document.querySelector('.todo-container');
  container.innerHTML = '';

  todoList.forEach((todo, i) => {
    const todoRow = document.createElement('div');
    todoRow.classList.add('todo-row');

    // Todo text
    const itemSpan = document.createElement('span');
    itemSpan.textContent = todo.item;
    if(todo.completed) itemSpan.classList.add('completed-text');

    // Due date
    const dateSpan = document.createElement('span');
    dateSpan.textContent = todo.duedate;

    // Complete/Uncomplete button
    const completeBtn = document.createElement('button');
    completeBtn.textContent = todo.completed ? 'Uncomplete' : 'Complete';
    completeBtn.className = 'complete';
    completeBtn.onclick = () => {
      todo.completed = !todo.completed;
      alert(`"${todo.item}" marked as ${todo.completed ? 'completed ✅' : 'uncompleted 🔄'}`);
      saveAndDisplay();
    }

    // Edit button (only show if not completed)
    const editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.className = 'edit';
    editBtn.style.display = todo.completed ? 'none' : 'inline-block';
    editBtn.onclick = () => {
      let newItem = prompt("Edit todo:", todo.item);
      let newDate = prompt("Edit due date:", todo.duedate);
      if(newItem && newItem.trim() !== ''){
        todo.item = newItem.trim();
        todo.duedate = newDate;
        alert("Todo updated successfully ✏️");
        saveAndDisplay();
      }
    }

    // Delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.className = 'delete';
    deleteBtn.onclick = () => {
      if(confirm(`Are you sure you want to delete "${todo.item}"? ❌`)){
        todoList.splice(i, 1);
        saveAndDisplay();
      }
    }

    // Append all elements to the row
    todoRow.append(itemSpan, dateSpan, completeBtn, editBtn, deleteBtn);
    container.appendChild(todoRow);
  });
}

// Save todos to localStorage and refresh display
function saveAndDisplay(){
  localStorage.setItem('todos', JSON.stringify(todoList));
  displayItems();
}
