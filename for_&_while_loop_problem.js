// for Loop Questions and Solutions in JavaScript

// 1. Write a program to print the numbers from 1 to 10.

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// 2. Use a for loop to print all even numbers between 1 and 20.

let number = 20;
let evenNumber = [];
let oddNumber = [];

for (let i = 1; i <= number; i++) {
  if (i % 2 === 0) {
    evenNumber.push(i);
  } else {
    oddNumber.push(i);
  }
}

console.log(evenNumber);

console.log(oddNumber);

// 3. Write a for loop to calculate the sum of numbers from 1 to 100.

let numbers = 100;
let sum = 0;

for (let i = 0; i <= numbers; i++) {
  sum += i;
}

console.log(sum);

// 4. Use a for loop to print the multiplication table of a given number (5).

let multiplicationNumber = 5;

for (let i = 1; i <= 10; i++) {
  console.log(`${multiplicationNumber} * ${i} = ${multiplicationNumber * i}`);
}

// 5. Write a for loop to reverse a string ("hello" → "olleh").

let str = "hello";

for (let i = str.length - 1; i >= 0; i--) {
  console.log(str[i]);
}

// 6. Use a for loop to find the factorial of a given number (5! = 120).

let factorial = 5;
let fact = 1;

for (let i = 0; i <= factorial; i++) {
  if (i === 0 || i === 1) {
    fact = 1;
  } else {
    fact *= i;
  }
}

console.log(fact);

// 7. Write a for loop to count the number of vowels in a string ("javascript" → 3).

let stringCharacter = "javascript";
let count = 0;

for (let i = 0; i <= stringCharacter.length; i++) {
  if (
    stringCharacter[i] === "a" ||
    stringCharacter[i] === "e" ||
    stringCharacter[i] === "i" ||
    stringCharacter[i] === "o" ||
    stringCharacter[i] === "u" ||
    stringCharacter[i] === "A" ||
    stringCharacter[i] === "E" ||
    stringCharacter[i] === "I" ||
    stringCharacter[i] === "O" ||
    stringCharacter[i] === "U"
  ) {
    count++;
  }
}

console.log(count);

// 8. Use a for loop to print all prime numbers between 1 and 50.

let primeNumber = 50;
let prime = [];

for (let i = 1; i <= primeNumber; i++) {
  let isPrime = true;
  for (let j = 2; j < i; j++) {
    if (i % j === 0) {
      isPrime = false;
    }
  }
  if (isPrime) {
    prime.push(i);
  }
}

console.log(prime);

// 9. Write a program to find the maximum number in an array of numbers.

let num = [10, 20, 5, 30, 10, 100, 70, 10, 89];
let preNum = 0;
let prvNum = 0;
let maxNum = 0;

for (let i = 0; i <= num.length; i++) {
  if (num[i] > preNum) {
    prvNum = preNum;
    preNum = num[i];
    if (prvNum < preNum) {
      maxNum = preNum;
    }
  }
}

console.log(maxNum);

// 10. Use a for loop to create a new array containing only the even numbers from a given array.

let arrNumbers = [10, 20, 5, 30, 10, 100, 70, 10, 89];
let evenNumbers = [];

for (let i = 0; i <= arrNumbers.length; i++) {
  if (arrNumbers[i] % 2 === 0) {
    evenNumbers.push(arrNumbers[i]);
  }
}

console.log(evenNumbers);

// while Loop Questions and Solutions in JavaScript

// 11. Write a while loop to print numbers from 1 to 10.

let j = 1;
while (j <= 10) {
  console.log(j);
  j++;
}

// 12. Use a while loop to find the sum of digits of a given number (123 → 6).

let sumNumber = 123;
let sumNumbers = 0;

while (sumNumber > 0) {
  sumNumbers += sumNumber % 10;
  sumNumber = Math.floor(sumNumber / 10);
}

console.log(sumNumbers);

// 13. Write a while loop to print the Fibonacci sequence up to the 10th term.

let n = 10;
let n1 = 0;
let n2 = 1;
let nextTerm;

for (let i = 1; i <= n; i++) {
  console.log(n1);
  nextTerm = n1 + n2;
  n1 = n2;
  n2 = nextTerm;
}

// 14. Use a while loop to reverse a number (123 → 321).

let reverseNumber = 123;
let strNum = reverseNumber.toString();
let rev = "";

let k = strNum.length - 1;
while (k >= 0) {
  rev += strNum[k];
  k--;
}

rev = Number(rev);
console.log(rev);

// 15. Write a while loop to check if a number is a palindrome (121 → true).

let palindromeNumber = 121;
let strPalindrome = palindromeNumber.toString();
let revPalindrome = "";
let i = strPalindrome.length - 1;

while (i >= 0) {
  revPalindrome += strPalindrome[i];
  i--;
}

revPalindrome = Number(revPalindrome);
console.log(palindromeNumber === revPalindrome);

// 16. Use a while loop to find the GCD (Greatest Common Divisor) of two numbers.

// 17. Write a while loop to print all odd numbers between 1 and 50.

let oddNumbers = [];
i = 1;

while (i <= 50) {
  if (i % 2 !== 0) {
    oddNumbers.push(i);
  }
  i++;
}

console.log(oddNumbers);

// 18. Use a while loop to simulate a countdown from 10 to 1.

i = 10;
while (i >= 1) {
  console.log(i);
  i--;
}

// 19. Write a while loop to find the smallest number in an array ([10, 20, 5, 30] → 5).

let arrNum = [10, 20, 5, 30];
i = 0;
let smallestNum = arrNum[i];

while (i <= arrNum.length) {
  if (arrNum[i] < smallestNum) {
    smallestNum = arrNum[i];
  }
  i++;
}

console.log(smallestNum);

// 20. Use a while loop to repeatedly prompt the user for input until they enter "quit".
