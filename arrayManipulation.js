function processArray(numbers) {
    // Use the map function to create a new array with the required transformations
    return numbers.map(num => {
        if (num % 2 === 0) {
            // Square the even number
            return num * num;
        } else {
            // Triple the odd number
            return num * 3;
        }
    });
}

// Example usage:
let inputArray = [1, 2, 3, 4, 5];
let resultArray = processArray(inputArray);
console.log(resultArray); // Output: [3, 4, 9, 16, 15]

// Assume processArray function is defined as given earlier
function processArray(numbers) {
    return numbers.map(num => {
        if (num % 2 === 0) {
            return num * num;
        } else {
            return num * 3;
        }
    });
}

function formatArrayStrings(strings, numbers) {
    // Ensure both arrays are of the same length
    if (strings.length !== numbers.length) {
        throw new Error("The length of the strings array must match the length of the numbers array.");
    }
    
    // Process each string based on its corresponding number
    return strings.map((str, index) => {
        let num = numbers[index];
        if (num % 2 === 0) {
            return str.toUpperCase();
        } else {
            return str.toLowerCase();
        }
    });
}

// Example usage:
let strings = ["hello", "world", "this", "is", "JavaScript"];
let numbers = [1, 2, 3, 4, 5]; // Original numbers array
let processedNumbers = processArray(numbers); // Processed numbers array

let formattedStrings = formatArrayStrings(strings, processedNumbers);
console.log(formattedStrings); // Output: ["hello", "WORLD", "this", "IS", "javascript"]
