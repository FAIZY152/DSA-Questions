// for (let i = 0; i < 5; i++) {
//     console.log(i);
    
//     for (let j = 0; j < i; j++) {
//         console.log(`j: ${j}`);
        
//     }
// }

// for (let i = 0; i < 3; i++) {
//     for (let j = i; j > 0; j--) {
//         console.log(`i : ${i} j :${j}`);
        
//     }
// }

// for (let i = 5; i > 0 ; i--) {
// for (let j = 0; j < i; j++) {
//         console.log(`i : ${i} j :${j}`);
    
// }    
// }

let arr = [-2,5,-7,9,-1]
// 
// function SumEvenNumbr(arr) {
//         let sum = 0
//         for (let i = 0; i <= arr.length; i++) {
//                         if (arr[i] % 2 === 0) {
//                         sum+=arr[i]
//                         }                
//         }

//         return sum
// }

// let res = SumEvenNumbr(arr)
// console.log(res);


function RemoveNegativeNumbr(arr) {
        let newArr = []
        for (let i = 0; i < arr.length; i++) {
                        if (arr[i] > 0) {
                               newArr.push(arr[i]) 
                        }                
        }
        return newArr

}

let res = RemoveNegativeNumbr(arr)
console.log(res);
