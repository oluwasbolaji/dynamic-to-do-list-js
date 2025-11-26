document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // This function runs whenever you add a new task
    function addTask() {
        const taskText = taskInput.value.trim(); // get input text and remove extra spaces

        if (taskText === '') {
            alert('Please enter a task!');
            return; // stop the function if input is empty
        }

        // <-- This is where your block goes -->
        // Create list item
        const li = document.createElement('li');
        li.textContent = taskText; // sets the text of the task

        // Create remove button
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.className = 'remove-btn';

        // Assign event to remove the task
        removeBtn.onclick = () => {
            taskList.removeChild(li); // removes the li from the ul
        };

        // Append remove button to the task
        li.appendChild(removeBtn);

        // Append the task to the task list
        taskList.appendChild(li);

        // Clear the input
        taskInput.value = '';
        // <-- End of your block -->
    }

    // Add task when clicking the button
    addButton.addEventListener('click', addTask);

    // Add task when pressing Enter
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') addTask();
    });
});
