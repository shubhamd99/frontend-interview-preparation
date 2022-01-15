const inputSearch = document.getElementById('search-input');
const titleInput = document.getElementById('title_input');
const descInput = document.getElementById('description_input');

const createBtn = document.getElementById('create-btn');

const todoListView = document.getElementById('todo_list');

const selectedColor = 'purple';

createBtn.addEventListener('click', () => {
    const div = document.createElement('div');
    div.className = 'desc-box';
    div.style.backgroundColor = selectedColor;

    const h4 = document.createElement('h4');
    h4.innerText = titleInput.value || ' ';

    const p = document.createElement('p');
    p.innerText = descInput.value || ' ';

    div.appendChild(h4);
    div.appendChild(p);

    todoListView.appendChild(div);

    titleInput.value = '';
    descInput.value = '';
});