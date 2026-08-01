function ReverseInt(x) {

    let xCopy = x;
    x = Math.abs(x)

    let rev = 0
    while (x > 0) {
        let last = x % 10
        rev = (10 * rev) + last
        x = Math.floor(x /10)
    }
// add a power limit to not exceed 
    let limit = Math.pow(2,31)
    if (rev < -limit || rev > limit) return 0

    return xCopy < 0 ? -rev: rev
}

console.log(ReverseInt(121));   
console.log(ReverseInt(432));   
console.log(ReverseInt(1221));  
console.log(ReverseInt(-121)); 