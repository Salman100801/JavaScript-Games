const btn = document.querySelector('#addButton');
const task = document.querySelector('#newTask');
const onGoing = document.querySelector('#onGoing');
const completed = document.querySelector('#completed');


btn.addEventListener('click', (e) => {
    e.preventDefault();
    var li = document.createElement('li');
    const btnDone = document.createElement('button');
    const btnEdit = document.createElement('button');
    li.classList.add("text");
    btnEdit.classList.add("btnEdit");
    btnEdit.innerHTML = "<img src=\'https://raw.githubusercontent.com/Salman100801/JavaScript-Games/master/assets/images/edit.png\' />";
    btnDone.classList.add("btnDone");
    btnDone.innerHTML = "<img src=\'https://raw.githubusercontent.com/Salman100801/JavaScript-Games/master/assets/images/done.png\' />";
    if(task.value === '')
    {
        alert('Input Text first');
    }
    else{
        //Add task to Ongoing
        li.appendChild(document.createTextNode(`${task.value}`));
        li.appendChild(btnEdit);
        li.appendChild(btnDone);
        onGoing.appendChild(li);
        addItemsToLocalStorage();
        task.value = '';
        

        //Edit Node
         btnEdit.addEventListener('click', (e) => {
            e.preventDefault();
            task.value = `${li.textContent}`;
            li.remove();
        });

        //Task Completed
        btnDone.addEventListener('click' , (e) =>{
            e.preventDefault();
            completed.appendChild(li);
            const Done = btnDone;
            btnEdit.innerHTML = "<img src=\'https://raw.githubusercontent.com/Salman100801/JavaScript-Games/master/assets/images/edit.png\' />";
            Done.innerHTML = "<img src=\'https://raw.githubusercontent.com/Salman100801/JavaScript-Games/master/assets/images/delete.png\' />";
            //Deleting Node
            Done.addEventListener('click', (e) => {
                e.preventDefault();
                li.remove();
                btnEdit.remove();
                btnDone.remove();
                //localStorage.removeItem();
            });
        });

        function addItemsToLocalStorage()
        {   
            var newInput = li.textContent;

            if(localStorage.getItem('Child') == null){
                localStorage.setItem('Child','[]');
            }

            var old_data = JSON.parse(localStorage.getItem('Child'));
            old_data.push(newInput);

            localStorage.setItem('Child',JSON.stringify(old_data));
        }

        function view(){

            if(localStorage.getItem('Child')!= null){
                
                li = JSON.parse(localStorage.getItem('ongoing'));
            }
            
        }
    }
});

