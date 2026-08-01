// Bf 

function MajorityEl(arr) {

    let n = arr.length;

    for (let i = 0; i < n; i++) {
        let count = 0
        console.log(arr[i]);
        
        for (let j = i + 1; j < n; j++) {
            console.log(`arr[i] : ${arr[i]} : arr[j] : ${arr[j]}`);
            
            if (arr[i] === arr[j]) {
                count++
            }
        }

        if (count > Math.floor(n / 2)) {
            return arr[i]
        }
    }
    return -1
    
}

console.log(MajorityEl([2,2,1,1,1,2,2]));



function MajorityElem(arr) {
    
    let candidate = null
    let count = 0

    for (let num of arr) {
        if (count === 0) {
            candidate = num
        }

        if (candidate === num) {
            count++
        }else {
            count--
        }
    }

    return candidate
}

// console.log(MajorityElem([2,2,1,1,1,2,2]));
