// method 1;
let arr = [2,3,5,14,13,15,15]

function SecondLargest(arr) {

    if (arr.length < 2) {
        return false
    }

    let firstLarest = -Infinity
    let secondLargest = -Infinity
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > firstLarest) {
            secondLargest = firstLarest
            firstLarest = arr[i]
        }else if (arr[i] > secondLargest && arr[i] !== firstLarest) {
                secondLargest = arr[i]            
        }
    }
    return secondLargest
}

let res = SecondLargest(arr)
console.log(res);
