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
