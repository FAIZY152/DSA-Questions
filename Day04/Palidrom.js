// function Palindrom(x) {
//     if (x.length <= 1) {
//         return false
//     }
    
//     let revrs = x.toString().split("").reverse().join("")
//     let palidoromNm = Number(revrs)

//     if (palidoromNm === x) {
//         return true
//     }
//     return false
    
// }
// let x = -121
// let res = Palindrom(x)
// log it




function Palindrom(x) {

    // Negative numbers are not palindromes
    if (x < 0) {
        return false;
    }

    let original = x;
    let reverse = 0;

    while (x > 0) {
        let digit = x % 10;
        reverse = reverse * 10 + digit;
        x = Math.floor(x / 10);
    }

    // return original === reverse;
    if (original === reverse) {
        return true
    } else {
        return false
    }
}

console.log(Palindrom(121));   // true
console.log(Palindrom(432));   // false
console.log(Palindrom(1221));  // true
console.log(Palindrom(-121));  // false
