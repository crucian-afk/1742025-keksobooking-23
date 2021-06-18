import {generateAds} from './data.js';

const advertise = generateAds(1)[0];
const card = document.querySelector('#card').content;
const popupTitle = card.querySelector('.popup__title');
const popupAddress = card.querySelector('.popup__text--address');
const popupPrice = card.querySelector('.popup__text--price');
const popupType = card.querySelector('.popup__type');
const popupCapacity = card.querySelector('.popup__text--capacity');
const popupTime = card.querySelector('.popup__text--time');
const popupFeatures = card.querySelector('.popup__feature');
const popupDescription = card.querySelector('.popup__description');
const popupPhotos = card.querySelector('.popup__photos');
const popupPhoto = card.querySelector('.popup__photo');
const popupAvatar = card.querySelector('.popup__avatar');

popupTitle.textContent = advertise.offer.title;
popupAddress.textContent = advertise.offer.address;
popupPrice.textContent = `${String(advertise.offer.price)} ₽/ночь`;
popupCapacity.textContent = `${advertise.offer.rooms} комнаты для ${advertise.offer.guests} гостей`;
popupTime.textContent = `Заезд после ${advertise.offer.checkin}, выезд до ${advertise.offer.checkout}`;
popupFeatures.textContent = advertise.offer.features.join(', ');
popupAvatar.src = advertise.author.avatar;

if (popupDescription) {
  popupDescription.textContent = advertise.offer.description;
} else {
  popupDescription.remove();
}

for (let i = 0; i < advertise.offer.photos.length; i++) {
  popupPhotos.appendChild(popupPhoto);
  popupPhoto.src = advertise.offer.photos[i];
}

switch (advertise.offer.type) {
  case 'flat':
    popupType.textContent = 'Квартира';
    break;
  case 'bungalow':
    popupType.textContent = 'Бунгало';
    break;
  case 'house':
    popupType.textContent = 'Дом';
    break;
  case 'palace':
    popupType.textContent = 'Дворец';
    break;
  case 'hotel':
    popupType.textContent = 'Отель';
    break;
  default:
    popupType.textContent = 'Неопределенный тип жилья';
}

const adField = document.querySelector('#map-canvas');

adField.appendChild(card.cloneNode(true));
