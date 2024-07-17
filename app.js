const toDo = document.getElementById('to-do-input');
const task = document.getElementsByClassName('tasks')[0];

toDo.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        addElement(toDo);
    }
})

const addElement = (toDo) => {
    if (toDo.value === '') {
        alert('the task should not be empty.')
    }
    else {
        const listItem = document.createElement('li')
        listItem.innerHTML = `<img src="./images/unchecked.png" class="checked-img">${toDo.value}<i class="fa-solid fa-trash"></i>`
        task.appendChild(listItem);
        toDo.value = '';
        saveData();
    }

}

task.addEventListener('click', function (event) {
    if (event.target && event.target.classList.contains('checked-img')) {
        const img = event.target;
        const listItem = img.parentElement;
        if (img.src.includes('unchecked.png')) {
            img.src = './images/checked.png';
            listItem.classList.add('completed');
        } else {
            img.src = './images/unchecked.png';
            listItem.classList.remove('completed');
        }

    }
    if (event.target && event.target.classList.contains('fa-solid')) {
        const listItem = event.target.parentElement;
        listItem.remove();
        saveData();
    }
});

function saveData() {
    localStorage.setItem('data', task.innerHTML);
}

function getData() {
    task.innerHTML = localStorage.getItem('data');
}

getData();