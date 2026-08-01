let arr = [7,1,5,3,6,4]

// BF
function Buysll(arr) {
    let maxProfit = 0
for (let i = 0; i < arr.length; i++) {   
    for (let j = i + 1; j < arr.length ; j++) {
        let profit = arr[j] - arr[i]
        maxProfit = Math.max(maxProfit,profit)
    }
}
return maxProfit

}

// optimzed 

function Buysell(arr) {
    let min = arr[0]
    let maxProfit = 0
for (let i = 1; i < arr.length; i++) {
    
    if (arr[i] < min) {
        min = arr[i]
    }

    let profit = arr[i] - min
    
    if (profit > maxProfit) {
        maxProfit = profit
    }
}
return maxProfit
}

console.log(Buysell(arr));




