//Print odd numbers in an array in IIFE

(function (myArray) {
    for (var i = 0; i < myArray.length; i++) {
        if (myArray[i] % 2 != 0) {
            console.log(myArray[i])
        }
    }
})([1, 2, 3, 4])

//Convert all the strings to title caps in a string array in IIFE

(function(str) {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(' ');
  })("aswanth is my name");
  


//)Sum of all numbers in an array in IIFE

(function (myArray) {
    var sum = 0;
    for (var i = 0; i < myArray.length; i++) {
        sum = sum + myArray[i];
    }
    return sum;
})([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])

//Return all the prime numbers in an array in anonymous

function filterPrimeNumbers(numArray) {
    const primeNumbers = numArray.filter((number) => {
      if (number < 2) return false;
      for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) return false;
      }
      return true;
    });
    console.log(primeNumbers);
  }
 
  //check palindrome in array using anonymous

  const checkPalindromes = function(arr, n) 
  {
    for (let i = 0; i < n; i++) {
        let ans = isPalindrome(arr[i]);
        if (ans == false)
            return false;
    }
    return true;
};

//duplicates in array by  IIFE

(function(array){
    let dup = [...new Set(array)];
    console.log(dup);
   })([1,1,2,3,4])


//rotate k in array by anonymous

const ktimes = function(array , k){
    k = k % a.length;
      if(k < 0){
        k += a.length;
      }

      reverse(a, 0, a.length - k - 1);
      reverse(a, a.length - k, a.length - 1);
      reverse(a, 0, a.length - 1);
    }

    //duplicates in array by anoymous


