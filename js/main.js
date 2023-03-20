const textArea = document.querySelector('.textarea');
const btn = document.querySelector('.btn');
let words = document.querySelector('#result-words');
let symbols = document.querySelector('#result-symbols');

btn.addEventListener('click', () => {
  let wordsLength = textArea.value.split(' ').length;
  words.innerHTML = wordsLength;
  let symbolsLength = textArea.value.split('').length;
  symbols.innerHTML = symbolsLength;
});
