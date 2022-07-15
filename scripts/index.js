const popupInfo = document.querySelector(".popup-info");
const popupImage = document.querySelector(".popup-image");
const closePopupInfo = document.querySelector(".popup-info__closed");
const closePopupImage = document.querySelector(".popup-image__closed");
const closePopupCard = document.querySelector(".popup-card__closed");
const openPopupInfo = document.querySelector(".profile__edit-button");
const openPopupImage = document.querySelector(".profile__add-button-wrapper");
const popupCard = document.querySelector(".popup-card");
const popupCardImage = document.querySelector(".popup-card__image");
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

initialCards.reverse();
initialCards.forEach(function (item) {
  return initialCard(item.name, item.link);
});

function formSubmitHandlerInfo(evt) {
  evt.preventDefault();
  nameProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;
  popupInfo.classList.remove("popup_opened");
}

function formSubmitHandlerImage(evt) {
  evt.preventDefault();

  initialCard(ImageNameInput.value, LinkInput.value);

  popupImage.classList.remove("popup_opened");
}

function openedPopupInfo() {
  popupInfo.classList.add("popup_opened");
  nameInput.value = nameProfile.textContent;
  jobInput.value = jobProfile.textContent;
}

function openedPopupImage() {
  popupImage.classList.add("popup_opened");
  formElementImage.reset();
}

function closedPopupInfo() {
  popupInfo.classList.remove("popup_opened");
}

function closedPopupImage() {
  popupImage.classList.remove("popup_opened");
}

function closedPopupCard() {
  popupCard.classList.remove("popup_opened");
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
      event.target.parentElement.remove();
    });
  elementsContainer.prepend(cardElement);
  //Слушатель открытия картинки
  cardElement
    .querySelector(".elements__image")
    .addEventListener("click", function (event) {
      console.log(event.target);
      popupCard.classList.add("popup_opened");
      popupCardImage.src = event.target.src;
      const popupCardHeading = document.querySelector(".popup-card__heading");
      console.log(popupCardHeading.textContent);
      popupCardHeading.textContent =
        cardElement.querySelector(".elements__heading").textContent;
    });
  elementsContainer.prepend(cardElement);
}

openPopupInfo.addEventListener("click", openedPopupInfo);
openPopupImage.addEventListener("click", openedPopupImage);
closePopupInfo.addEventListener("click", closedPopupInfo);
closePopupImage.addEventListener("click", closedPopupImage);
closePopupCard.addEventListener("click", closedPopupCard);
formElementInfo.addEventListener("submit", formSubmitHandlerInfo);
formElementImage.addEventListener("submit", formSubmitHandlerImage);
