function addTask(){
    const input=document.getElementById("taskInput");
    const taskText=input.ariaValueMax.trim();
    if(taskText==="") return;

    const li=document.createElement("li");
    li.innerHtml=`${tasktext}
    <button class="remove-btn" onclick="removeTask(this)">x</button>`;
    document.getElementById("tasklist").appendChild(li);
    input.value="";
}
function removeTask(button){
    const li=button.parentElement;
    li.remove();
}