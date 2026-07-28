let arr = [2,3,4,5,6,10,28,20]


// function LargestNm(arr) {
    
//     if (arr.length <= 0) {
//         return false
//     }
//     let Lnmbr = 1
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > Lnmbr) {
//             Lnmbr = arr[i]
//         }
//     }

//     return Lnmbr
// }

// let res = LargestNm(arr)
// console.log(res);

// do it in better way

// let arr = [-18,-30,-190,-90]
// function LargestNm(arr) {
    
//     if (arr.length <= 0) {
//         return false
//     }
//     let Lnmbr = -Infinity
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > Lnmbr) {
//             Lnmbr = arr[i]
//         }
//     }

//     return Lnmbr
// }

// let res = LargestNm(arr)
// console.log(res);

// Q:2 Find the Smallest 

function SmallestNm(arr) {
    if (arr.length <= 0 ) {
        return false
    }
let smallestNmbr = Infinity
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < smallestNmbr) {
            smallestNmbr = arr[i]
        }
    }
    return smallestNmbr
}

let res =  SmallestNm(arr)
console.log(res);
