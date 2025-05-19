let task = document.getElementById("task");
let priority = document.getElementById("priority");
let form = document.getElementById("form");
let tableBody = document.querySelector("tbody");
 

form.addEventListener('submit',(e)=> {

    e.preventDefault();
    // console.log(task.value);
    // console.log(priority.value);
    taskAdded();
});

function taskAdded(){

    let tr = document.createElement("tr");

    let tdTask = document.createElement("td");
    let tdPriority = document.createElement("td");
    let tdDelete = document.createElement("button");
    
    const taskValue = task.value;
    const priorityValue = priority.value;
    const deleteValue = tdDelete.innerHTML = "Delete";
    

    // console.log(taskValue);
    // console.log(priorityValue);

    tdTask.append(taskValue);
    tdPriority.append(priorityValue);

    tr.appendChild(tdTask);
    tr.appendChild(tdPriority);
    tr.appendChild(tdDelete);

    tableBody.append(tr);

    tdDelete.addEventListener("click" , ()=> {
        tr.remove();
    });

};
//

 
