import {activateForm, adPriceInput, adTitleInput} from './form.js';
import {generateCard} from './show-card.js';
import './api.js';

const INITIAL_COORDS = {
  lat: 35.68053,
  lng: 139.76889,
};

const formAddress = document.querySelector('#address');

const map = L.map('map-canvas');
const guestCapacityOption = document.querySelector('#capacity option:nth-child(3)');

const renderMap = () => {
  map.
    on('load', () => {
      activateForm();
      adPriceInput.placeholder = '1000';
      guestCapacityOption.selected = true;
      formAddress.value = `${INITIAL_COORDS.lat}, ${INITIAL_COORDS.lng}`;
      formAddress.readOnly = true;
    })
    .setView(INITIAL_COORDS, 15);

  L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    },
  ).addTo(map);
};


const mainPinIcon = L.icon({
  iconUrl: 'img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [52, 52],
});

const mainPinMarker = L.marker(
  INITIAL_COORDS,
  {
    draggable: true,
    icon: mainPinIcon,
  },
);

mainPinMarker.addTo(map);

mainPinMarker.on('move', (evt) => {
  const coords = evt.target.getLatLng();
  formAddress.value = `${coords.lat.toFixed(5)}, ${coords.lng.toFixed(5)}`;
});

const resetButton = document.querySelector('.ad-form__reset');
const resetAll = () => {
  mainPinMarker.setLatLng(
    INITIAL_COORDS,
  );
  formAddress.value = `${INITIAL_COORDS.lat}, ${INITIAL_COORDS.lng}`;
  map.setView(INITIAL_COORDS, 15);
  adPriceInput.placeholder = '1000';
  adPriceInput.value = '';
  guestCapacityOption.selected = true;
  adTitleInput.value = '';
};
resetButton.addEventListener('click', resetAll);

const createPin = (array) => {
  array.forEach((arr) => {
    const icon = L.icon({
      iconUrl: 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg',
      iconSize: [40, 40],
      iconAnchor: [20, 40],
    });

    const marker = L.marker(
      arr.location,
      {
        icon,
      },
    );

    marker
      .addTo(map)
      .bindPopup(
        generateCard(arr),
        {
          keepInView: true,
        },
      );
  });
};

export {createPin, renderMap, resetAll};
