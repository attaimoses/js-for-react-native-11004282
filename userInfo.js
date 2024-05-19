function createUserProfiles(names, modifiedNames) {
    // Ensure both arrays are of the same length
    if (names.length !== modifiedNames.length) {
        throw new Error("The length of the names array must match the length of the modified names array.");
    }

    // Create the array of user profiles
    return names.map((name, index) => {
        return {
            id: index + 1,
            originalName: name,
            modifiedName: modifiedNames[index]
        };
    });
}

// Example usage:
let names = ["Alice", "Bob", "Charlie", "David", "Eve"];
let numbers = [1, 2, 3, 4, 5]; // Original numbers array
let processedNumbers = processArray(numbers); // Processed numbers array
let modifiedNames = formatArrayStrings(names, processedNumbers);

let userProfiles = createUserProfiles(names, modifiedNames);
console.log(userProfiles);
