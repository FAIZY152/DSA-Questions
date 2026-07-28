// loop 

// Searh the Number in array if found return the index of with number if not then return the -1


let arr = [2,4,56,8,9,10,-2,-7,-6]


function SearhNum(arr,elem) {

 if (arr.length < 1) {
    return false
 }

 for (let i = 0; i < arr.length; i++) {
        if (arr[i] === elem) {
            return console.log(`found: ${arr[i]} at index ${i}`);
        }    
 }
 return console.log("-1");
 
    

}

// SearhNum(arr,5);


// return the negative numbers from array 

function NegativeNm(arr) {
if (arr.length < 1) {
    return false
 }
 let res = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            res.push(arr[i])
        }        
    }
   return res
    
}



let result = NegativeNm(arr)
console.log(result);
