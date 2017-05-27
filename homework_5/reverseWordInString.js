var newJs = 'JavaScript is cool languages with awesome community';

function reverseWordInStr(word) {

  var str = word.split(' ');
  let arr = [];

  for (let i = 0; i < str.length; i++) {
    let newStr = str[i].split('').reverse().join('');
    arr.push(newStr);
  }

  return arr.join(' ');
}

console.log(reverseWordInStr(newJs));
