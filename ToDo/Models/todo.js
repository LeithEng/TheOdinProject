class Todo {
  constructor(title, description, dueDate, priority, notes = '', checklist = []) {
    this.id = Date.now();
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.notes = notes;
    this.checklist = checklist; 
    this.isComplete = false;
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }

  toggleComplete() {
    this.isComplete = !this.isComplete;
    this.updatedAt = new Date();
  }

  addChecklistItem(text) {
    this.checklist.push({ text, completed: false });
    this.updatedAt = new Date();
  }

  toggleChecklistItem(index) {
    if (this.checklist[index]) {
      this.checklist[index].completed = !this.checklist[index].completed;
      this.updatedAt = new Date();
    }
  }

  updateDetails(title, description, dueDate, priority, notes) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.notes = notes;
    this.updatedAt = new Date();
  }
}

export { Todo };