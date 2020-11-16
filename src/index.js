const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];


 const btnStart = document.querySelector('[data-action="start"]')
 const btnStop = document.querySelector('[data-action="stop"]')

let bodyColor = null;
let interval = null;

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};


btnStart.addEventListener('click', onBtnStart);
btnStop.addEventListener('click', onBtnStop);



function randomColor() {
    bodyColor = colors[randomIntegerFromInterval(0, colors.length - 1)];
    document.body.style.background = bodyColor;
}


function onBtnStart() {
    btnStart.disabled = true;
 interval = setInterval(() => randomColor(), 1000)
}


function onBtnStop() {
 btnStart.disabled = false;
 clearInterval(interval)
    
}

btnStart.addEventListener('click', onBtnStart);
btnStop.addEventListener('click', onBtnStop);

