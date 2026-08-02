// bf

function powx(x,n) {

    let power = Math.abs(n)
    let ans = 1

    for (let i = 0; i < power; i++) {
        ans = ans * x
        
    }

    if (n < 0) {
            return 1 / ans   
    }
    return ans
}

// console.log(powx(2,10));



// optimal way
var myPow = function(x, n) {

    let power = Math.abs(n);
    let ans = 1;

    while (power > 0) {

        if (power % 2 === 1) {
            ans *= x;
        }

        x *= x;
        power = Math.floor(power / 2);
    }

    return n < 0 ? 1 / ans : ans;
};

