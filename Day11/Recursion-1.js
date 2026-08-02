function sum(n) {
    
    if (n === 0) {
        return
    }
console.log(n);

    sum(n - 1)

}

// sum(10)


function print(n) {
    if (n < 1) {
        return
    }
    console.log(n);

    print(n - 1)

}

// print(10)


// print 1 to n

function print1(n) {
    if (n === 0) {
        return;
    }

    print1(n - 1);
    console.log(n);
}

print1(10);