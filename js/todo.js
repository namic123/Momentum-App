const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");
const TODOS_KEY = "todos";

let toDoArray = [];

function setToDos() {
    localStorage.setItem("todos", JSON.stringify(toDoArray));
}

function deleteToDo(event) {
    const deleteLi = event.target.parentElement;
    deleteLi.remove();
    toDoArray = toDoArray.filter((item) => item.id !== parseInt(deleteLi.id));
    setToDos();
}

function paintToDo(getToDoObj) {
    const makeLi = document.createElement("li");
    makeLi.id = getToDoObj.id;
    const makeSpan = document.createElement("span");
    const makeButton = document.createElement("button");
    makeLi.appendChild(makeSpan);
    makeLi.appendChild(makeButton);
    toDoList.appendChild(makeLi);
    makeSpan.innerText = `${getToDoObj.text}      `;
    makeButton.innerText = "❌";
    makeLi.classList.add("list");
    makeSpan.classList.add("list-span");
    makeButton.addEventListener("click", deleteToDo);
}

function formSub(defaultSub) {
    defaultSub.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = "";
    const newToDoObj = {
        text: newToDo,
        id: Date.now()
    }
    toDoArray.push(newToDoObj);
    paintToDo(newToDoObj);
    setToDos();

}

toDoForm.addEventListener("submit", formSub);



const getToDos = localStorage.getItem(TODOS_KEY);

if (getToDos !== null) {
    const parseToDo = JSON.parse(getToDos);
    toDoArray = parseToDo;
    parseToDo.forEach(paintToDo);

}