function RemoveElem(arr , elem) {
    
// Two pointers

let x = 0
for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== elem) {
        arr[x] = arr[i]
        x++
    }
    
}


return x
    
}

console.log(RemoveElem([1,1,2,2,3, 5 , 10] , 10 ));
