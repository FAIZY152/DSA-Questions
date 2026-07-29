function MajorityElem(arr) {
    
    if (arr.length <= 0) {
        return false
    }
    let count = 0
    let obj = {}

    for (let i = 0; i < arr.length /2 ; i++) {
        if (arr[i] == arr[i + 1]) {
            count++
        }
    }

    return count
}

console.log(MajorityElem([2,2,1,1,1,2,2]));
