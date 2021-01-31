// This is an in-line comment.
/* This is a 
multi-line comment
*/

// Declare JavaScript Variables
/*
In computer science, data is anything that is meaningful to the computer. JavaScript provides eight different data types which are undefined, null, boolean, string, symbol, bigint, number, and object.
*/

//Recursion
// let countArray = 0;

// function countUp(n) {
//     if (n < 3) {
//         return [];
//     } else {
//         const countArray = countUp(n - 1);
//         countArray.push(n);
//         return countArray;
//     }
// }
// console.log(countUp(10));

function filteredArray(arr, elem) {
    let newArr = [];
    // Only change code below this line
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].indexOf(elem) == -1) {
            newArr.push(arr[i]);
        }
    }
    // Only change code above this line
    return newArr;
}

console.log(filteredArray([
    [3, 2, 3],
    [1, 6, 3],
    [3, 13, 26],
    [19, 3, 9]
], 3));