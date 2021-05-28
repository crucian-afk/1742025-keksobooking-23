// На основе материала с JAVASCRIPT.RU https://learn.javascript.ru/task/random-int-min-max
function randomInt(min, max) {
  const num = min + Math.random() * (max + 1 - min);
  return Math.floor(num);
}
randomInt(2, 9);

// На основе материала с MDN о методе toFixed()
function randomFloat(min, max, symbolsAfterComma) {
  let num = min + Math.random() * (max - min);
  (min > max) ? num = null : num = num.toFixed(symbolsAfterComma);
  return num;
}
randomFloat(2, 9, 6);
