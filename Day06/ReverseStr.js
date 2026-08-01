function reverseString(str) {
    let result = "";

    for (let i = str.length - 1; i >= 0; i--) {
        result += str[i];
    }

    return result;
}

// console.log(reverseString("hello"));


// do it in optimized way swap 

function ReverseStr(arr) {
    
    let left = 0
    let right = arr.length - 1

    while (left < right) {
        let temp = arr[left]
        arr[left] = arr[right]
        arr[right] = temp
        left++
        right--
    }

    return arr
}

let res = ReverseStr(['h' , 'e' , 'l' , 'l' , 'o'])
console.log(res);
