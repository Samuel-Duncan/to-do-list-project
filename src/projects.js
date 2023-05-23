import ToDo from './todos';
import { PROJECT_FORM, TODO_FORM } from './dom';

const projects = [];

class Project {
  constructor(name, dueDate) {
    this.name = name;
    this.dueDate = dueDate;
    this.toDoList = [];
  }

  addToDo() {
    const {
      title, description, dueDate, priority,
    } = TODO_FORM;
    const todo = new ToDo(title.value, description.value, dueDate.value, priority.value);
    this.toDoList.push(todo);
  }
}

function addProject() {
  const { name, dueDate } = PROJECT_FORM;
  const project = new Project(name.value, dueDate.value);
  projects.push(project);
}
