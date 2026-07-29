function RemoveDuplicates(arr) {
    
// Two pointers

let x = 0
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[x]) {
        x = x + 1
        arr[x] = arr[i]    
    }

}


// return all the unique elements
// so x is starting from its count from 0 make it x + 1 return to get real count of uique elemnts 
return x + 1
    
}

console.log(RemoveDuplicates([1,1,2,2,3,3,4,4,5]));
