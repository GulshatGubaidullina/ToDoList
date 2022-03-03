const tasks = [
    {
        title: 'dcddffdvvf',
        description: 'udududududuud'
    },
    {
        title: 'dcddffdvvf',
        description: 'udududududuud'
    },
];
outPutTasks();
let saveBtn = document.querySelector('.save-task');
saveBtn.addEventListener('click', () => {
    addTasks();
})

function addTasks() {
    let title = document.querySelector('.input-title');
    let description = document.querySelector('.input-description');
    createTasks(title.value, description.value);
}

function createTasks(title, description) {
    const tasksElement = document.querySelector('.tasks');

    let div = document.createElement('div');
    let par = document.createElement('p');
    let span = document.createElement('span');

    par.innerHTML = title;
    span.innerHTML = description;

    div.classList.add('task');

    div.append(par);
    div.append(span);

    tasksElement.append(div);
}
function outPutTasks() {
    tasks.map((task) => {
        createTasks(task.title, task.description)
    })
}