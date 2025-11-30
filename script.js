// Ensure the script runs only after the HTML document has fully loaded
document.addEventListener('DOMContentLoaded', () => {

    // Select DOM elements
    const addButton = document.getElementById('add-task-btn'); // "Add Task" button
    const taskInput = document.getElementById('task-input');   // Input field for entering tasks
    const taskList = document.getElementById('task-list');     // <ul> where tasks will appear

    // In-memory array holding tasks (strings)
    let tasks = [];

    // Save the current tasks array to localStorage
    function saveTasks() {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    // Render the tasks array into the DOM
    function renderTasks() {
        // Clear the current list
        taskList.innerHTML = '';

        // Create <li> for each task and attach remove handlers
        tasks.forEach((taskText, index) => {
            const li = document.createElement('li');

            // Use a span for the text so we can separate text from the button
            const span = document.createElement('span');
            span.textContent = taskText;
            li.appendChild(span);

            // Create remove button
            const removeBtn = document.createElement('button');
            removeBtn.textContent = 'Remove';
            removeBtn.classList.add('remove-btn');

            // When clicked, remove this task from the tasks array, save, and re-render
            removeBtn.addEventListener('click', () => {
                tasks.splice(index, 1); // remove the task at this index
                saveTasks();
                renderTasks(); // re-render to update indexes and DOM
            });

            // Append button to list item, then li to the ul
            li.appendChild(removeBtn);
            taskList.appendChild(li);
        });
    }

    // Load tasks from localStorage into the tasks array and render them
    function loadTasks() {
        const stored = localStorage.getItem('tasks');
        if (stored) {
            try {
                const parsed = JSON.parse(stored);
                if (Array.isArray(parsed)) {
                    tasks = parsed;
                } else {
                    tasks = [];
                }
            } catch (e) {
                // If parsing failed, reset to empty array
                tasks = [];
            }
        } else {
            tasks = [];
        }
        renderTasks();
    }

    /**
     * Adds a task to the array and updates storage/DOM.
     * @param {string} taskText - the text of the task to add
     * @param {boolean} save - whether to save to localStorage (default true)
     */
    function addTask(taskText = null, save = true) {
        // If taskText is not provided, read from the input field
        const text = (taskText === null) ? taskInput.value.trim() : String(taskText).trim();

        // Validate input
        if (text === '') {
            if (taskText === null) { // only alert when user attempted to add via UI
                alert('Please enter a task');
            }
            return;
        }

        // Add to in-memory array
        tasks.push(text);

        // Save and re-render
        if (save) {
            saveTasks();
        }
        renderTasks();

        // Clear the input if input was the source
        if (taskText === null) {
            taskInput.value = '';
        }
    }

    // Event listener for clicking the "Add Task" button
    addButton.addEventListener('click', () => addTask(null, true));

    // Event listener for pressing Enter inside the input field
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask(null, true);
        }
    });

    // Initialize: load tasks from localStorage and render them
    loadTasks();

});
