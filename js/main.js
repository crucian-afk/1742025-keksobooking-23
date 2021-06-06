// На основе материала с JAVASCRIPT.RU https://learn.javascript.ru/task/random-int-min-max
function getRandomInt(min= 0, max = Number.MAX_SAFE_INTEGER) {
  let num;
  if (max > min && min >= 0) {
    num = Math.floor( min + Math.random() * (max + 1 - min) );
  } else { num = null; }
  return num;
}
getRandomInt(0, 0);

// На основе материала с MDN о методе toFixed()
function getRandomFloat(min= 0, max = Number.MAX_SAFE_INTEGER, symbolsAfterComma = 0) {
  let num = min + Math.random() * (max - min);
  if (min < max && min >= 0) {
    num = num.toFixed(symbolsAfterComma);
  } else {
    num = null;
  }
  return num;
}

getRandomFloat(10, 8, 3);

const generateTenAds = () => {
  const advertsList = [];
  for (let i = 1; i <= 10; i++) {
    const TYPES = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
    const TIME_OPTIONS = ['12:00', '13:00', '14:00'];
    const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
    const PHOTO_SOURCES = [
      'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
      'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
      'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
    ];
    const TITLE_OPTIONS = ['Предложение ограничено!', 'Мгновенная бронь', 'Отличный вид!', 'Лучшая цена!', 'Акция!'];
    const lat = getRandomFloat(35.65000, 35.70000, 5);
    const lng = getRandomFloat(139.70000, 139.80000, 5);
    const rooms = getRandomInt(1, 10);
    const authorAvatar = 'img/avatars/default.png';
    const getRandomArrayElement = (elements) => elements[getRandomInt(0, elements.length - 1)];
    const createArr = ([...source], maxLength) => Array.from(
      { length: Math.min(source.length, 1 + Math.random() * maxLength | 0) },
      () => source.splice(Math.random() * source.length | 0, 1)[0],
    );
    const ad = {
      author: {
        avatar: i <= 8 ? `img/avatars/user0${i}.png` : authorAvatar,
      },
      offer: {
        title: getRandomArrayElement(TITLE_OPTIONS),
        address: `${lat}, ${lng}`,
        price: getRandomInt(0, 50000),
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
    advertsList.push(ad);
  }

  return advertsList;
};

generateTenAds();
