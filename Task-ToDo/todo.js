const btn = document.querySelector('#addButton');
const task = document.querySelector('#newTask');
const onGoing = document.querySelector('#onGoing');
const completed = document.querySelector('#completed');



btn.addEventListener('click', (e) => {
    e.preventDefault();
    const li = document.createElement('li');
    const btnDone = document.createElement('button');
    btnDone.classList.add("btnDone");
    btnDone.innerHTML = "Done";
    if(task.value === ''){
        alert('Input Text first');
    }
    else{
        li.appendChild(document.createTextNode(`${task.value}`));
        onGoing.appendChild(li);
        onGoing.appendChild(btnDone);
        task.value = '';

        btnDone.addEventListener('click' , (e) =>{
            e.preventDefault();
            completed.appendChild(li);
            completed.appendChild(btnDone);
            btnDone.innerHTML = "Delete";
            //Deleting Node
            btnDone.addEventListener('click', (e) => {
                e.preventDefault();
                li.remove();
                btnDone.remove();
            });
            
        });
        
    }
});