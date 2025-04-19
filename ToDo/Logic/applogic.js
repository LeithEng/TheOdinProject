import { Todo } from '../Models/todo.js';
import { Project } from '../Models/project.js';

let projects = [];

function createProject(projectName) {
  const newProject = new Project(projectName);
  console.log('Created Project:', newProject);
  projects.push(newProject);
  return newProject;
}

function createTodoInProject(project, title, description, dueDate, priority) {
  const newTodo = new Todo(title, description, dueDate, priority);
  console.log('Created Todo:', newTodo);
  project.addTodo(newTodo);
  return newTodo;
}

function removeTodoFromProject(project, todoId) {
  project.removeTodo(todoId);
}

function getTodosFromProject(project) {
  return project.getTodos();
}

function getAllProjects() {
  return projects;
}

export { createProject, createTodoInProject, removeTodoFromProject, getTodosFromProject, getAllProjects };
