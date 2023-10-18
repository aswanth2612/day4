
// Print odd numbers in an array

const Arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function OddNumbers(array) {
    return array.filter(number => {
        return number % 2 !== 0;
    });
}
console.log(OddNumbers(Arr));

// Convert all the strings to title caps in a string array

function titleCaps(str) {
    return str.split(' ').map((word) => {
        return word[0].toUpperCase() + word.slice(1)
    }).join(' ')
}

console.log(titleCaps("convert all the strings to title caps in a string array"));

// Sum of all numbers in an array

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = 0;
arr.forEach(value => {
    sum += value;
});
console.log(sum);

// Return all the prime numbers in an array

let myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
function findPrime(myArray) {
    myArray = myArray.filter((myNumbers) => {
        for (var i = 2; i <= Math.sqrt(myNumbers); i++) {
            if (myNumbers % i === 0) {
                return false;
            }
        }
        return true;
    });
    console.log(myArray);
}
findPrime(myNumbers);

// Return all the palindromes in an array

const array = (words) =>
    words.filter((word) =>
        word.split("").reverse().join("") === word
    );
console.log(([ "mom", "madam", "bob","non","aswanth"]));