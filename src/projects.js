import ToDo from './todos';
import Storage from './storage';

export default class Project {
  static projects = [];

  constructor(name) {
    this.name = name;
    this.toDoList = [];
  }

  static addProject(input) {
    const name = input.value;

    if (name === '') {
      alert('Project name cannot be empty.');
      return;
    }

    const existingProject = this.projects.find((project) => project.name === name);
    if (existingProject) {
      alert('Project with the same name already exists.');
      return;
    }

    const project = new Project(name);
    this.projects.push(project);
  }

  static deleteProject(name) {
    this.projects = this.projects.filter((project) => project.name !== name);
  }

  static getProjectByName(projectName) {
    return this.projects.find((project) => project.name === projectName);
  }

  addToDo(form) {
    const {
      title, dueDate,
    } = form.elements;
    const todo = new ToDo(title.value, dueDate.value);
    this.toDoList.push(todo);
    return todo;
  }

  deleteToDo(toDoTitle) {
    this.toDoList = this.toDoList.filter((toDo) => toDo.title !== toDoTitle);
  }

  getToDoByTitle(todoTitle) {
    return this.toDoList.find((todo) => todo.title === todoTitle);
  }
}

Project.projects.push(new Project('Default'));
