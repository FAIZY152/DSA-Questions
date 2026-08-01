// method 1 = BF

let arr1 = [1,2,3,0,0,0]
let arr2 = [2,5,6]



// function SortArr(arr1,m , arr2 , n) {

//     for (let i = 0; i < n; i++) {
//         arr1[m + i] = arr2[i];

//     }

//     arr1.sort((a,b) => a - b)

//     return arr1

// }
// console.log(SortArr(arr1,3,arr2,3))

// optimal 


function SortArr(arr1,m , arr2 , n) {

    let p1 = m - 1
    let p2 = n - 1

    for (let i = m + n - 1; i >= 0; i--) {
            
        // handle the p2 length
        if (p2 < 0) {
            break
        }

        if (p1 >= 0 && arr1[p1] > arr2[p2]) {
            arr1[i] = arr1[p1]
            p1--
        }else {
            arr1[i] = arr2[p2]
            p2--
        }
    }

    return arr1

}
console.log(SortArr(arr1,3,arr2,3))
