/**
 * Todolist
 */
const app = {
    
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
        // formElement.setAttribute('class', 'form');
        // formElement.classList.add('form');
        // ajouter un enfant dans le parent
        app.todoElement.appendChild(formElement);
        // création de l'input
        const inputElement = document.createElement('input');
        inputElement.className = 'form-field';
        inputElement.setAttribute('type', 'text');
        inputElement.setAttribute('placeholder', 'Ajouter une tâche');
        formElement.appendChild(inputElement);
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
        const listElement = document.createElement('ul');
        // Configurer l'élément
        listElement.className = 'list';
        app.todoElement.appendChild(listElement);
        for (let i = 0; i < 3; i++) {
            app.createListItem(listElement);
        }
    },
    // reponsable de la structure d'un élément de la liste
    createListItem: function (parent) {
        const liElement = document.createElement('li');
        parent.appendChild(liElement);
    },
};


// Chargement du DOM
document.addEventListener('DOMContentLoaded', app.init);

// var formElement = document.createElement('form');
// var input = document.createElement('input');
// var ul = document.createElement('ul');