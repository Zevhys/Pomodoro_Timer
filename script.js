// variables

var r = document.querySelector(":root");

let workTittle = document.getElementById("work");
let breakTittle = document.getElementById("break");

let workTime = 1;
let breakTime = 5;

let seconds = "00";

var minutes_ = 0;
var seconds_ = 0;

var current_timer;

// display
window.onload = () => {
  document.getElementById("minutes").innerHTML = workTime;
  document.getElementById("seconds").innerHTML = seconds;

  workTittle.classList.add("active");
};

// start timer
function start() {
  // change button
  document.getElementById("start").style.display = "none";
  document.getElementById("reset").style.display = "block";

  // change the time
  seconds = 59;

  let workMinutes = workTime - 1;
  let breakMinutes = breakTime - 1;

  breakCount = 0;

  // countdown
  let timerFunction = () => {
    //change the display
    document.getElementById("minutes").innerHTML = workMinutes;
    document.getElementById("seconds").innerHTML = seconds;

    minutes_ = workMinutes;
    seconds_ = seconds;

    updateTitle();

    // start
    seconds = seconds - 1;

    if (seconds === 0) {
      workMinutes = workMinutes - 1;
      if (workMinutes === -1) {
        if (breakCount % 2 === 0) {
          // start break
          workMinutes = breakMinutes;
          breakCount++;

          // change the painel
          workTittle.classList.remove("active");
          breakTittle.classList.add("active");
        } else {
          // continue work
          workMinutes = workTime;
          breakCount++;

          // change the painel
          breakTittle.classList.remove("active");
          workTittle.classList.add("active");
        }
      }
      seconds = 59;
    }
  };

  // start countdown
  setInterval(timerFunction, 1000); // 1000 = 1s
}

function updateTitle() {
  var on_work = document.getElementById("work").classList.contains("active");

  document.title =
    minutes_ +
    " : " +
    seconds_ +
    " - " +
    (on_work ? "Work" : "Break") +
    " Timer";

  r.style.setProperty("--color-shadow", on_work ? "#ff420e" : "#4897d8");
}