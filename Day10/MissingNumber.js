// bf method 
// function MissingNumber(arr) {

//     let n = arr.length;

//     for (let i = 0; i <= n; i++) {

//         let found = false;

//         for (let j = 0; j < n; j++) {

//             if (arr[j] === i) {
//                 found = true;
//                 break;
//             }
//         }

//         if (!found) {
//             return i;
//         }
//     }
// }


// sorting method 
function MissingNumber(arr) {
    arr.sort((a,b) => a - b)

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== i ) {
            return i
        }
    }
    return -1
}


// console.log(MissingNumber([0,1]));


// optimal way  - Sum


function MissingNum(arr) {
    let n = arr.length
    let totalSum = n * (n + 1) / 2

    let partialSum = 0

    for (let i = 0; i < arr.length; i++) {
            partialSum = partialSum + arr[i]   
    }
    return totalSum - partialSum
}

console.log(MissingNum([0,1,3,4,5]));

