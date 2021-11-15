const btn = document.querySelector('#addButton');
const task = document.querySelector('#newTask');
const onGoing = document.querySelector('#onGoing');
const completed = document.querySelector('#completed');
let store = localStorage;

btn.addEventListener('click', (e) => {
    e.preventDefault();
    const li = document.createElement('li');
    const btnDone = document.createElement('button');
    const btnEdit = document.createElement('button');
    li.classList.add("text");
    btnEdit.classList.add("btnEdit");
    btnEdit.innerHTML = "Edit";
    btnDone.classList.add("btnDone");
    btnDone.innerHTML = "Done";
    if(task.value === ''){
        alert('Input Text first');
    }
    else{
        //Add task to Ongoing
        li.appendChild(document.createTextNode(`${task.value}`));
        onGoing.appendChild(li);
        onGoing.appendChild(btnEdit);
        onGoing.appendChild(btnDone);
        task.value = '';

        //Edit Node
         btnEdit.addEventListener('click', (e) => {
            e.preventDefault();
            task.value = `${li.textContent}`;
            li.remove();
            btnEdit.remove();
            btnDone.remove();
        });

        //Task Completed
        btnDone.addEventListener('click' , (e) =>{
            e.preventDefault();
            completed.appendChild(li);
            completed.appendChild(btnEdit);
            completed.appendChild(btnDone);
            const Done = btnDone;
            btnEdit.innerHTML = "Edit Task"
            Done.innerHTML = "Delete";
            //Deleting Node
            Done.addEventListener('click', (e) => {
                e.preventDefault();
                li.remove();
                btnEdit.remove();
                btnDone.remove();
            });
        });
        
    }
});