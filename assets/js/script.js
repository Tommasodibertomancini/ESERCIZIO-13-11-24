const frmList = document.getElementById('myList');
const newTask = document.getElementById('newTask');
const btnAdd = document.getElementById('btnAdd');
const taskList = document.getElementById('taskList');
const listItems = [];

btnAdd.addEventListener('click', function (e) {
	e.preventDefault();
	let myconfirm = confirm('Sei sicuro?');
	if (!myconfirm) return;
	if (!checkInput()) return;
	popolateArray();
	printList();
	frmList.reset();
});

function checkInput() {
	if (newTask.value === '') {
		alert('Aggiungi un task');
		return false;
	} else {
		return true;
	}
}

function popolateArray() {
	listItems.push(newTask.value);
}

function printList() {
	taskList.innerHTML = '';
	for (let i = 0; i < listItems.length; i++) {
		let newLi = document.createElement('li');
		newLi.innerText = listItems[i];
		let btnDelete = document.createElement('button');
		btnDelete.setAttribute('type', 'button');
		btnDelete.setAttribute('onclick', `deleteItem(${i})`);
		btnDelete.innerText = '❌';
		newLi.appendChild(btnDelete);
		taskList.appendChild(newLi);
        btnDelete.classList.add('buttonTwo')
	}
}

function deleteItem(index) {
	listItems.splice(index, 1);
	printList();
}

