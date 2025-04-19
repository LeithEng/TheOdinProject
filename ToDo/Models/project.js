import { Todo } from './todo.js';

class Project {
    constructor(name) {
      this.id = Date.now();
      this.name = name;
      this.todos = [];
    }
  
    addTodo(todo) {
      this.todos.push(todo);
    }
  
    removeTodo(todoId) {
      this.todos = this.todos.filter(todo => todo.id !== todoId);
    }
  
    getTodos() {
      return this.todos;
    }
  
    updateName(newName) {
      this.name = newName;
    }
  }
export { Project };
export default Project;