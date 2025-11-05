const gmailInput = document.querySelector("#gmail_input");
const gmailButton = document.querySelector("#gmail_button");
const gmailResult = document.querySelector("#gmail_result");

const GMAIL_REGEXP = /^[a-zA-Z0-9._-]+@gmail\.com$/;

gmailButton.addEventListener("click", () => {
  const value = gmailInput.value.trim();

  if (GMAIL_REGEXP.test(value)) {
    gmailResult.textContent = "OK";
    gmailResult.style.color = "green";
  } else {
    gmailResult.textContent = "FAIL";
    gmailResult.style.color = "red";
  }
});

const childBlock = document.querySelector(".child_block");

let positionX = 0;
let positionY = 0;
const maxOffset = 450;
let direction = 1;

const moveBlock = () => {
  switch (direction) {
    case 1:
      if (positionX < maxOffset) {
        positionX++;
      } else {
        direction = 2;
      }
      break;

    case 2:
      if (positionY < maxOffset) {
        positionY++;
        childBlock.style.top = `${positionY}px`;
      } else {
        direction = 3;
      }
      break;

    case 3:
      if (positionX > 0) {
        positionX--;
      } else {
        direction = 4;
      }
      break;

    case 4:
      if (positionY > 0) {
        positionY--;
      } else {
        direction = 1;
      }
      break;
  }

  childBlock.style.left = `${positionX}px`;
  childBlock.style.top = `${positionY}px`;
  setTimeout(moveBlock, 1);
};

moveBlock();

const secondsDisplay = document.querySelector("#seconds");
const startButton = document.querySelector("#start");
const stopButton = document.querySelector("#stop");
const resetButton = document.querySelector("#reset");

let seconds = 0;
let interval;

const updateTime = () => {
  seconds++;
  secondsDisplay.textContent = seconds;
};

startButton.addEventListener("click", () => {
  if (!interval) {
    interval = setInterval(updateTime, 1000);
  }
});

stopButton.addEventListener("click", () => {
  clearInterval(interval);
  interval = null;
});

resetButton.addEventListener("click", () => {
  clearInterval(interval);
  interval = null;
  seconds = 0;
  secondsDisplay.textContent = seconds;
});
