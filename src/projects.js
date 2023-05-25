import ToDo from './todos';

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
    return project;
  }

  static deleteProject(index) {
    this.projects.splice(index, 1);
  }

  static getProjectByName(projectName) {
    return this.projects.find((project) => project.name === projectName);
  }

  addToDo(form) {
    const {
      title, description, dueDate, priority,
    } = form.elements;
    const todo = new ToDo(title.value, description.value, dueDate.value, priority.value);
    this.toDoList.push(todo);
    return todo;
  }

  deleteToDo(todoIndex) {
    this.toDoList.splice(todoIndex, 1);
  }

  getToDoByTitle(todoTitle) {
    return this.toDoList.find((todo) => todo.title === todoTitle);
  }
}

Project.projects.push(new Project('Default'));
