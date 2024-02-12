let name = document.getElementById('name');
let status = document.getElementById('status');
let category = document.getElementById('category');
let description = document.getElementById('description');
let addBtn = document.getElementById('addBtn');
// // let newTask = document.getElementById('newTask');
let newPriority = document.getElementById('newPriority');
let newDesc = document.getElementById('newDesc');
let editBtn = document.getElementById('editBtn');
let start = document.getElementById('start');
let progress = document.getElementById('progress');
let complete = document.getElementById('complete');

let index = 0;


const saveLocal = (task) => {
    let tasks = getLocal();
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

const getLocal = () => {
    let localData = localStorage.getItem("tasks");
    console.log(localData)
    if (localData == null) {
        return [];
    }

    return JSON.parse(localData);
}

addBtn.addEventListener('click', () => {
    event.preventDefault();
    console.log('hello')
    let newTask = {
        taskName: name.value,
        priority: category.value,
        progression: status.value,
        description: description.value
    }

    saveLocal(newTask)
    addedTask(newTask);

    // if(localStorage.getItem("progression") === "starting"){
    //     start.append(addedTask());

    // }else if(localStorage.getItem("progression") === "progressing"){
    //     progress.append(addedTask());
    // }else {
    //     complete.append(addedTask());
    // }
});

const onStart = () => {
    let tasks = getLocal()

    tasks.forEach((toDo) => {
        let parentDiv = document.createElement('div');
        parentDiv.className = 'grid grid-cols-3 border-2 px-10 me-10 my-3 py-4 bg-yellow-50';

        let siblingDiv1 = document.createElement('div');
        siblingDiv1.className = 'col-span-2';

        let siblingDiv2 = document.createElement('div');
        siblingDiv2.className = 'col-span-1 flex justify-end';

        let taskName = document.createElement('p');
        taskName.className = 'font-quick-bold text-2xl';
        taskName.textContent = toDo.taskName;

        let priorityP = document.createElement('p');
        priorityP.className ='font-quick-reg';
        priorityP.textContent = toDo.priority;

        let descriptionP = document.createElement('p');
        descriptionP.className = 'font-quick-reg text-xl';
        descriptionP.textContent = toDo.description;

        let span = document.createElement('span');
        span.className ='material-symbols-outlined';
        span.textContent = 'edit';

        siblingDiv2.append(span);
        siblingDiv1.append(taskName, priorityP, descriptionP);
        parentDiv.append(siblingDiv1, siblingDiv2);
        
        if(toDo.progression == "starting")
        {
            start.append(parentDiv);
        }else if(toDo.progressing == "progressing"){
            progress.append(parentDiv);
            
        }else{
            complete.append(parentDiv);

        }
        // return start;
    })
}
const addedTask = (task) => {


        let parentDiv = document.createElement('div');
        parentDiv.className = 'grid grid-cols-3 border-2 px-10 me-10 my-3 py-4 bg-yellow-50';

        let siblingDiv1 = document.createElement('div');
        siblingDiv1.className = 'col-span-2';

        let siblingDiv2 = document.createElement('div');
        siblingDiv2.className = 'col-span-1 flex justify-end';

        let taskName = document.createElement('p');
        taskName.className = 'font-quick-bold text-2xl';
        taskName.textContent = task.taskName;

        let priorityP = document.createElement('p');
        priorityP.className ='font-quick-reg';
        priorityP.textContent = task.priority;

        let descriptionP = document.createElement('p');
        descriptionP.className = 'font-quick-reg text-xl';
        descriptionP.textContent = task.description;

        let span = document.createElement('span');
        span.className ='material-symbols-outlined';
        span.textContent = 'edit';

        siblingDiv2.append(span);
        siblingDiv1.append(taskName, priorityP, descriptionP);
        parentDiv.append(siblingDiv1, siblingDiv2);
        start.append(parentDiv);
        if(toDo.progression == "starting")
        {
            start.append(parentDiv);
        }else if(toDo.progressing == "progressing"){
            progress.append(parentDiv);
            
        }else{
            complete.append(parentDiv);

        }
        // return start;
}
onStart();