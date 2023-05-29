import Project from './projects';

export default class DOM {
  static loadPage() {
    this.handleDisplay();
  }

  static resetForms(button, form) {
    button.addEventListener('click', () => {
      form.classList.toggle('hide-display');
      form.reset();
    });
  }

  static handleDisplay() {
    const PROJECT_DISPLAY_AREA = document.querySelector('.projects-container');
    const PROJECT_NEW_BUTTON = document.getElementById('new-project-button');
    const PROJECT_FORM = document.getElementById('project-form');
    const projectNameInput = document.getElementById('name');
    const PROJECT_SUBMIT_BUTTON = document.getElementById('submit-project');
    const PROJECT_CANCEL_BUTTON = document.getElementById('cancel-project');
    const PROJECT_CONTENT = document.getElementById('v-pills-tabContent');
    const PROJECT_DEFAULT = document.getElementById('v-pills-default-tab');
    const TODO_FORM = document.getElementById('todo-form');
    const TODO_DISPLAY_AREA = document.querySelector('.todo-display-area');
    const TODO_CANCEL_BUTTON = document.getElementById('cancel-todo');

    this.resetForms(PROJECT_NEW_BUTTON, PROJECT_FORM);
    this.resetForms(PROJECT_CANCEL_BUTTON, PROJECT_FORM);
    this.resetForms(TODO_CANCEL_BUTTON, TODO_FORM);

    function addProjectTabAndContent() {
      PROJECT_DISPLAY_AREA.innerHTML = '';
      PROJECT_CONTENT.innerHTML = '';

      Project.projects.forEach((project, index) => {
        // Create project tabs
        const projectTab = document.createElement('button');

        projectTab.classList.add('nav-link', 'mb-2');
        projectTab.id = `v-pills-${index}-tab`;
        projectTab.setAttribute('data-bs-toggle', 'pill');
        projectTab.setAttribute('data-bs-target', `#v-pills-${index}`);
        projectTab.type = 'button';
        projectTab.role = 'tab';
        projectTab.setAttribute('aria-controls', `v-pills-${index}`);
        projectTab.setAttribute('aria-selected', 'true');
        projectTab.textContent = `${project.name}`;
        PROJECT_DISPLAY_AREA.appendChild(projectTab);

        // Create project content
        const projectContent = document.createElement('div');

        projectContent.classList.add('tab-pane', 'fade');
        projectContent.id = `v-pills-${index}`;
        projectContent.setAttribute('role', 'tabpanel');
        projectContent.setAttribute('aria-labelledby', `v-pills-${index}-tab`);
        if (project.name === 'Default') {
          projectContent.innerHTML = `<div class="d-flex justify-content-between">
          <button id="add-todo-button${index}" class="btn btn-outline-primary add-todo-button">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"></path>
            </svg> Add To Do
          </button>
          </div>`;
        } else {
          projectContent.innerHTML = `<div class="d-flex justify-content-between">
          <button id="add-todo-button${index}" class="btn btn-outline-primary add-todo-button">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"></path>
            </svg> Add To Do
          </button>
          <button id="delete-project-button${index}" class="btn btn-outline-primary delete-project-button">Delete Project</button>
          </div>`;
        }
        PROJECT_CONTENT.appendChild(projectContent);

        // Add delete button functionality for each created tab
        if (project.name !== 'Default') {
          const PROJECT_DELETE_BUTTON = document.getElementById(`delete-project-button${index}`);
          PROJECT_DELETE_BUTTON.addEventListener('click', () => {
            Project.deleteProject(index);
            addProjectTabAndContent();
          });
        }

        // Handle ToDos
        const TODO_ADD_BUTTON = document.getElementById(`add-todo-button${index}`);
        TODO_ADD_BUTTON.addEventListener('click', () => {
          TODO_FORM.reset();
          TODO_FORM.classList.toggle('hide-display');
        });

        project.toDoList.forEach((todo, todoIndex) => {
          const toDoItem = document.createElement('div');
          toDoItem.classList.add('todo-item', 'mt-3', 'd-flex', 'flex-sm-column', 'flex-md-row', 'justify-content-between', 'align-items-center', 'flex-wrap');
          toDoItem.innerHTML = `<div class="d-flex flex-row">
          <div class="title mx-2">${todo.title}</div>
          </div>
          <div class="d-flex flex-row align-items-center">
          <div class="due-date mx-2">${todo.dueDate ? `Due date: ${todo.dueDate}` : ''}</div>
          <button id="todo-edit-button${index}-${todoIndex}" class="btn btn-outline-primary todo-edit-button mx-2">Edit</button>
          <button id="todo-delete-button${index}-${todoIndex}" class="btn btn-outline-primary todo-delete-button">Delete</button>
          </div>`;

          projectContent.appendChild(toDoItem);

          const TODO_DELETE_BUTTON = document.getElementById(`todo-delete-button${index}-${todoIndex}`);
          TODO_DELETE_BUTTON.addEventListener('click', () => {
            const projectName = document.querySelector('.projects-container .nav-link.active').textContent;
            const currentProject = Project.getProjectByName(projectName);

            currentProject.deleteToDo(todoIndex);
            addProjectTabAndContent();

            const currentProjectIndex = Project.projects.indexOf(currentProject);
            const currentProjectTab = document.getElementById(`v-pills-${currentProjectIndex}-tab`);
            const currentProjectContent = document.getElementById(`v-pills-${currentProjectIndex}`);

            currentProjectTab.setAttribute('aria-selected', 'true');
            currentProjectTab.classList.add('active');
            currentProjectContent.classList.add('show', 'active');
          });

          const TODO_EDIT_BUTTON = document.getElementById(`todo-edit-button${index}-${todoIndex}`);
          TODO_EDIT_BUTTON.addEventListener('click', () => {
            const currentProject = Project.projects[index];
            const currentTodo = currentProject.toDoList[todoIndex];

            const titleContainer = toDoItem.querySelector('.title');
            const todoTitleInput = document.createElement('input');
            todoTitleInput.value = currentTodo.title;
            todoTitleInput.classList.add('edit-input');

            // Replace the title container with the input element
            titleContainer.replaceWith(todoTitleInput);

            const saveButton = document.createElement('button');
            saveButton.id = `todo-save-button${index}-${todoIndex}`;
            saveButton.classList.add('btn', 'btn-outline-primary', 'todo-save-button', 'mx-2');
            saveButton.textContent = 'Save';

            const buttonContainer = document.createElement('div');
            buttonContainer.classList.add('d-flex', 'flex-row', 'align-items-center');
            buttonContainer.append(saveButton);

            const buttonsContainer = toDoItem.querySelector('.d-flex.flex-row.align-items-center');
            buttonsContainer.replaceWith(buttonContainer);

            saveButton.addEventListener('click', () => {
              const newTitle = todoTitleInput.value;

              currentTodo.title = newTitle;

              addProjectTabAndContent();

              const updatedProjectTab = document.getElementById(`v-pills-${index}-tab`);
              const updatedProjectContent = document.getElementById(`v-pills-${index}`);

              updatedProjectTab.setAttribute('aria-selected', 'true');
              updatedProjectTab.classList.add('active');
              updatedProjectContent.classList.add('show', 'active');
            });
          });
        });
      });
    }

    PROJECT_FORM.addEventListener('submit', (e) => {
      e.preventDefault();
      Project.addProject(projectNameInput);
      addProjectTabAndContent();
      PROJECT_FORM.reset();
      PROJECT_FORM.classList.toggle('hide-display');
      // Set most recently created tab as active
      const lastProjectIndex = Project.projects.length - 1;
      const lastProjectTab = document.getElementById(`v-pills-${lastProjectIndex}-tab`);
      const lastProjectContent = document.getElementById(`v-pills-${lastProjectIndex}`);

      lastProjectTab.setAttribute('aria-selected', 'true');
      lastProjectTab.classList.add('active');
      lastProjectContent.classList.add('show', 'active');
    });

    const DEFAULT_TODO_ADD_BUTTON = document.getElementById('add-todo-button');
    DEFAULT_TODO_ADD_BUTTON.addEventListener('click', () => {
      TODO_FORM.reset();
      TODO_FORM.classList.toggle('hide-display');
    });

    TODO_FORM.addEventListener('submit', (e) => {
      e.preventDefault();

      const projectName = document.querySelector('.projects-container .nav-link.active').textContent;
      const project = Project.getProjectByName(projectName);

      if (project) {
        project.addToDo(TODO_FORM);
        addProjectTabAndContent();
      }
      TODO_FORM.reset();
      TODO_FORM.classList.toggle('hide-display');
      const currentProjectIndex = Project.projects.indexOf(project);
      const currentProjectTab = document.getElementById(`v-pills-${currentProjectIndex}-tab`);
      const currentProjectContent = document.getElementById(`v-pills-${currentProjectIndex}`);

      currentProjectTab.setAttribute('aria-selected', 'true');
      currentProjectTab.classList.add('active');
      currentProjectContent.classList.add('show', 'active');
    });
  }
}
