// bf

function SingleNumber(arr) {

    for (let i = 0; i < arr.length; i++) {
      let count = 0

    for (let j = 0; j < arr.length; j++) {
        if (arr[i] == arr[j]) {
        count++
         }
    }
   if (count === 1) {

    return arr[i]
    
}
}

}

// console.log(SingleNumber([2,2,1]));


// hash method - HANDLE  double number 

function SingleNum(arr) {
    let hash = {}
    let res = []

    for (let i = 0; i < arr.length; i++) {
        if (!hash[arr[i]]) {
            hash[arr[i]] = 1
        } else {
            hash[arr[i]]++
        }
    }

    console.log(hash);

    for (let j = 0; j < arr.length; j++) {
        if (hash[arr[j]] == 1) {
             res.push(arr[j])
        }        
    }
    return res
}

console.log(SingleNum([2,2,1,3,3,4,5,5]));

