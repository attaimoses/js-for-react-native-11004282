# js-for-react-native-11004282

TASK 1
The function processArray takes a single argument, numbers, which is an array of numbers. 
The map method is used to create a new array by applying a transformation function to each element of the original array. 
For each element num in the array, the function checks if it is even or odd using the modulus operator%. 
Conditional logic: If num% 2 === 0 (i.e., num is even), the function squares the number (num *num).
Otherwise, it triples the number (num * 3).

Example Usage:
An example input array [1, 2, 3, 4, 5] is processed to produce the output [3, 4, 9, 16, 15].
The result is logged to the console using console.log.
This function can handle arrays of any length and will correctly process each number according to whether it is even or odd.


TASK 2
The processThe Array function continues as originally described, processing the array of integers by squaring even values and triple odd numbers.
Function formatArrayStrings accepts two arguments: an array of strings and an array of processed integers.
It initially determines if the lengths of the two arrays are the same. 
If not, it generates an error to guarantee that the arrays are compatible.

The map function generates a new array by changing each string according to its associated number.
For each string str and its associated number at the same position in the numbers array:
If num% 2 === 0 (meaning the number is even), the text is changed to uppercase using str.toUpperCase().
Otherwise, the string is changed into

Example:
The numbers array is processed using the processArray function to produce processedNumbers.
The formatArrayStrings function is called with strings and processedNumbers, and the result is logged to the console, showing the modified strings.
This code ensures that each string in the strings array is modified based on its corresponding number in the numbers array processed by processArray.


TASK 3
Input Validation: The function first checks if the lengths of the names array and the modifiedNames array are the same. 
If not, it throws an error to ensure the arrays are compatible. 

Creating User Profiles: 
The map method is used to create a new array of objects. 
Each object contains three properties: 
id: An auto-incremented identifier starting from 1, which is achieved by using the index + 1 expression. 
originalName: The name from the names array. 
modifiedName: The corresponding modified name from the modifiedNames array. Example Usage: Example arrays names and numbers are provided. 

The numbers array is processed using the processArray function to produce processedNumbers. 
The formatArrayStrings function is called with names and processedNumbers to produce modifiedNames.
The createUserProfiles function is called with names and modifiedNames, and the result is logged to the console, showing an array of user profile objects. 
This implementation ensures that each name in the names array is paired with its corresponding modified name, and each pair is included in an object with a unique ID.









