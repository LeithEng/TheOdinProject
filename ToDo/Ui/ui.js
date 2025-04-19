import { createProject, createTodoInProject, getTodosFromProject, getAllProjects, removeTodoFromProject } from '../Logic/applogic.js';

function renderProjects() {
  const projectList = document.getElementById('project-list');
  projectList.innerHTML = '';

  const projects = getAllProjects();

  projects.forEach((project, index) => {
    const projectContainer = document.createElement('div');
    projectContainer.classList.add('project-container');
    projectContainer.style.display = 'flex';
    projectContainer.style.justifyContent = 'space-between';
    projectContainer.style.alignItems = 'center';
    projectContainer.style.marginBottom = '10px';
    projectContainer.style.padding = '8px';
    projectContainer.style.border = '1px solid #ccc';
    projectContainer.style.borderRadius = '6px';

    const projectElement = document.createElement('span');
    projectElement.textContent = project.name;
    projectElement.classList.add('project');
    projectElement.setAttribute('data-id', index);
    projectElement.style.cursor = 'pointer';

    const addTodoButton = document.createElement('button');
    addTodoButton.textContent = 'Add Todo';
    addTodoButton.classList.add('add-todo-btn');
    addTodoButton.style.padding = '5px 10px';
    addTodoButton.style.backgroundColor = '#007bff';
    addTodoButton.style.color = 'white';
    addTodoButton.style.border = 'none';
    addTodoButton.style.borderRadius = '4px';
    addTodoButton.style.cursor = 'pointer';

    addTodoButton.addEventListener('click', (e) => {
      e.stopPropagation();
      handleAddTodoToProject(e, project);
    });

    projectContainer.appendChild(projectElement);
    projectContainer.appendChild(addTodoButton);

    projectList.appendChild(projectContainer);
  });
}

function renderTodos(project) {
  const todoList = document.getElementById('todo-list');
  todoList.innerHTML = '';

  const todos = getTodosFromProject(project);

  todos.forEach(todo => {
    const todoElement = document.createElement('div');
    todoElement.textContent = `${todo.title} - Due: ${todo.dueDate} - Priority: ${todo.priority}`;
    todoElement.classList.add('todo');
    todoElement.setAttribute('data-id', todo.id);
    todoElement.addEventListener('click', () => renderTodoDetails(todo));

    todoList.appendChild(todoElement);
  });
}

function renderTodoDetails(todo) {
  const todoDetails = document.getElementById('todo-details');
  todoDetails.innerHTML = `
    <h3>${todo.title}</h3>
    <p>${todo.description}</p>
    <p>Due: ${todo.dueDate}</p>
    <p>Priority: ${todo.priority}</p>
    <p>Status: ${todo.status}</p>
    <button onclick="markTodoComplete(${todo.id})">Mark as Complete</button>
    <button onclick="deleteTodo(${todo.id})">Delete</button>
  `;
}

function handleCreateProject() {
  const projectName = prompt('Enter project name:');
  if (projectName) {
    createProject(projectName);
    renderProjects();
  }
}

function handleCreateTodo() {
  const title = prompt('Enter todo title:');
  const description = prompt('Enter todo description:');
  const dueDate = prompt('Enter due date:');
  const priority = prompt('Enter priority:');

  const currentProject = getAllProjects()[0];

  if (currentProject) {
    createTodoInProject(currentProject, title, description, dueDate, priority);
    renderTodos(currentProject);
  }
}

function markTodoComplete(todoId) {
  const todos = getAllProjects()[0].getTodos();
  const todo = todos.find(t => t.id === todoId);
  if (todo) {
    todo.markComplete();
    renderTodos(getAllProjects()[0]);
  }
}

function deleteTodo(todoId) {
  const project = getAllProjects()[0];
  removeTodoFromProject(project, todoId);
  renderTodos(project);
}

function handleAddTodoToProject(event, project) {
  const title = prompt('Enter todo title:');
  const description = prompt('Enter todo description:');
  const dueDate = prompt('Enter due date:');
  const priority = prompt('Enter priority (low, medium, high):');

  if (title && description && dueDate && priority) {
    createTodoInProject(project, title, description, dueDate, priority);
    renderTodos(project);
  }
}

export { renderProjects, renderTodos, handleCreateProject, handleCreateTodo, renderTodoDetails, markTodoComplete, deleteTodo, handleAddTodoToProject };
