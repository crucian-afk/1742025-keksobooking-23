import {createPin} from './map.js';
const GET_DATA_URL = 'https://23.javascript.pages.academy/keksobooking/data';
const SEND_DATA_URL = 'https://23.javascript.pages.academy/keksobooking';

const showErrorPopup = (errorText) => {
  const div = document.createElement('div');
  div.textContent = `Произошла ошибка - ${errorText}`;
  div.style.top = '-200px';
  div.style.width = '100%';
  div.style.lineHeight = '30px';
  div.style.textAlign = 'center';
  div.style.background = 'rgba(255, 0, 0, 0.34)';
  div.style.position = 'fixed';
  div.style.left = '0';
  div.style.right = '0';
  div.style.zIndex = '1900';
  setTimeout(() => {
    div.style.top = '0';
    div.style.fontWeight = 'bold';
    div.style.transition = '0.5s';
  }, 100);
  setTimeout(() => {
    div.style.fontSize = '25px';
    div.style.transition = '0.5s';
  }, 500);
  setTimeout(() => {
    div.style.top = '-200px';
    div.style.transition = 'top 0.5s';
  }, 4000);
  setTimeout(() => {
    div.style.fontSize = '15px';
    div.style.transition = '0.5s';
  }, 3700);
  document.querySelector('body').appendChild(div);
};

const getData = (onFail) => {
  fetch(GET_DATA_URL)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
    })
    .then((ads) => {
      createPin(ads.slice(0, 10));
    })
    .catch((error) => onFail(error));
};

getData(showErrorPopup);

const sendData = (onSuccess, onFail, body) => {
  fetch(SEND_DATA_URL,
    {
      method: 'POST',
      body,
    })
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        onFail();
      }
    })
    .catch(() => onFail());
};

export {getData, sendData};
