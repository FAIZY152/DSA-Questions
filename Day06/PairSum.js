let arr = [2,3,7,15,20,6,8];

function TwoPairSum(arr, target) {

    arr.sort((a,b)=>a-b);

    console.log("Sorted:", arr);

  for (let i = 0; i < arr.length; i++) {

    for (let j = i + 1; j < arr.length; j++) {
        
        if (arr[i] + arr[j] == target) {
            return [arr[i],arr[j]]
        }
    }

}
return -1
}

// console.log(TwoPairSum(arr,35));


// optimzed approach
// go with 2 ponters 


function TwoPair(arr,target) {
    arr.sort((a,b)=>a-b);

    let x = arr.length - 1
    let i = 0

    while (i < x) {
        if (arr[i] + arr[x] > target) {
            x--
            
        } else if (arr[i] + arr[x] < target) {
            i++
        } else if (arr[i] + arr[x] == target) {

            return [arr[i],arr[x]]
        }
    }

}




console.log(TwoPair(arr,35));


function twoSum(nums, target) {

    let map = {};

    for (let i = 0; i < nums.length; i++) {

        let need = target - nums[i];

        if (need in map) {
            return [map[need], i];
        }

        map[nums[i]] = i;
    }

    return [];
}

console.log(twoSum([2,7,11,15], 9));