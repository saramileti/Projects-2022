//start with to do form
const addForm = document.querySelector('.add');
const list = document.querySelector('.todos')
const search = document.querySelector('.search input');

const generateTemplate = todo => {
    const html = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${todo}</span>
        <i class="far fa-trash-alt delete"></i>
    </li>
    `;

    //to insert new todo in ul.
    list.innerHTML += html;
};

addForm.addEventListener('submit', e => {
    e.preventDefault();
    //get what users type
    // to clear all whitespaces
    const todo = addForm.add.value.trim();

    //check if user has type something
    if (todo.length) {
        generateTemplate(todo);
        //reset all input fields
        addForm.reset();
    }; 
});

//delete to todos
list.addEventListener('click', e => {
    if (e.target.classList.contains('delete')) {
        e.target.parentElement.remove();        
    }
});

const filterTodos = (term) => {

    Array.from(list.children)
    .filter((todo) => !todo.textContent.toLowerCase().includes(term))
    .forEach((todo) => todo.classList.add('filtered'));

    Array.from(list.children)
    .filter((todo) => todo.textContent.toLowerCase().includes(term))
    .forEach((todo) => todo.classList.remove('filtered'));
};

//keyup event
search.addEventListener('keyup', () => {
    const term = search.value.trim().toLowerCase();
    //call func every time user press a key
    filterTodos(term);
});