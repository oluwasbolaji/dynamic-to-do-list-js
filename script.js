// Wait until the HTML document is fully loaded
document.addEventListener('DOMContentLoaded', () => {

    // Select important DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a new task
    function addTask() {
        const taskText = taskInput.value.trim(); // Get input text and remove extra spaces

        // Prevent adding empty tasks
        if (taskText === '') {
            alert('Please enter a task!');
            return;
        }

        // ----- Task Creation and Removal -----

        // 1. Create a new list item for the task
        const li = document.createElement('li');
        li.textContent = taskText;

        // 2. Create a remove button for the task
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.className = 'remove-btn';

        // 3. Attach event to remove the task when clicked
        removeBtn.onclick = () => {
            taskList.removeChild(li);
        };

        // 4. Append remove button to the task
        li.appendChild(removeBtn);

        // 5. Append the task to the task list
        taskList.appendChild(li);

        // 6. Clear the input field for the next task
        taskInput.value = '';
    }

    // Add task when the "Add Task" button is clicked
    addButton.addEventListener('click', addTask);

    // Add task when the "Enter" key is pressed inside the input field
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') addTask();
    });
});
 