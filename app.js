const inputBox=document.getElementById("input-box");
const listContainer=document.getElementById("list-container");

function addTask(){
    if(inputBox.value === ''){
        alert("You must write something...!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        let span=document.createElement("span");
        span.innerHTML = "\u00d7";  //for 'x' sign
        li.appendChild(span);
    }
    inputBox.value = "";  //to remove the task after getting added in the task list
    saveData();

}


listContainer.addEventListener("click",function(e){
    if(e.target.tagName ==="LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName ==="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);

//to store the data or to save data
function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}

//displaying data when u open the website again:
function showTask(){
    listContainer.innerHTML=localStorage.getItem("data");
}
showTask();