const languages = require("./languages");

const encryptionType = {
  ENCRYPT: 0,
  DECRYPT: 1,
};

const inputEncryptionType = encryptionType.ENCRYPT;
const shiftCount = 15; //input shift to start encypting and decrypting
const selectedLang = languages[0]; // input of language code
const text = "ABC"; // input form user

const len = selectedLang.chars.length; // length of the selected language

function newLanguageAfterShift(array, arrayLength, shiftCount) {
  // Create an auxiliary array of twice size.
  let b = new Array(2 * arrayLength);

  // Copy the input array 'a' to the auxiliary array 'b' twice
  // so that we can rotate the array circularly
  for (let i = 0; i < arrayLength; i++) {
    b[i] = b[arrayLength + i] = array[i];
  }

  let result = [];
  for (let i = shiftCount; i < arrayLength + shiftCount; i++) {
    result.push(b[i]);
  }
  //   console.log(result);
  return result;
}

const newLanguageSets = newLanguageAfterShift(
  selectedLang.chars,
  len,
  shiftCount
);

function findCharInArray(array, char) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] == char) return i;
  }
}

function findCharHolder(language, newLanguageSets, text, type) {
  let result = [];
  let textArr = text.split("");

  // encrypt
  if (type === 0) {
    for (let i = 0; i < textArr.length; i++) {
      result.push(newLanguageSets[findCharInArray(language, textArr[i])]);
    }
  }
  //decrypt
  if (type === 1) {
    for (let j = 0; j < textArr.length; j++) {
      result.push(language[findCharInArray(newLanguageSets, textArr[j])]);
    }
  }
  return result;
}

console.log(text);
let encryptedText = findCharHolder(
  selectedLang.chars,
  newLanguageSets,
  text,
  0
);
console.log(encryptedText);

//DECRYPT

let decryptedText = findCharHolder(
  selectedLang.chars,
  newLanguageSets,
  encryptedText.join(""),
  1
);
console.log(decryptedText);
