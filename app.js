let stop;
let timeRatio;
let timerArr;
let focus = 1;
let breakTimes = 1;

const createFocusTimer = () => {
  // start the logic of focus timer
  timerArr = { hour: 1, minute: 59, second: 59 };
  stop = setInterval(() => {
    h1.textContent = `0${timerArr.hour}:${timerArr.minute}:${timerArr.second}`;
    timerArr.second -= 1;
    if (timerArr.second === 0) {
      timerArr.second = 59;
      timerArr.minute -= 1;
      if (timerArr.minute === 0) {
        timerArr.minute = 59;
        timerArr.hour -= 1;
        if (timerArr.hour === -1) {
          clearInterval(stop);
          focus += 1;
          h1.remove();
          controlPenal.remove();
          timeOver();
        }
      }
    }
  }, 1);

  let mainConatiner = document.querySelector(".Clock");

  let focusContainer = document.createElement("div");
  focusContainer.classList.add("focusContainer");

  let h1 = document.createElement("h1");
  h1.textContent = "";

  let controlPenal = document.createElement("div");
  controlPenal.classList.add("controlPenal");

  let restartBtnImg = document.createElement("img");
  restartBtnImg.src = "./icons8-restart-48.png";
  restartBtnImg.id = "restart";

  let playBtnimg = document.createElement("img");
  playBtnimg.src = "./icons8-play-button-50.png";
  playBtnimg.id = "playBtn";
  playBtnimg.type = "button";

  let p = document.createElement("p");
  p.textContent = "Focus ";
  let span = document.createElement("span");
  span.id = "FocusMode";
  span.textContent = focus; // here
  p.appendChild(span);

  mainConatiner.appendChild(focusContainer);
  focusContainer.appendChild(h1);
  controlPenal.appendChild(restartBtnImg);
  controlPenal.appendChild(p);
  controlPenal.appendChild(playBtnimg);
  focusContainer.appendChild(controlPenal);

  // restart btn action
  restartBtnImg.addEventListener("click", () => {
    timerArr = { hour: 1, minute: 59, second: 59 };
  });

  //play pause Logic And action
  let pause = (playBtnimg.src = "icons8-pause-button-50.png");
  let play = (playBtnimg.src = "icons8-play-button-50.png");

  playBtnimg.addEventListener("click", () => {
    if (play === "icons8-play-button-50.png") {
      play = playBtnimg.src = "icons8-pause-button-50.png";
      clearInterval(stop);
      console.log(timerArr);
    } else {
      play = playBtnimg.src = "icons8-play-button-50.png";
      stop = setInterval(() => {
        h1.textContent = `0${timerArr.hour}:${timerArr.minute}:${timerArr.second}`;
        timerArr.second -= 1;
        if (timerArr.second === 0) {
          timerArr.second = 59;
          timerArr.minute -= 1;
          if (timerArr.minute === 0) {
            timerArr.minute = 59;
            timerArr.hour -= 1;
            if (timerArr.hour === -1) {
              clearInterval(stop);
              focus += 1;
              h1.remove();
              controlPenal.remove();
              timeOver();
            }
          }
        }
      }, 1000);
    }
  });
};
createFocusTimer();

const timeBreakFunc = () => {
  // grabbing html main div
  let mainConatiner = document.querySelector(".Clock");

  let focusContainer = document.createElement("div");
  focusContainer.classList.add("focusContainer");

  let h1 = document.createElement("h1");
  h1.textContent = "";

  let breakMode = document.createElement("div");
  breakMode.classList.add("breakMode");

  let restartBtnImg = document.createElement("img");
  restartBtnImg.src = "./icons8-restart-48.png";
  restartBtnImg.id = "restart";

  let playBtnimg = document.createElement("img");
  playBtnimg.src = "./icons8-play-button-50.png";
  playBtnimg.id = "playBtn";
  playBtnimg.type = "button";

  let p = document.createElement("p");
  p.textContent = "Break ";
  let span = document.createElement("span");
  span.id = "FocusMode";
  span.textContent = breakTimes;
  p.appendChild(span);

  // Append the elements to the main div
  mainConatiner.appendChild(focusContainer);
  focusContainer.appendChild(h1);
  breakMode.appendChild(restartBtnImg);
  breakMode.appendChild(p);
  breakMode.appendChild(playBtnimg);
  focusContainer.appendChild(breakMode);

  
  let breakArr = { minute: 9, second: 59 };
  let timeStoper = setInterval(() => {
    h1.textContent = `0${breakArr.minute}:${breakArr.second}`;
    breakArr.second -= 1;
    if (breakArr.second === -1) {
      breakArr.second = 59;
      breakArr.minute -= 1;
      if (breakArr.minute === -1) {
        clearInterval(timeStoper);
        // mainConatiner.remove();
        focusContainer.remove();
        breakMode.remove();
        breakMode.remove();
        breakMode.remove();
        focusContainer.remove();
        breakTimes += 1;
        timeOverBreak();
      }
    }
  }, 1000);


  // restart btn action
  restartBtnImg.addEventListener("click", () => {
    breakArr = { minute: 9, second: 59 };
  });

  //play pause Logic And action
  let pause = (playBtnimg.src = "icons8-pause-button-50.png");
  let play = (playBtnimg.src = "icons8-play-button-50.png");

  playBtnimg.addEventListener("click", () => {
    if (play === "icons8-play-button-50.png") {
      play = playBtnimg.src = "icons8-pause-button-50.png";
      clearInterval(timeStoper);
    } else {
      play = playBtnimg.src = "icons8-play-button-50.png";
      stop = setInterval(() => {
        h1.textContent = `0${breakArr.minute}:${breakArr.second}`;
        breakArr.second -= 1;
        if (breakArr.second === 0) {
          breakArr.second = 59;
          breakArr.minute -= 1;
          if (breakArr.minute === 0) {
            clearInterval(timeStoper);
              h1.remove();
              controlPenal.remove();
              timeOver();
          }
        }
      }, 1000);
    }
  });

};

const timeOver = () => {
  let mainConatiner = document.querySelector(".Clock");
  let h1 = document.createElement("h1");
  h1.textContent = "Time's Up!";
  h1.classList.add("timeOver");
  let btn = document.createElement("p");
  btn.textContent = "Okay";
  btn.classList.add("btn");
  mainConatiner.appendChild(h1);
  mainConatiner.appendChild(btn);
  let audio1 = new Audio("./game_over.mp3");
  audio1.play();
  
  // document.addEventListener('DOMContentLoaded', function () {
  //   let audio = document.getElementById("./game_over.mp3");
  //   audio.play();
  // });
  // Logic

  btn.addEventListener("click", () => {
    h1.remove();
    btn.remove();
    timeBreakFunc();
  });
};
const timeOverBreak = () => {
  let mainConatiner = document.querySelector(".Clock");
  let h1 = document.createElement("h1");
  h1.textContent = "Time's Up!";
  h1.classList.add("timeOver");
  let btn = document.createElement("p");
  btn.textContent = "Okay";
  btn.classList.add("btn");
  mainConatiner.appendChild(h1);
  mainConatiner.appendChild(btn);
  let audio = new Audio("./game_over.mp3");
    audio.play();

  // Logic
  btn.addEventListener("click", () => {
    h1.remove();
    btn.remove();
    createFocusTimer();
  });
};

// start time and date logic

function updateDate() {
  let currentDate = new Date();

  // Format the date
  let dayOfWeek = currentDate.toLocaleDateString("en-US", { weekday: "short" }); // Short form of day
  let dayOfMonth = currentDate.getDate();
  let month = currentDate.toLocaleDateString("en-US", { month: "short" }); // Short form of month
  let year = currentDate.getFullYear().toString().slice(-2); // Last two digits of the year

  let formattedDate = `${dayOfMonth} ${month} ${year}`;

  // Display the date
  let date = document.querySelector("#timeDaty")
  date.textContent = formattedDate;
}

function updateTime() {
  let currentDate = new Date();

  // Format the time
  let dayOfWeek = currentDate.toLocaleDateString("en-US", { weekday: "short" }); // Short form of day
  let hours = currentDate.getHours();
  let amOrPm = hours >= 12 ? "PM" : "AM";
  let formattedHours = hours % 12 || 12; // Convert hours to 12-hour format
  let minutes = currentDate.getMinutes();
  let formattedMinutes = minutes < 10 ? "0" + minutes : minutes;

  let formattedTime = `${dayOfWeek}, ${formattedHours}:${formattedMinutes} ${amOrPm}`;

  // Display the time
  let time = document.querySelector("#dayDate");
  time.textContent = formattedTime
  
 
}

// Call the functions initially to display the current date and time

updateDate();

// Update the time every second
setInterval(function () {
  updateTime();
}, 1000);

// let audio = new Audio("./game_over.mp3");
// document.addEventListener("click", () => {
//   audio.play();
  
// })