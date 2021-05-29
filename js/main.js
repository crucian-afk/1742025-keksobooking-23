// На основе материала с JAVASCRIPT.RU https://learn.javascript.ru/task/random-int-min-max
function getRandomInt(min, max) {
  let num;
  if (max > min && min >= 0) {
    num = Math.floor( min + Math.random() * (max + 1 - min) );
  } else { num = null; }
  return num;
}
getRandomInt(0, 0);

// На основе материала с MDN о методе toFixed()
function getRandomFloat(min, max, symbolsAfterComma) {
  let num = min + Math.random() * (max - min);
  if (min < max && min >= 0) {
    num = num.toFixed(symbolsAfterComma);
  } else {
    num = null;
  }
  return num;
}

getRandomFloat(10, 8, 3);
