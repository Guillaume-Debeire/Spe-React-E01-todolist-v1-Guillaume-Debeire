/**
 * Todolist
 */

const app = {
    // je prépare une donnée brute qui représente l'état de mon application, la source de vérité qui détermine ce qui sera affiché dans l'application
    state: [
        // {
        //     title: 'Faire une todolist en js',
        //     done: true,
        // },
    ],
    // décrit comment créer l'interface utilisateur
    init: function() {
        app.initElements();
        // vider l'interface
        app.clean();
        // Créer le formulaire
        app.createForm();
        // Créer le compteur
        app.createCounter();
        // Créer la liste
        app.createList();
    },
    // supprime ce qu'il y a dans l'UI
    clean: function() {
        app.todoElement.innerHTML = '';
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
        app.h1element = document.createElement('h1');
        app.h1element.className = 'counter';
        app.setCounterValue();
        app.todoElement.appendChild(app.h1element);
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
        app.state.forEach((currentTask) => {
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
           task.done = !task.done;
           app.init();
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
        // dorénavant, lorsque j'ai besoin de modifier ce qui s'affiche dans l'application, je vais modifier l'état de l'application dans un premier temps, c'est ma source de vérité, c'est de là que doit partir la représentation de mon application
        app.state.push({
            title: app.inputElement.value,
            done: false,
        });
        // après modification de l'état, je regénère l'interface
        app.init();
        // vider le champ
        app.inputElement.value = '';
    },
    // change la valeur affichée dans le counter
    setCounterValue: function() {
        const undoneTasks = app.state.filter((task) => !task.done);
        const counter = undoneTasks.length;
        console.log(counter)
        if (counter === 0) {
            app.h1element.textContent = `Aucune tâche en cours`
        } else if (counter === 1) {
            app.h1element.textContent = `Une tâche en cours`
        } else {
            app.h1element.textContent = `${counter} tâches en cours`
        }
    },
};


// Chargement du DOM
document.addEventListener('DOMContentLoaded', app.init);

// var formElement = document.createElement('form');
// var input = document.createElement('input');
// var ul = document.createElement('ul');