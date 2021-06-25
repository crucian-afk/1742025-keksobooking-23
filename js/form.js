const MIN_TITLE_LENGTH = 30;
const MAX_TITLE_LENGTH = 100;
const MAX_PRICE = 1000000;

const adForm = document.querySelector('.ad-form');
adForm.action = 'https://23.javascript.pages.academy/keksobooking';

const adTitleInput = document.querySelector('#title');
adTitleInput.minlength = 30;
adTitleInput.maxlength = 100;
adTitleInput.required = true;

adTitleInput.addEventListener('input', () => {
  const valueLength = adTitleInput.value.length;

  if (valueLength < MIN_TITLE_LENGTH) {
    adTitleInput.setCustomValidity(`Ещё ${ MIN_TITLE_LENGTH - valueLength } символов`);
  } else if (valueLength > MAX_TITLE_LENGTH) {
    adTitleInput.setCustomValidity(`Слишком длинно, удалите ${ valueLength - MAX_TITLE_LENGTH } символов`);
  } else {
    adTitleInput.setCustomValidity('');
  }

  adTitleInput.reportValidity();
});

const adTypeInput = document.querySelector('#type');
const adPriceInput = document.querySelector('#price');
adPriceInput.maxlength = 7;
adPriceInput.required = true;

let minPrice = 0;

adTypeInput.addEventListener('input', () => {
  const testObject = {
    flat: 1000,
    bungalow: 0,
    hotel: 3000,
    house: 5000,
    palace: 10000,
  };

  minPrice = testObject[adTypeInput.value];
  adPriceInput.placeholder = minPrice;
  adPriceInput.min = minPrice;
});

adPriceInput.addEventListener('input', () => {

  if (adPriceInput.value < minPrice) {
    adPriceInput.setCustomValidity(`Минимальная цена ${ minPrice }`);
  } else if (adPriceInput.value > MAX_PRICE) {
    adPriceInput.setCustomValidity(`Максимальная цена ${ MAX_PRICE }`);
  } else {
    adPriceInput.setCustomValidity('');
  }

  adPriceInput.reportValidity();
});

const roomCapacity = document.querySelector('#room_number');
const guestsCapacity = document.querySelector('#capacity');

roomCapacity.addEventListener('change', () => {
  if (Number(roomCapacity.value) === 100) {
    guestsCapacity.value = 0;
  } else {
    guestsCapacity.value = roomCapacity.value;
  }
});

guestsCapacity.addEventListener('change', () => {
  if (Number(guestsCapacity.value) === 0) {
    roomCapacity.value = 100;
  } else {
    roomCapacity.value = guestsCapacity.value;
  }
});
