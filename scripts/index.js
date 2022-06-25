const popup = document.querySelector(".popup");
const closePopup = document.querySelector(".popup__closed");
const openPopup = document.querySelector(".profile__edit-button");
const savePopup = document.querySelector(".popup__save");
const formElement = document.querySelector(".popup__editor");
const nameInput = document.querySelector(".popup__name");
const jobInput = document.querySelector(".popup__about-myself");
const nameProfile = document.querySelector(".profile__name");
const jobProfile = document.querySelector(".profile__about-myself");

function formSubmitHandler(evt) {
  evt.preventDefault();

  nameProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;
  popup.classList.remove("popup_opened");
}

function open() {
  popup.classList.add("popup_opened");
  nameInput.value = nameProfile.textContent;
  jobInput.value = jobProfile.textContent;
}
function close() {
  popup.classList.remove("popup_opened");
}

openPopup.addEventListener("click", open);
closePopup.addEventListener("click", close);
formElement.addEventListener("submit", formSubmitHandler);
