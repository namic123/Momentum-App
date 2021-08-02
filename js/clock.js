const clock = document.querySelector("h2#clock");
const date = document.querySelector("#date");

function setDay() {
    const week = ['일', '월', '화', '수', '목', '금', '토'];

    const dayOfWeek = week[new Date().getDay()];
    return dayOfWeek;
}

function setDate() {
    const todayDate = new Date();

    date.innerText = `${todayDate.getFullYear()}년 ${todayDate.getMonth() + 1}월 ${todayDate.getDate()}일 ${setDay()}요일`;
}
function setClock() {
    const time = new Date();
    const hours = String(time.getHours()).padStart(2, "0");
    const minutes = String(time.getMinutes()).padStart(2, "0");
    const seconds = String(time.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;

}

setClock();
setDate();
setInterval(setClock, 1000);
setInterval(setDate, 1000);