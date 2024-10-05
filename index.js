
// Function to find even numbers in an array
function findEvenNumbers(arr) {
    return arr.filter(num => num % 2 === 0);
}

// Function to find odd numbers in an array
function findOddNumbers(arr) {
    return arr.filter(num => num % 2 !== 0);
}

// Example array
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Finding even and odd numbers
let evenNumbers = findEvenNumbers(numbers);
let oddNumbers = findOddNumbers(numbers);

// Output results
console.log("Even Numbers:", evenNumbers);
console.log("Odd Numbers:", oddNumbers);

// Pattern printing (e.g., right-angled triangle)
let rows = 5;
for (let i = 1; i <= rows; i++) {
    let pattern = '';
    for (let j = 1; j <= i; j++) {
        pattern += '* ';
    }
    console.log(pattern);
}
