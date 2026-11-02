/**
 * Palindrome of a Number
 * - Reverses the number using a loop (no toString/split/reverse).
 * - Negative numbers are treated as not a palindrome.
 */
function checkPalindrome(inputNumber) {
  // Negative numbers are not palindromes
  if (inputNumber < 0) {
    return "The number is not a palindrome";
  }

  let remainingNumber = inputNumber;
  let reversedNumber = 0;

  // Reverse the number using a loop
  while (remainingNumber > 0) {
    const lastDigit = remainingNumber % 10;
    reversedNumber = reversedNumber * 10 + lastDigit;
    remainingNumber = Math.floor(remainingNumber / 10);
  }

  // Compare original and reversed numbers
  if (inputNumber === reversedNumber) {
    return "The number is a palindrome";
  } else {
    return "The number is not a palindrome";
  }
}

// Sample test data from the assignment
const testData = [
  { input: 121, expected: "The number is a palindrome" },
  { input: 1331, expected: "The number is a palindrome" },
  { input: 123, expected: "The number is not a palindrome" },
  { input: -121, expected: "The number is not a palindrome" },
  { input: 10, expected: "The number is not a palindrome" },
];

for (const { input, expected } of testData) {
  const actual = checkPalindrome(input);
  const status = actual === expected ? "PASS" : "FAIL";
  console.log(`Input: ${input} | Output: ${actual} | ${status}`);
}