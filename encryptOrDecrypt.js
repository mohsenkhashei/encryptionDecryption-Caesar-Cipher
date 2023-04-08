const languages = require("./languages");

// const shiftCount = 100; //input shift to start encypting and decrypting
// const selectedLang = languages[0]; // input of language code
// const text = "ABC"; // input form user

function circularIteration(arr, start) {
  let result = [];
  let currentIndex = start % arr.length;

  for (let i = 0; i < arr.length; i++) {
    result.push(arr[currentIndex]);
    currentIndex = (currentIndex + 1) % arr.length;
  }

  return result;
}

function findCharInArray(array, char) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] == char) return i;
  }
}

function encryptOrDecrypt(language, newLanguageSets, text, type) {
  let result = [];
  let textArr = text.split("");
  // encrypt
  if (type == 0) {
    for (let i = 0; i < textArr.length; i++) {
      result.push(newLanguageSets[findCharInArray(language, textArr[i])]);
    }
  }
  //decrypt
  if (type == 1) {
    for (let j = 0; j < textArr.length; j++) {
      result.push(language[findCharInArray(newLanguageSets, textArr[j])]);
    }
  }
  return result;
}

// console.log(text);
// let encryptedText = encryptOrDecrypt(
//   selectedLang.chars,
//   newLanguageSets,
//   text,
//   0
// );
// console.log(encryptedText);

// //DECRYPT

// let decryptedText = encryptOrDecrypt(
//   selectedLang.chars,
//   newLanguageSets,
//   encryptedText.join(""),
//   1
// );
// console.log(decryptedText);

module.exports = function startProcess(data) {
  let text = data.text.toUpperCase();
  let language = data.language;
  let processType = data.processType;
  let shiftCount = data.shiftCount;
  let mainLanguage = languages[language].chars;

  const newLanguageSets = circularIteration(mainLanguage, shiftCount);
  let textArr = text.split(" ");
  let rs = [];
  for (let i = 0; i < textArr.length; i++) {
    rs = encryptOrDecrypt(mainLanguage, newLanguageSets, text, processType);
  }
  console.log(rs);
  let stringRs = "";
  for (j = 0; j < rs.length; j++) {
    if (rs[j] == undefined) {
      stringRs += " ";
    } else {
      stringRs += rs[j];
    }
  }
  return stringRs;
};
