let tasks = JSON.parse(localStorage.getItem("tasks"))??[] ;

let initialStep = ()=>{tasks.map( (task)=>{
    if(task.completed=="false"){

        let li = document.createElement("LI");   
        let t =  document.createTextNode(`${task.text} `);  
        li.appendChild(t);
        let Div = document.createElement("DIV")
        Div.setAttribute("id", 'btns')
        let Button = document.createElement("BUTTON")
        Button.appendChild(document.createTextNode('Delete'))
        Button.setAttribute("id", `delete`)
        Div.appendChild(Button)
        
        let Button2 = document.createElement("BUTTON")
        Button2.appendChild(document.createTextNode('Edit'))
        Button2.setAttribute("id", `edit`)
        Div.appendChild(Button2)
        
        li.setAttribute("id", `${task.id}`)
        li.setAttribute("draggable", 'true')
        li.setAttribute("ondragstart", 'onDragStart(event)')
        li.appendChild(Div)
        document.getElementById("list-of-tasks").appendChild(li);
    }
    else{
        let li = document.createElement("LI");   
        let t =  document.createTextNode(`${task.text} `);  
        li.appendChild(t);
        li.setAttribute("id", `${task.id}`)
        li.setAttribute("draggable", 'true')
        li.setAttribute("ondragstart", 'onDragStart(event)')
        document.getElementById("completed-tasks").appendChild(li);
    }
})
}
initialStep()

let addButton = document.getElementById("add-item-btn");

let onAdd = (e)=>{
    let inputEl = document.getElementById("input-task").value;
    let Length = tasks.length
    if(inputEl!==""){
        tasks.push({
            text: inputEl,
            id: Length+1,
            completed: "false"
        })
        localStorage.setItem("tasks", JSON.stringify([...tasks]))
        document.getElementById("list-of-tasks").innerHTML = ''
        document.getElementById("completed-tasks").innerHTML = ''
        initialStep();
        document.getElementById("input-task").value = ""
    }
}

addButton.addEventListener("click", (e) => {
    onAdd(e);
})

document.getElementById("input-task").addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        onAdd(event)
    }
});

let Lists = document.getElementById("list-of-tasks")

Lists.addEventListener("click", (e)=>{
    let LiEl = e.target.closest("li");
    if(LiEl){
        if(e.target.id=="delete"){
            tasks = tasks.filter((task) => {
                return task.id != LiEl.id
            });
            localStorage.setItem("tasks", JSON.stringify([...tasks]))
            document.getElementById("list-of-tasks").innerHTML = ''
            document.getElementById("completed-tasks").innerHTML = ''
            initialStep()
        }
        else{
            
            document.getElementById('edit-box').style.display = "block";
            document.getElementById('edit-task').value = LiEl.textContent.slice(0, -10);
            document.getElementById("edit-item-btn").addEventListener("click", (e)=>{
                let editedTask = document.getElementById("edit-task")
                console.log(editedTask.value)
                let isCompleted = tasks[LiEl.id-1].completed
                tasks.splice( LiEl.id-1, 1, {text: editedTask.value, id: LiEl.id, completed: isCompleted});
                localStorage.setItem("tasks", JSON.stringify([...tasks]))
                document.getElementById("list-of-tasks").innerHTML = ''
                document.getElementById("completed-tasks").innerHTML = ''
                initialStep();
                document.getElementById('edit-box').style.display = "none";
            })
        }
    }
})

let onDragStart = (e) => {
    // console.log(e.target.id)
    e.dataTransfer.setData('text/plain', e.target.id)
    e.currentTarget.style.backgroundColor = "palegreen"
}

let onDragOver = (e) => {
    e.preventDefault();
}

let onDrop = (e) => {
    const id  = e.dataTransfer.getData('text')
    const draggableElement = document.getElementById(id);
    // console.log(tasks[id-1]);
    if(tasks[id-1].completed=="false"){
        tasks[id-1].completed="true"
    }
    else{
        tasks[id-1].completed="false"
    }
    // console.log(tasks[id-1]);
    draggableElement.style.backgroundColor = "white"
    localStorage.setItem("tasks", JSON.stringify([...tasks]))
    document.getElementById("list-of-tasks").innerHTML = ''
    document.getElementById("completed-tasks").innerHTML = ''
    initialStep();
    // const dropzone = event.target;
    // let tmp  = document.querySelector(`#${dropzone.id} ul` )
    // tmp.appendChild(draggableElement);
    e
    .dataTransfer
    .clearData();
}