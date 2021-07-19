function getRandomInt(min= 0, max = Number.MAX_SAFE_INTEGER) {
  let num;
  if (max > min && min >= 0) {
    num = Math.floor( min + Math.random() * (max + 1 - min) );
  } else { num = null; }
  return num;
}

function getRandomFloat(min= 0, max = Number.MAX_SAFE_INTEGER, symbolsAfterComma = 0) {
  let num = min + Math.random() * (max - min);
  if (min < max && min >= 0) {
    num = num.toFixed(symbolsAfterComma);
  } else {
    num = null;
  }
  return num;
}

const getRandomArrayElement = (elements) => elements[getRandomInt(0, elements.length - 1)];
const createArr = ([...source], maxLength) => Array.from(
  { length: Math.min(source.length, 1 + Math.random() * maxLength | 0) },
  () => source.splice(Math.random() * source.length | 0, 1)[0],
);

const isEscEvent = (evt) => evt.key === 'Escape' || evt.key === 'Esc';

export {getRandomInt, getRandomFloat, getRandomArrayElement, createArr, isEscEvent};
