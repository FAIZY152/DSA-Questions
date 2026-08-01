function MoveZeros(arr) {
    

    let x = 0
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            arr[x] = arr[i]
            x++
        } 
       }

      for (let j = x; j < arr.length; j++) {
            arr[j] = 0            
            
        }
return arr
}

console.log(MoveZeros([0,1,0,2,3,4]));
