import Project from './projects';

const ADD_TODO_BUTTON = document.getElementById('add-todo-button');
const TODO_FORM = document.getElementById('todo-form');
const TODO_DISPLAY_AREA = document.querySelector('.todo-display-area');

export default class DOM {
  static loadPage() {
    this.displayProjects();
  }

  static hideForms(button, form) {
    button.addEventListener('click', () => {
      form.classList.toggle('hide-display');
      form.reset();
    });
  }

  static displayProjects() {
    const PROJECT_DISPLAY_AREA = document.querySelector('.projects-container');
    const NEW_PROJECT_BUTTON = document.getElementById('new-project-button');
    const PROJECT_FORM = document.getElementById('project-form');
    const projectNameInput = PROJECT_FORM.querySelector('input[name="name"]');
    const PROJECT_SUBMIT_BUTTON = document.getElementById('submit-project');
    const PROJECT_CANCEL_BUTTON = document.getElementById('cancel-project');

    this.hideForms(NEW_PROJECT_BUTTON, PROJECT_FORM);
    this.hideForms(PROJECT_CANCEL_BUTTON, PROJECT_FORM);

    PROJECT_FORM.addEventListener('submit', (e) => {
      e.preventDefault();
      Project.addProject(projectNameInput);
      console.log(Project.projects);
    });
  }
}
