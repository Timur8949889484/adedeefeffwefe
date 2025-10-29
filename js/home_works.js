const gmailInput = document.querySelector("#gmail_input");
const gmailButton = document.querySelector("#gmail_button");
const gmailResult = document.querySelector("#gmail_result");

const GMAIL_REGEXP = /^[a-zA-Z0-9._-]+@gmail\.com$/;

gmailButton.addEventListener("click", () => {
  const value = gmailInput.value.trim();

  if (GMAIL_REGEXP.test(value)) {
    // Если адрес соответствует шаблону
    gmailResult.textContent = "OK";
    gmailResult.style.color = "green";
  } else {
    // Если адрес не соответствует шаблону
    gmailResult.textContent = "FAIL";
    gmailResult.style.color = "red";
  }
});

const childBlock = document.querySelector(".child_block");
let positionX = 0;
const maxOffset = 450;
let step = 1;

const moveBlock = () => {
  if (positionX >= maxOffset) {
    step = -1;
  } else if (positionX <= 0) {
    step = 1;
  }

  positionX += step;
  childBlock.style.left = `${positionX}px`;

  setTimeout(moveBlock, 1);
};

moveBlock();
