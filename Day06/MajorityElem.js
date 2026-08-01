// BF
// function MajorityElem(arr) {
//     if (arr.length <= 0) {
//         return 0
//     }

//     let n = arr.length
//     for (let i = 0; i < arr.length; i++) {
//         let count = 0
//         for (let j = 0; j < arr.length; j++) {
//     if (arr[i] == arr[j]) {
//         count++
//     }            
//     }
//     if (count > arr.length / 2) {
//         return arr[i] // return Majority elem
//     }
//     }
     
// }

// let res = MajorityElem([2,2,1,1,1,2,2]);
// console.log(res);


// Sort way

function MajorityElem(arr) {
    if (arr.length <= 0) {
        return 0
    }
    arr.sort((a,b) => a - b)
    let count = 1
    let ans = arr[0] 
        for (let i = 1; i < arr.length; i++) {
            
            
            if (arr[i] === arr[i - 1 ]) {
                count++
            }
            else {
                count = 1
                ans = arr[i]
            }

            
        }
        if (count > arr.length /2) {
                return ans
            }
     return -1
}

let res = MajorityElem([2,2,1,1,1,2,2]);
console.log(res);



// function MajorityElem(arr) {
//     if (arr.length <= 0) {
//         return 0
//     }
//      arr.sort((a,b)=>a-b);

//     return arr[Math.floor(arr.length/2)];
// }

// let res = MajorityElem([2,2,1,1,1,2,2]);
// console.log(res);



// Letcode accepting 

function MajorityElement(arr) {

    let candidate = null;
    let count = 0;

    for (let num of arr) {

        if (count === 0) {
            candidate = num;
        }

        if (num === candidate) {
            count++;
        } else {
            count--;
        }
    }

    return candidate;
}

console.log(MajorityElement([2,2,1,1,1,2,2]));