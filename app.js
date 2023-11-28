const listElement = document.querySelector('ul');
const inputElement = document.querySelector('input');
const buttonElement = document.querySelector('button');

const tarefas = JSON.parse(localStorage.getItem('list_tarefas')) || []

function mostraTarefas() {
  listElement.innerHTML = '';

  for (item of tarefas) {
    const itemList = document.createElement('li');
    const itemText = document.createTextNode(item);

    itemList.setAttribute('class', 'mdl-list__item');

    const linkElement = document.createElement('button');
    linkElement.setAttribute('class', 'material-icons');
    linkElement.addEventListener('click', function() {
      removeTarefa(tarefas.indexOf(item));
    });

    const linkText = document.createTextNode('delete');
    linkElement.appendChild(linkText);

    itemList.appendChild(itemText);
    itemList.appendChild(linkElement);

    listElement.appendChild(itemList);
  }
}

function addTarefa() {
  const tarefa = inputElement.value;

  tarefas.push(tarefa);

  inputElement.value = '';
  mostraTarefas();
  salvarNoLocalStorage();
}

buttonElement.addEventListener('click', addTarefa);

function removeTarefa(pos) {
  console.log('Removendo tarefa na posição:', pos);
  tarefas.splice(pos, 1);
  mostraTarefas();
  salvarNoLocalStorage();
}
  
function salvarNoLocalStorage() {
  localStorage.setItem('list_tarefas', JSON.stringify(tarefas));
}

mostraTarefas();

