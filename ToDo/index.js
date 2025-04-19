import { createProject, createTodoInProject, getAllProjects, getTodosFromProject } from './Logic/applogic.js';
import { renderProjects, renderTodos, handleCreateProject, handleCreateTodo, renderTodoDetails, markTodoComplete, deleteTodo, handleAddTodoToProject } from './Ui/ui.js';

document.addEventListener('DOMContentLoaded', () => {
  renderProjects();

  document.getElementById('create-project-btn').addEventListener('click', () => {
    const projectName = document.getElementById('project-name-input').value;
    if (projectName) {
      createProject(projectName);
      renderProjects();
    }
  });

  document.getElementById('create-todo-btn').addEventListener('click', () => {
    const todoTitle = document.getElementById('todo-title-input').value;
    const todoDescription = document.getElementById('todo-description-input').value;
    const todoDueDate = document.getElementById('todo-due-date-input').value;
    const todoPriority = document.getElementById('todo-priority-input').value;

    const selectedProject = getAllProjects()[0];

    if (todoTitle && selectedProject) {
      createTodoInProject(selectedProject, todoTitle, todoDescription, todoDueDate, todoPriority);
      renderTodos(selectedProject);
    }
  });

  document.getElementById('project-list').addEventListener('click', (e) => {
    if (e.target && e.target.matches('.project')) {
      const projectId = e.target.getAttribute('data-id');
      const project = getAllProjects()[projectId];
      renderTodos(project);
    }
  });

  document.getElementById('todo-list').addEventListener('click', (e) => {
    if (e.target && e.target.matches('.todo')) {
      const todoId = e.target.getAttribute('data-id');
      const selectedProject = getAllProjects()[0];
      const selectedTodo = selectedProject.getTodos().find(todo => todo.id === parseInt(todoId));
      renderTodoDetails(selectedTodo);
    }
  });
});
