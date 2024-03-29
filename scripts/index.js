const popupProfile = document.querySelector(".popup-info");
const popupImage = document.querySelector(".popup-image");
const closedPopupInfo = document.querySelector(".popup-info__closed");
const closedPopupImage = document.querySelector(".popup-image__closed");
const closedPopupCard = document.querySelector(".popup-card__closed");
const openPopupInfo = document.querySelector(".profile__edit-button");
const openPopupImage = document.querySelector(".profile__add-button-wrapper");
const popupCard = document.querySelector(".popup-card");
const popupCardImage = document.querySelector(".popup-card__image");
const popupCardHeading = document.querySelector(".popup-card__heading");
const formElementInfo = document.querySelector(".popup-info__editor");
const formElementImage = document.querySelector(".popup-image__editor");
const nameInput = document.getElementById("popup-info__name");
const jobInput = document.getElementById("popup-info__about-myself");
const imageNameInput = document.getElementById("popup-image__name");
const linkInput = document.getElementById("popup-image__link");
const nameProfile = document.querySelector(".profile__name");
const jobProfile = document.querySelector(".profile__about-myself");
const cardTemplate = document.getElementById("elements__element").content;
const elementsContainer = document.querySelector(".elements");
const popupOverlays = document.querySelectorAll(".popup");

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

initialCards.reverse();
initialCards.forEach(function (item) {
  return renderCard(item.name, item.link);
});

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  nameProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;
  closePopup(popupProfile);
}

function handleCardFormSubmit(evt) {
  evt.preventDefault();
  renderCard(imageNameInput.value, linkInput.value);
  closePopup(popupImage);
}

function openProfilePopup() {
  openPopup(popupProfile);
  nameInput.value = nameProfile.textContent;
  jobInput.value = jobProfile.textContent;
  hideError(popupProfile);
}

function openCardPopup() {
  openPopup(popupImage);
  formElementImage.reset();
  hideError(popupImage);
}

//функция скрытия ошибки
function hideError(popup) {
  //удалить стили полей с ошибкой
  const inputs = popup.querySelectorAll(".popup__input_type_error");
  inputs.forEach(function (evt) {
    evt.classList.remove("popup__input_type_error");
  });
  //удалить сообщение при ошибке
  const errorMessages = popup.querySelectorAll(".popup__input-error_active");
  errorMessages.forEach(function (evt) {
    evt.classList.remove("popup__input-error_active");
    evt.textContent = "";
  });
  //сделать кнопку неактивной
  const buttonSave = popup.querySelector(".popup__save");
  buttonSave.classList.add("popup__save_inactive");
  buttonSave.setAttribute("disabled", "disabled");
}

// закрытие клавишей esc
function closeEcsPopup(evt) {
  if (evt.key === "Escape") {
    const openedPopup = document.querySelector(".popup_opened");
    closePopup(openedPopup);
  }
}

//закрытие нажатием на крестик или на оверлей
popupOverlays.forEach(popup => {
  popup.addEventListener("mousedown", evt => {
    if (evt.target.classList.contains("popup_opened")) {
      closePopup(popup);
    }
    if (evt.target.classList.contains("popup__closed")) {
      closePopup(popup);
    }
  });
});

function closePopup(popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener("keydown", closeEcsPopup);
}

function openPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener("keydown", closeEcsPopup);
}

function createCard(heading, name) {
  const cardElement = cardTemplate
    .querySelector(".elements__element")
    .cloneNode(true);
  const image = cardElement.querySelector(".elements__image");
  image.src = name;
  image.alt = heading;
  cardElement.querySelector(".elements__heading").textContent = heading;

  //Слушатель лайка
  const like = cardElement.querySelector(".elements__like");
  like.addEventListener("click", function (evt) {
    evt.target.classList.toggle("elements__like_active");
  });

  //Слушатель кнопки удалить
  const del = cardElement.querySelector(".elements__delete");
  del.addEventListener("click", function (evt) {
    evt.target.closest(".elements__element").remove();
  });

  //Слушатель открытия картинки
  const img = cardElement.querySelector(".elements__image");
  img.addEventListener("click", function (evt) {
    openPopup(popupCard);
    popupCardImage.src = name;
    popupCardImage.alt = heading;
    popupCardHeading.textContent = heading;
  });

  return cardElement;
}

function renderCard(heading, name) {
  elementsContainer.prepend(createCard(heading, name));
}

openPopupInfo.addEventListener("click", openProfilePopup);
openPopupImage.addEventListener("click", openCardPopup);
formElementInfo.addEventListener("submit", handleProfileFormSubmit);
formElementImage.addEventListener("submit", handleCardFormSubmit);
