const collection = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

const mergedArray = collection.reduce((acc, arr) => acc.concat(arr), []);

console.log(mergedArray); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]
