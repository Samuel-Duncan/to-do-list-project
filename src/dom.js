import Project from './projects';

const ADD_TODO_BUTTON = document.getElementById('add-todo-button');
const TODO_FORM = document.getElementById('todo-form');
const TODO_DISPLAY_AREA = document.querySelector('.todo-display-area');

export default class DOM {
  static loadPage() {
    this.handleProjects();
  }

  static resetForms(button, form) {
    button.addEventListener('click', () => {
      form.classList.toggle('hide-display');
      form.reset();
    });
  }

  static handleProjects() {
    const PROJECT_DISPLAY_AREA = document.querySelector('.projects-container');
    const NEW_PROJECT_BUTTON = document.getElementById('new-project-button');
    const PROJECT_FORM = document.getElementById('project-form');
    const projectNameInput = document.getElementById('name');
    const PROJECT_SUBMIT_BUTTON = document.getElementById('submit-project');
    const PROJECT_CANCEL_BUTTON = document.getElementById('cancel-project');
    const PROJECT_DELETE_BUTTON = document.querySelectorAll('#delete-project-button');
    const PROJECT_CONTENT = document.getElementById('v-pills-tabContent');

    this.resetForms(NEW_PROJECT_BUTTON, PROJECT_FORM);
    this.resetForms(PROJECT_CANCEL_BUTTON, PROJECT_FORM);

    function addProjectTab() {
      PROJECT_DISPLAY_AREA.innerHTML = '';
      PROJECT_CONTENT.innerHTML = '';
      Project.projects.forEach((project, index) => {
        const projectTab = document.createElement('button');

        // Set button attributes
        projectTab.classList.add('nav-link', 'mb-2');
        projectTab.id = `v-pills-${index}-tab`;
        projectTab.setAttribute('data-bs-toggle', 'pill');
        projectTab.setAttribute('data-bs-target', `#v-pills-${index}`);
        projectTab.type = 'button';
        projectTab.role = 'tab';
        projectTab.setAttribute('aria-controls', `v-pills-${index}`);
        projectTab.setAttribute('aria-selected', 'true');

        // Set button text
        projectTab.textContent = `${project.name}`;
        PROJECT_DISPLAY_AREA.appendChild(projectTab);

        // Create the div element
        const projectContent = document.createElement('div');

        // Set the class, ID, and attributes
        projectContent.classList.add('tab-pane', 'fade');
        projectContent.id = `v-pills-${index}`;
        projectContent.setAttribute('role', 'tabpanel');
        projectContent.setAttribute('aria-labelledby', `v-pills-${index}-tab`);
        projectContent.innerHTML = `<div class="d-flex justify-content-between">
        <button id="add-todo-button" class="btn btn-outline-primary">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"></path>
          </svg> Add To Do
        </button>
        <button id="delete-project-button" class="btn btn-outline-primary">Delete Project</button>
      </div>`;

        PROJECT_CONTENT.appendChild(projectContent);

        PROJECT_DELETE_BUTTON.forEach((button) => {
          button.addEventListener('click', () => {
            projectTab.remove();
            Project.deleteProject(index);
          });
        });
      });
    }

    PROJECT_FORM.addEventListener('submit', (e) => {
      e.preventDefault();
      Project.addProject(projectNameInput);
      addProjectTab();
      PROJECT_FORM.reset();
      PROJECT_FORM.classList.toggle('hide-display');
    });
  }
}
