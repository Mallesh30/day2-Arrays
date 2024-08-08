// Problem 1

var strings = ["apple", "banana", "apple", "orange", "banana", "pear", "apple"];
function countOccurrences(arr) {
  return arr.reduce((acc, str) => {
    acc[str] = (acc[str] || 0) + 1;
    return acc;
  }, {});
}

// Output
const counts = countOccurrences(strings);
console.log(counts);

//------------------------------------------------------------------------------------------------

//Problem 2

function divisbileby(numbers) {
  return numbers.reduce((total, num) => {
    if (num % 3 == 0 || num % 5 == 0) {
      return total + num;
    }
    return total;
  }, 0);
}
const numbers = [7, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597];
const result = divisbileby(numbers);
console.log(result);

//--------------------------------------------------------------------------------------------------

const words = [
  "racecar",
  "hello",
  "deified",
  "world",
  "level",
  "programming",
  "radar",
  "civic",
  "javascript",
];
function isPalindrome(word) {
  // Check if the word is the same forwards and backwards
  return word === word.split("").reverse().join("");
}

function getPalindromes(wordsArray) {
  // Use filter to create a new array with only palindromes
  return wordsArray.filter(isPalindrome);
}

const palindromeWords = getPalindromes(words);
console.log(palindromeWords);

//--------------------------------------------------------------------------------------------------------

const filePaths = [
  "/images/pic1.jpg",
  "/images/pic2.png",
  "/assets/img/background.jpg",
  "/assets/img/logo.png",
  "/downloads/document.pdf",
  "/downloads/image.png",
  "/downloads/image.jpg",
];

function filterImagePaths(paths) {
  // Use filter to create a new array with only .jpg or .png files
  return paths.filter((path) => path.endsWith(".jpg") || path.endsWith(".png"));
}

const imagePaths = filterImagePaths(filePaths);
console.log(imagePaths);

//--------------------------------------------------------------------------------------------------------

var strings = [
  "Hello",
  "world",
  "this",
  "is",
  "an",
  "example",
  "array",
  "of",
  "strings",
];
function reverseStrings(stringsArray) {
  // Map each string to its reversed version
  return stringsArray.map((str) => str.split("").reverse().join(""));
}

const reversedStrings = reverseStrings(strings);
console.log(reversedStrings);

//--------------------------------------------------------------------------------------------------------
const sentences = [
  "The quick brown fox jumps over the lazy dog.",
  "She sells seashells by the seashore.",
  "I have a dream that one day this nation will rise up.",
  "To be or not to be, that is the question.",
  "In the beginning, God created the heavens and the earth.",
];

function countWordsInSentences(sentencesArray) {
  return sentencesArray.map((sentence, index) => {
    // Split the sentence into words and count them
    const wordCount = sentence.split(" ").length;
    // Construct the output string
    return `Sentence ${index + 1} contains ${wordCount} words.`;
  });
}

const sentenceWordCounts = countWordsInSentences(sentences);
console.log(sentenceWordCounts);

//---------------------------------------------------------------------------------------------

const sumOfSquaresOfOdds = numbers
  .filter((num) => num % 2 !== 0) // Filter out the odd numbers
  .map((num) => num * num) // Square each odd number
  .reduce((acc, curr) => acc + curr, 0); // Sum the squares

console.log(sumOfSquaresOfOdds); // Output: 84

//----------------------------------------------------------------------------------------------------

let subjectsHash = {
  1: "Javascript",
  2: "HTML",
  3: "CSS",
  4: "Java",
  5: "Rust",
};

let students = [
  { id: 1, name: "Prateek", subjectID: 5 },
  { id: 2, name: "Yogesh", subjectID: 2 },
  { id: 3, name: "Nrupul", subjectID: 4 },
  { id: 4, name: "Prateek", subjectID: 1 },
];

let newobj = students.reduce((acc, student) => {
  const subject = subjectsHash[student.subjectID];

  if (acc[student.name]) {
    acc[student.name].push(subject);
  } else {
    acc[student.name] = [subject];
  }

  return acc;
}, {});

console.log(newobj);

//---------------------------------------------------------------------------------------------------------
