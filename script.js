// Ensure the script runs only after the HTML document has fully loaded
document.addEventListener('DOMContentLoaded', () => {

    // Select DOM elements
    const addButton = document.getElementById('add-task-btn'); // "Add Task" button
    const taskInput = document.getElementById('task-input');   // Input field for entering tasks
    const taskList = document.getElementById('task-list');     // <ul> where tasks will appear

    // Function to add a new task
    function addTask() {

        // Retrieve and trim the input value
        const taskText = taskInput.value.trim();

        // Check if user entered an empty string
        if (taskText === "") {
            alert("Please enter a task");
            return;
        }

        // Create a new <li> element to represent the task
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create a "Remove" button for deleting this task
        const removeBtn = document.createElement('button');
        removeBtn.textContent = "Remove";
        removeBtn.className = "remove-btn";

        // When "Remove" is clicked, delete the task (li)
        removeBtn.onclick = () => {
            taskList.removeChild(li);
        };

        // Add the remove button inside the <li>
        li.appendChild(removeBtn);

        // Add the <li> to the task list
        taskList.appendChild(li);

        // Clear the input field after adding the task
        taskInput.value = "";
    }

    // Event listener for clicking the "Add Task" button
    addButton.addEventListener('click', addTask);

    // Event listener for pressing Enter inside the input field
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === "Enter") {
            addTask();
        }
    });

});
