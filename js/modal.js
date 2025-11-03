const modal = document.querySelector(".modal");
const modalCloseBtn = document.querySelector(".modal_close");
const btnGet = document.getElementById("btn-get");

function openModal() {
  modal.classList.add("show");
  modal.classList.remove("hide");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  modal.classList.add("hide");
  modal.classList.remove("show");
  document.body.style.overflow = "";
}

if (btnGet) {
  btnGet.addEventListener("click", openModal);
}

if (modal) {
  modalCloseBtn.addEventListener("click", closeModal);
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });
}

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modal.classList.contains("show")) {
    closeModal();
  }
});

let isModalShownOnScroll = false;

function showModalOnScroll() {
  if (
    window.innerHeight + window.scrollY >=
    document.documentElement.scrollHeight - 1
  ) {
    if (!isModalShownOnScroll) {
      openModal();
      isModalShownOnScroll = true;

      window.removeEventListener("scroll", showModalOnScroll);
    }
  }
}

window.addEventListener("scroll", showModalOnScroll);

function showModalByTime() {
  if (modal) {
    setTimeout(openModal, 10000);
  }
}

showModalByTime();
