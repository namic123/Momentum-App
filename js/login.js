const searchForm = document.querySelector("#login-form");
const searchText = searchForm.querySelector("#login-form #textbox");
const HIDDEN_CLASS = "hidden";
const USER_NAME = "username";
const showUserName = document.getElementById("showname");

function formHandler(stopEvent) {
    stopEvent.preventDefault();
    const userName = searchText.value;
    localStorage.setItem(USER_NAME, userName);
    searchForm.classList.add(HIDDEN_CLASS);
    loadUserName(userName);
}

function loadUserName(loadName) {
    showUserName.classList.remove(HIDDEN_CLASS);
    showUserName.innerText = `Welcome ${loadName}!`;
}

const saveUserName = localStorage.getItem(USER_NAME);

if (saveUserName === null) {
    searchForm.classList.remove(HIDDEN_CLASS);
    searchForm.addEventListener("submit", formHandler);
}
else {
    loadUserName(saveUserName);
}
