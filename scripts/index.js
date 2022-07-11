const popup = document.querySelector(".popup");
const closePopup = document.querySelector(".popup__closed");
const openPopup = document.querySelector(".profile__edit-button");
const formElement = document.querySelector(".popup__editor");
const nameInput = document.getElementById("popup__name");
const jobInput = document.getElementById("popup__about-myself");
const nameProfile = document.querySelector(".profile__name");
const jobProfile = document.querySelector(".profile__about-myself");
const cardTemplate = document.getElementById("elements__element").content;
const elementsContainer = document.querySelector(".elements");

const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

initialCards.forEach(function (item) {
  const cardElement = cardTemplate
    .querySelector(".elements__element")
    .cloneNode(true);
  cardElement.querySelector(".elements__image").src = item.link;
  cardElement.querySelector(".elements__heading").textContent = item.name;
  elementsContainer.append(cardElement);
});

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
