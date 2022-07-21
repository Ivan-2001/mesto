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
const ImageNameInput = document.getElementById("popup-image__name");
const LinkInput = document.getElementById("popup-image__link");
const nameProfile = document.querySelector(".profile__name");
const jobProfile = document.querySelector(".profile__about-myself");
const cardTemplate = document.getElementById("elements__element").content;
const elementsContainer = document.querySelector(".elements");
const closeButtons = document.querySelectorAll(".popup__closed");

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
  return initialCard(item.name, item.link);
});

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  nameProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;
  closePopup(popupProfile);
}

function handleCardFormSubmit(evt) {
  evt.preventDefault();
  initialCard(ImageNameInput.value, LinkInput.value);
  closePopup(popupImage);
}

function openProfilePopup() {
  openPopup(popupProfile);
  nameInput.value = nameProfile.textContent;
  jobInput.value = jobProfile.textContent;
}

function openCardPopup() {
  openPopup(popupImage);
  formElementImage.reset();
}

closeButtons.forEach(function (button) {
  const popup = button.closest(".popup");
  button.addEventListener("click", () => closePopup(popup));
});

function closePopup(popup) {
  popup.classList.remove("popup_opened");
}

function openPopup(popup) {
  popup.classList.add("popup_opened");
}

function liked() {
  const likeButton = document.querySelector(".elements__like");
  likeButton.addEventListener("click", function (event) {
    event.target.classList.toggle("elements__like_active");
  });
}

function initialCard(heading, name) {
  const cardElement = cardTemplate
    .querySelector(".elements__element")
    .cloneNode(true);
  cardElement.querySelector(".elements__image").src = name;
  cardElement.querySelector(".elements__image").alt = heading;
  cardElement.querySelector(".elements__heading").textContent = heading;

  //Слушатель лайка
  cardElement
    .querySelector(".elements__like")
    .addEventListener("click", function (event) {
      const eventTarget = event.target;
      eventTarget.classList.toggle("elements__like_active");
    });
  //Слушатель кнопки удалить
  cardElement
    .querySelector(".elements__delete")
    .addEventListener("click", function (event) {
      event.target.closest(".elements__element").remove();
    });
  elementsContainer.prepend(cardElement);
  //Слушатель открытия картинки
  cardElement
    .querySelector(".elements__image")
    .addEventListener("click", function (event) {
      openPopup(popupCard);
      popupCardImage.src = event.target.src;
      popupCardHeading.textContent =
        cardElement.querySelector(".elements__heading").textContent;
    });
  elementsContainer.prepend(cardElement);
}

openPopupInfo.addEventListener("click", openProfilePopup);
openPopupImage.addEventListener("click", openCardPopup);
formElementInfo.addEventListener("submit", handleProfileFormSubmit);
formElementImage.addEventListener("submit", handleCardFormSubmit);
