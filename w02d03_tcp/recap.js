const fs = require("fs");

const splitStringIntoArray = (text) => {
  const textArray = text.split(" ");
  return textArray;
}

fs.readFile('./index.html',{encoding: 'utf-8'}, (err, data) => {
  const arrayOfWords = splitStringIntoArray(data);
  console.log(arrayOfWords);
})

console.log(splitStringIntoArray("this is some text"))