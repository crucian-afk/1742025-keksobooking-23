const MIN_TITLE_LENGTH = 30;
const MAX_TITLE_LENGTH = 100;
const MAX_PRICE = 1000000;

const adForm = document.querySelector('.ad-form');
const adTitleInput = document.querySelector('#title');
const adTypeInput = document.querySelector('#type');
const adPriceInput = document.querySelector('#price');
const roomCapacity = document.querySelector('#room_number');
const guestsCapacity = document.querySelector('#capacity');

adForm.action = 'https://23.javascript.pages.academy/keksobooking';

adTitleInput.minlength = 30;
adTitleInput.maxlength = 100;
adTitleInput.required = true;

adPriceInput.maxlength = 7;
adPriceInput.required = true;

const houseTypesPrices = {
  flat: 1000,
  bungalow: 0,
  hotel: 3000,
  house: 5000,
  palace: 10000,
};

adTitleInput.addEventListener('input', (evt) => {
  const valueLength = evt.target.value.length;

  if (valueLength < MIN_TITLE_LENGTH) {
    evt.target.setCustomValidity(`Ещё ${ MIN_TITLE_LENGTH - valueLength } символов`);
  } else if (valueLength > MAX_TITLE_LENGTH) {
    evt.target.setCustomValidity(`Слишком длинно, удалите ${ valueLength - MAX_TITLE_LENGTH } символов`);
  } else {
    evt.target.setCustomValidity('');
  }

  evt.target.reportValidity();
});

let houseType = adTypeInput.value;

const priceValidation = (target) => {
  if (target.value < houseTypesPrices[houseType]) {
    target.setCustomValidity(`Минимальная цена ${ houseTypesPrices[houseType] }`);
  } else if (target.value > MAX_PRICE) {
    target.setCustomValidity(`Максимальная цена ${ MAX_PRICE }`);
  } else {
    target.setCustomValidity('');
  }
  target.reportValidity();
};

let minPrice = 0;

adTypeInput.addEventListener('change', (evt) => {
  houseType = evt.target.value;
  minPrice = houseTypesPrices[evt.target.value];
  adPriceInput.placeholder = minPrice;
  adPriceInput.min = minPrice;
  priceValidation(adPriceInput);
});

adPriceInput.addEventListener('input', (evt) => {
  priceValidation(evt.target);
});

let amountOfRooms = 1;
const roomsForGuests = {
  '1': [1],
  '2': [1, 2],
  '3': [1, 2, 3],
  '100': [0],
};

const roomsValidation = (target) => {
  if (!roomsForGuests[amountOfRooms].includes(Number(target.value))) {
    target.setCustomValidity('Неверное количество комнат');
  } else {
    target.setCustomValidity('');
  }
  target.reportValidity();
};

roomCapacity.addEventListener('change', (evt) => {
  amountOfRooms = evt.target.value;
  roomsValidation(guestsCapacity);
});
guestsCapacity.addEventListener('change', (evt) => {
  roomsValidation(evt.target);
});

const fieldsets = document.querySelectorAll('fieldset');
const mapFilters = document.querySelector('.map__filters');
const mapFilter = document.querySelector('.map__filter');

const deactivateForm = () => {
  adForm.classList.add('ad-form--disabled');
  mapFilters.classList.add('map__filters--disabled');
  mapFilter.disabled = true;
  fieldsets.forEach((fieldset) => {
    fieldset.disabled = true;
  });
};

deactivateForm();

const activateForm = () => {
  adForm.classList.remove('ad-form--disabled');
  mapFilters.classList.remove('map__filters--disabled');
  mapFilter.disabled = false;
  fieldsets.forEach((fieldset) => {
    fieldset.disabled = false;
  });
};

const timeIn = document.querySelector('#timein');
const timeOut = document.querySelector('#timeout');

timeIn.addEventListener('change', () => {
  timeOut.value = timeIn.value;
});

timeOut.addEventListener('change', () => {
  timeIn.value = timeOut.value;
});

export {activateForm};
