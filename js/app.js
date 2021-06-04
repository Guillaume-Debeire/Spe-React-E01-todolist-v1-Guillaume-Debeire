/**
 * Todolist
 */
const app = {
    tasks: [
        {
            title: 'Faire une todolist en js',
            done: true,
        },
        {
            title: 'Faire une todolist avec React',
            done: false,
        },
        {
            title: 'Coder Facebook',
            done: false,
        },
    ],
    init: function() {
        app.initElements();
        // Créer le formulaire
        app.createForm();
        // Créer le compteur
        app.createCounter();
        // Créer la liste
        app.createList();
    },
    // mémoriser en propriété de app des elements auquels je vais accéder un peu partoutézeg 
    initElements: function() {
        app.todoElement = document.getElementById('todo');
    },
    // responsable de la structure du form
    createForm: function() {
        // On créé l'élément
        const formElement = document.createElement('form');
        // Configurer l'élément
        formElement.className = 'form';
        // Je place mon écouteur d'évenement
        formElement.addEventListener('submit', app.handleFormSubmit);
        // formElement.setAttribute('class', 'form');
        // formElement.classList.add('form');
        // ajouter un enfant dans le parent
        app.todoElement.appendChild(formElement);
        // création de l'input
        app.inputElement = document.createElement('input');
        app.inputElement.className = 'form-field';
        app.inputElement.setAttribute('type', 'text');
        app.inputElement.setAttribute('placeholder', 'Ajouter une tâche');
        formElement.appendChild(app.inputElement);
    },
    // responsable de la structure du compteur
    createCounter: function() {
        const h1element = document.createElement('h1');
        h1element.className = 'counter';
        h1element.textContent = '2 tâches en cours';
        app.todoElement.appendChild(h1element);
    },
    createList: function () {
        // On créé l'élément
        app.listElement = document.createElement('ul');
        // Configurer l'élément
        app.listElement.className = 'list';
        app.todoElement.appendChild(app.listElement);
        // for (let i = 0; i < 3; i++) {
        //     app.createListItem(app.listElement, app.tasks[i].title);
        // }
        app.tasks.forEach((currentTask) => {
            app.createListItem(app.listElement, currentTask)
        })
    },
    // reponsable de la structure d'un élément de la liste
    createListItem: function (parent, task) {
        const liElement = document.createElement('li');
        parent.appendChild(liElement);
        const labelElement = document.createElement('label');
        labelElement.className = 'list-item';
        labelElement.textContent = task.title;
        liElement.appendChild(labelElement);
        const checkboxElement = document.createElement('input');
        checkboxElement.type = 'checkbox';
        checkboxElement.addEventListener('change', () => {
            // https://developer.mozilla.org/fr/docs/Web/API/Element/classList
            // toggle ajoute la classe si elle n'est pas présente et la supprime si elle est présente.
            labelElement.classList.toggle('list-item--off');
        });
        labelElement.prepend(checkboxElement);
        if (task.done) {
            labelElement.classList.add('list-item--off');
            checkboxElement.checked = true;
        }
    },
    // responsabilité de décrire quoi faire au submit
    handleFormSubmit: function (event) {
        // j'empêche le comportement par défaut
        event.preventDefault();
        // créer un nouveau li
        app.createListItem(app.listElement, {
            title: app.inputElement.value,
            done: false,
        });
        // vider le champ
        app.inputElement.value = '';
        // incrémenter le compteur
    }
};


// Chargement du DOM
document.addEventListener('DOMContentLoaded', app.init);

// var formElement = document.createElement('form');
// var input = document.createElement('input');
// var ul = document.createElement('ul');