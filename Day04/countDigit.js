// Count Digit : devide method

// let nums = 23
function CountDigt(nums) {
    let count = 0

// convert it into postive nmbrs
    if (nums < 0) {
        // nums  = Math.abs(nums)
    }

// another way to convert into positive
nums = nums < 0 ? -nums:nums
    while (nums > 0) {
        //  nums % 10; -> thats only use to get last digit         
        nums = Math.floor(nums / 10)
        count++
    }
    return count;
    
}

let nums = -23132
let res = CountDigt(nums)
console.log(res);


// function CountDigt(nums) {
//     let count = 0
//     let str = nums.toString()

//     for (let i = 0; i < str.length; i++) {
//         count++
//     }
//     return count
// }

// let res = CountDigt(nums)
// console.log(res);
