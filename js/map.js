import {activateForm} from './form.js';
import {generateCard} from './show-card.js';
import {adsArray} from './data.js';

const INITIAL_COORDS = {
  lat: 35.68053,
  lng: 139.76889,
};

const formAddress = document.querySelector('#address');

const map = L.map('map-canvas')
  .on('load', () => {
    activateForm();
    formAddress.disabled = true;
    formAddress.value = `${INITIAL_COORDS.lat}, ${INITIAL_COORDS.lng}`;
  })
  .setView(INITIAL_COORDS, 15);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const mainPinIcon = L.icon({
  iconUrl: 'img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
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
resetButton.addEventListener('click', () => {
  mainPinMarker.setLatLng(
    INITIAL_COORDS,
  );
  map.setView(INITIAL_COORDS, 15);
});

adsArray.forEach((adsArray) => {
  const {lat, lng} = adsArray.location;
  const icon = L.icon({
    iconUrl: 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  const marker = L.marker(
    {
      lat,
      lng,
    },
    {
      icon,
    },
  );

  marker
    .addTo(map)
    .bindPopup(
      generateCard(adsArray),
      {
        keepInView: true,
      },
    );
});
