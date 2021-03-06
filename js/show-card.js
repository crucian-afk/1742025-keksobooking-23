const popupElement = document.querySelector('#card').content
  .querySelector('.popup');


const houseType = {
  flat: 'Квартира',
  bungalow: 'Бунгало',
  house: 'Дом',
  palace: 'Дворец',
  hotel: 'Отель',
};

const generateCard = (ad) => {
  const card = popupElement.cloneNode(true);
  const popupTitle = card.querySelector('.popup__title');
  const popupAddress = card.querySelector('.popup__text--address');
  const popupPrice = card.querySelector('.popup__text--price');
  const popupType = card.querySelector('.popup__type');
  const popupCapacity = card.querySelector('.popup__text--capacity');
  const popupTime = card.querySelector('.popup__text--time');
  const popupFeatures = card.querySelectorAll('.popup__feature');
  const popupDescription = card.querySelector('.popup__description');
  const popupPhotos = card.querySelector('.popup__photos');
  const popupPhoto = card.querySelector('.popup__photo');
  const popupAvatar = card.querySelector('.popup__avatar');
  popupTitle.textContent = ad.offer.title;
  popupAddress.textContent = ad.offer.address;
  popupPrice.textContent = `${String(ad.offer.price)} ₽/ночь`;
  popupCapacity.textContent = `${ad.offer.rooms} комнаты для ${ad.offer.guests} гостей`;
  popupTime.textContent = `Заезд после ${ad.offer.checkin}, выезд до ${ad.offer.checkout}`;
  popupAvatar.src = ad.author.avatar;

  if (popupDescription) {
    popupDescription.textContent = ad.offer.description;
  } else {
    popupDescription.remove();
  }

  popupPhoto.remove();

  const photosFragment = document.createDocumentFragment();
  if (ad.offer.photos) {
    for (let i = 0; i < ad.offer.photos.length; i++) {
      const photo = document.createElement('img');
      photo.src = ad.offer.photos[i];
      photo.classList.add('popup__photo');
      photo.width = 45;
      photo.height = 40;
      photo.alt = 'Фотография жилья';
      photosFragment.appendChild(photo);
    }

    popupPhotos.appendChild(photosFragment);
  }

  popupType.textContent = houseType[ad.offer.type];

  for (const feat of popupFeatures) {
    let hasFeature = false;
    if (ad.offer.features) {
      for (let i = 0; i < popupFeatures.length; i++) {
        if (feat.classList.contains(`popup__feature--${ad.offer.features[i]}`)) {
          hasFeature = true;
        }
        if (!hasFeature) {
          feat.remove();
        }
      }
    }
  }
  return card;
};

export {generateCard};
