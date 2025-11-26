// Wait until the HTML document is fully loaded
document.addEventListener('DOMContentLoaded', () => {

    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a new task
    function addTask() {
        const taskText = taskInput.value.trim(); // get input and remove spaces

        // If input is empty, alert the user
        if (taskText === '') {
            alert('Please enter a task!');
            return; // stop function
        }

        // ---- Task Creation and Removal ----

        // 1. Create a new list item
        const li = document.createElement('li');
        li.textContent = taskText;

        // 2. Create a remove button
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.className = 'remove-btn';

        // 3. Assign event to remove the task when button is clicked
        removeBtn.onclick = () => {
            taskList.removeChild(li);
        };

        // 4. Append remove button to the list item
        li.appendChild(removeBtn);

        // 5. Append list item to the task list
        taskList.appendChild(li);

        // 6. Clear the input field
        taskInput.value = '';
    }

    // Add task when clicking the button
    addButton.addEventListener('click', addTask);

    // Add task when pressing Enter in the input field
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') addTask();
    });
});
