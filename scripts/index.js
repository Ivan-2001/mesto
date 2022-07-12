const popupInfo = document.querySelector(".popup-info");
const popupImage = document.querySelector(".popup-image");
const closePopupInfo = document.querySelector(".popup-info__closed");
const closePopupImage = document.querySelector(".popup-image__closed");
const openPopupInfo = document.querySelector(".profile__edit-button");
const openPopupImage = document.querySelector(".profile__add-button-wrapper");
const formElementInfo = document.querySelector(".popup-info__editor");
const formElementImage = document.querySelector(".popup-image__editor");
const nameInput = document.getElementById("popup-info__name");
const jobInput = document.getElementById("popup-info__about-myself");
const ImageNameInput = document.getElementById("popup-image__name");
const LinkInput = document.getElementById("popup-image__link");
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

function formSubmitHandlerInfo(evt) {
  evt.preventDefault();
  nameProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;
  popupInfo.classList.remove("popup_opened");
}

function formSubmitHandlerImage(evt) {
  evt.preventDefault();
  const cardElement = cardTemplate
    .querySelector(".elements__element")
    .cloneNode(true);
  cardElement.querySelector(".elements__image").src = LinkInput.value;
  cardElement.querySelector(".elements__heading").textContent =
    ImageNameInput.value;
  elementsContainer.prepend(cardElement);
  popupImage.classList.remove("popup_opened");
}

function openedPopupInfo() {
  popupInfo.classList.add("popup_opened");
  nameInput.value = nameProfile.textContent;
  jobInput.value = jobProfile.textContent;
}

function openedPopupImage() {
  popupImage.classList.add("popup_opened");
  LinkInput.value = "";
  ImageNameInput.value = "";
}

function closedPopupInfo() {
  popupInfo.classList.remove("popup_opened");
}

function closedPopupImage() {
  popupImage.classList.remove("popup_opened");
}

openPopupInfo.addEventListener("click", openedPopupInfo);
openPopupImage.addEventListener("click", openedPopupImage);
closePopupInfo.addEventListener("click", closedPopupInfo);
closePopupImage.addEventListener("click", closedPopupImage);
formElementInfo.addEventListener("submit", formSubmitHandlerInfo);
formElementImage.addEventListener("submit", formSubmitHandlerImage);
