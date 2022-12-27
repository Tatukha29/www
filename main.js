function menu() {
    const naviList = document.getElementById('navi-list');
    naviList.classList.toggle('active');
}
(function() {
    document.addEventListener("DOMContentLoaded", () => {
        calculateLoadTime()
    })
})();

function calculateLoadTime() {
    const startTime = new Date().getTime()
    const selector = document.querySelector(".time")

    window.addEventListener('load', () => {
        selector.innerHTML = " Время загрузки: " + ((new Date().getTime() - startTime) / 1000) + " секунды"
    })
}

function create_el(list_el, input, date, task) {
    const task_el = document.createElement('div');
    task_el.classList.add('task');

    const task_content_el = document.createElement('div');
    task_content_el.classList.add('content');

    task_el.appendChild(task_content_el);

    const task_td_el = document.createElement('td');
    task_td_el.classList.add('text');
    task_td_el.type = 'text';
    task_td_el.innerText = task;

    const task_time_el = document.createElement('td');
    task_time_el.classList.add('textTime');
    task_time_el.type = 'text';
    task_time_el.innerText = date;


    task_content_el.appendChild(task_time_el);
    task_content_el.appendChild(task_td_el);

    const task_actions_el = document.createElement('div');
    task_actions_el.classList.add('actions');

    const task_delete_el = document.createElement('button');
    task_delete_el.classList.add('delete');
    task_delete_el.innerText = 'Удалить';

    task_actions_el.appendChild(task_delete_el);
    task_el.appendChild(task_actions_el);
    list_el.appendChild(task_el);
    input.value = '';

    task_delete_el.addEventListener('click', (e) => {
        list_el.removeChild(task_el);
        localStorage.removeItem(date);
    });
    return task_el
}

window.addEventListener('load', (key, value) => {
    const form = document.querySelector("#new-task-form");
    const input = document.querySelector("#new-task-input");
    const list_el = document.querySelector("#tasks");

    for (let i = 0; i < localStorage.length; i++) {
        key = localStorage.key(i);
        value = localStorage.getItem(key);
        let el = create_el(list_el, input, key, value);
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const task = input.value;
        const date = new Date();
        const year = date.getFullYear();
        const month = date.getMonth();
        const day = date.getDay();
        const hour = date.getHours();
        const minutes = date.getMinutes();
        const seconds = date.getSeconds();
        const allTime = year + "." + month + "." + day + "-" + hour + ":" + minutes + ":" + seconds;
        localStorage.setItem(allTime, task);
        let element = create_el(list_el, input, allTime, task);
    });
});