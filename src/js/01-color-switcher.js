//Изменяется цвет фона раз в секунду, после нажатия кнопки
//генерируетслучайный цвет
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const body = document.querySelector("body");
const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
//console.log(body);
let timerId =null;

startBtn.addEventListener('click', onStartBtn);
stopBtn.addEventListener('click', onStopBtn);


startBtn.style.padding = "20px";
stopBtn.style.padding = '20px';

function onStartBtn() {
    startBtn.disabled = true;
 timerId = setInterval(backGroundColorChange, 1000);
}

function onStopBtn() {
    startBtn.disabled = false;
   clearInterval(timerId);
}

function backGroundColorChange() { 
body.style.backgroundColor = getRandomHexColor();    
}