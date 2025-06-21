let seconds = 0;
let minutes = 0;
let hours = 0;

let clockBox = document.querySelector(".clock");

clockBox.innerHTML = `${String(hours).padStart(2, "0")}:${String(
  minutes
).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

const startTimer = () => {
  seconds++;
  if (seconds == 60) {
    seconds = 0;
    minutes++;
  }
  if (minutes == 60) {
    minutes = 0;
    hours++;
  }
  console.log(hours, minutes, seconds);
  clockBox.innerHTML = `${String(hours).padStart(2, "0")}:${String(
    minutes
  ).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
};

let ref;

let startBtn = document.querySelector(".start");
let stopBtn = document.querySelector(".stop");
let resetBtn = document.querySelector(".reset");
startBtn.disabled = false;
stopBtn.disabled = true;
resetBtn.disabled = true;
startBtn.addEventListener("click", () => {
  ref = setInterval(startTimer, 1000);
  startBtn.disabled = true;
    stopBtn.disabled = false;
    resetBtn.disabled = false;
});
stopBtn.addEventListener("click", () => {
  clearInterval(ref);
    startBtn.disabled = false
    stopBtn.disabled = true
    resetBtn.disabled = false

});
resetBtn.addEventListener("click", () => {
    startBtn.disabled = false;
    stopBtn.disabled = true;
    resetBtn.disabled = true;
  clearInterval(ref);
  seconds = 0;
  minutes = 0;
  hours = 0;
  clockBox.innerHTML = `${String(hours).padStart(2, "0")}:${String(
    minutes
  ).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
});

setInterval(()=>{
    let myDate = new Date()
    let dateBox = document.querySelector('.date')
    dateBox.innerHTML = `${String(myDate.getDate()).padStart(2,'0')}/${String(myDate.getMonth()+1).padStart(2,'0')}/${myDate.getFullYear()}`
},1000)