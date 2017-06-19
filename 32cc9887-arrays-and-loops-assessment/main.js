// 1.
// Without logging the values, list the value of `sports` and `total`
var sports = ['soccer', 'baseball'];
var total = sports.push('football', 'swimming');
// A:
// sports = <soccer, baseball, football, swimming>
// total = <football, swimming>


// 2.
// Using the `strings` array, wrte a function `longestString()`
// that accepts an array argument and returns the longest string in the array
var strings = ['this','is','a','collection','of','words'];

// A: 
function longestString(strings) {
    var word = "";
    for (var i = 0; i < strings.length; i++) {
        if (word.length < strings[i].length) {
            word = strings[i];
        }
    }
    return word;
}

console.assert(longestString(strings) === 'collection', {"message": "longestString should return 'collection'"});


// Use the `numbers` array for questions 3 - 8.
var numbers = [1,12,4,18,9,7,11,3,101,5,6];


// 3.
// Write a function `smallestNumber()` that accepts an array
// and returns the smallest number in the array.
// A:
function smallestNumber(numbers) {
    var num = numbers[0];
    for (var i = 0; i < numbers.length; i++) {
        if (num > numbers[i]) {
            num = numbers[i];
        }
    }
    return num;
}
console.assert(smallestNumber(numbers) === 1, {"message": "smallestNumber should return 1"});


// 4.
// Write a function `getEvens()` that accepts an array
// and returns only the even numbers in the array.
// A:
function getEvens(numbers) {
   let evenNumbs = [];
     for (i = 0; i < numbers.length; i++) {
     if (numbers[i] % 2 == 0) {
      evenNumbs.push(numbers[i]);
     }
   }
   return evenNumbs;
 }

console.assert(getEvens(numbers).toString() === '12,4,18,6', {'message': 'getEvens should return "12,4,18,6"'});


// 5.
// Write a function that accepts an array argument
// and returns the array reversed
// Hint: When looping over the array, start at the last index
// and decrement the iterator to zero
// A:

function arrayReverser(numbers) {
  let revArray = [];
    for (i = (numbers.length - 1); i >= 0; i--) {
    revArray.push (numbers[i]);
    }
  return revArray;
}

console.assert(arrayReverser(numbers).toString() === '6,5,101,3,11,7,9,18,4,12,1', {'message': 'arrayReverser should return "6,5,101,3,11,7,9,18,4,12,1"'});


// 6.
// Write a function that accepts an array argument
// and returns the sum of all of the numbers in the array
// A:
function sumArrayOfNumbers(numbers) {
    var num = 0;
    for (var i = 0; i < numbers.length; i++) {
        num += numbers [i];
    }
    return num;
}

console.assert(sumArrayOfNumbers(numbers) === 177, {'message': 'sumArrayOfNumbers should return 177'});


// 7.
// Write a function that accepts an array argument
// and returns an array of only the numbers greater than 10
// A:
function numbersOver10(numbers) {
   let nums10 = [];
     for (i = 0; i < numbers.length; i++) {
     if (numbers[i] > 10) {
      nums10.push(numbers[i]);
     }
   }
   return nums10;
 }

console.assert(numbersOver10(numbers).toString() === "12,18,11,101", {'message': 'numbersOver10 should return "12,18,11,101"'});


// 8.
// Write a function that accepts both an array and number argument
// and returns an array of only the numbers greater than the number passed to the function
// A:
function numbersOverX(numbers, X) {
   let numsX = [];
     for (i = 0; i < numbers.length; i++) {
     if (numbers[i] > X ) {
      numsX.push(numbers[i]);
     }
   }
   return numsX;
 }

console.assert(numbersOverX(numbers, 15).toString() === "18,101", {'message': 'numbersOverX should return "18,101"'});

// 9.
// Write a function `joinArrays()` that takes an array of arrays,
// and returns a single array with the contents of the second array
// listed after the contents of the first array
var numbers = [1,12,4,18,9,7,11,3,101,5,6];
var numbersTwo = [33,56,72,2,5,66,90,21,42];
// A:
function joinArrays(arraysAdd) {
    return arraysAdd[0].concat(arraysAdd[1]);

}
console.log(joinArrays([numbers, numbersTwo]).toString());
console.assert(joinArrays([numbers, numbersTwo]).toString() === '1,12,4,18,9,7,11,3,101,5,6,33,56,72,2,5,66,90,21,42', {'message': 'joinArrays should return "1,12,4,18,9,7,11,3,101,5,6,33,56,72,2,5,66,90,21,42"'});


// 10.
// Using the `instructors` array, comment the value of each variable below
var instructors = [
    ['JD','JavaScript'],
    ['Tim','JavaScript'],
    ['Brit','Ruby'],
    ['Joe','iOS'],
    ['Dan','JavaScript'],
    ['Will','JavaScript'],
    ['Calvin','JavaScript'],
    ['James','Ruby']
];

var instructorNameDiscipline = instructors[5];
// greenvIlleInstructor = ['Will','JavaScript']

var instructorOne = instructors[4][0];
// instructorOne = Dan

var instructorTwo = instructors[0][1];
// instructorTwo = JavaScript

var instructorThree = instructors[2][0];
// instructorThree = Brit