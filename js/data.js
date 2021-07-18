import {getRandomInt, getRandomFloat, getRandomArrayElement, createArr} from './util.js';
// в принципе, этот файл теперь полностью можно удалить?
const TYPES = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const TIME_OPTIONS = ['12:00', '13:00', '14:00'];
const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const PHOTO_SOURCES = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];
const TITLE_OPTIONS = ['Предложение ограничено!', 'Мгновенная бронь', 'Отличный вид!', 'Лучшая цена!', 'Акция!'];

const generateAds = (amountOfAds = 1) => {
  const advertsList = [];
  for (let i = 1; i <= amountOfAds; i++) {
    const lat = getRandomFloat(35.65000, 35.70000, 5);
    const lng = getRandomFloat(139.70000, 139.80000, 5);
    const rooms = getRandomInt(1, 10);
    const ad = {
      author: {
        avatar: '',
      },
      offer: {
        title: getRandomArrayElement(TITLE_OPTIONS),
        address: `${lat}, ${lng}`,
        price: getRandomInt(0, 1000000),
        type: getRandomArrayElement(TYPES),
        rooms,
        guests: getRandomInt(rooms, 100),
        checkin: `${getRandomArrayElement(TIME_OPTIONS)}`,
        checkout: `${getRandomArrayElement(TIME_OPTIONS)}`,
        features: createArr([...FEATURES], FEATURES.length),
        description: `Отличное место в ${getRandomInt(1, 500)} км от моря. Звоните, пишите!`,
        photos: createArr([...PHOTO_SOURCES], PHOTO_SOURCES.length),
      },
      location: {
        lat,
        lng,
      },
    };
    if (i < 10) {
      ad.author.avatar = `img/avatars/user0${getRandomInt(1, 9)}.png`;
    } else {
      ad.author.avatar = `img/avatars/user${getRandomInt(10, 11)}.png`;
    }

    advertsList.push(ad);
  }

  return advertsList;
};

const adsArray = generateAds(10);

export {generateAds, adsArray};
