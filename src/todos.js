// Dynamically create Todo objects
// - must contain title, description, dueDate, and priority (notes, checkList)
// Dynamically create Projects (separate lists of todos)
// Use date-fns in project
// Deal with storage
export default class ToDo {
  constructor(title, dueDate) {
    if (!title) {
      throw new Error('Invalid input. Please provide all required fields.');
    }

    this.title = title;
    this.dueDate = dueDate;
    this.completed = false;
  }

  toggleComplete() {
    this.completed = !this.completed;
  }
}
