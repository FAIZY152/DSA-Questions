function MaxSubarray(arr) {
    let currentSum = 0
    let maxSum = nums[0];

    for (let i = 0; i < arr.length; i++) {
        currentSum += arr[i]
        maxSum = Math.max(currentSum , maxSum)

        if (currentSum < 0) {
            currentSum = 0
        }
    }

    return maxSum
}

console.log(MaxSubarray([-2,1,-3,4,-1,2,1,-5,4]));
