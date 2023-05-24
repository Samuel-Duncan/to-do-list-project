// Dynamically create Todo objects
// - must contain title, description, dueDate, and priority (notes, checkList)
// Dynamically create Projects (separate lists of todos)
// Use date-fns in project
// Deal with storage
export default class ToDo {
  constructor(title, description, dueDate, priority) {
    if (!title) {
      throw new Error('Invalid input. Please provide all required fields.');
    }

    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.completed = false;
  }

  toggleComplete() {
    this.completed = !this.completed;
  }
}
