// Brut force method

let arr = [1,2,3,4,5,6,7]

function ContainsDuplicate(arr) {
   for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                return true;
            }
        }
   }
   return false;
}

console.log(ContainsDuplicate(arr)
);

// Time complexity: O(n^2) 
// space complexity: O(1)


// sorting way 




function ContainsDuplicate(arr) {
   let sortedArr = arr.sort((a, b) => a - b);
    console.log(sortedArr);

    for (let i = 0; i < sortedArr.length - 1; i++) {
        if (sortedArr[i]=== sortedArr[i + 1]) {
            return true;
        }
    }
    return false;

}

console.log(ContainsDuplicate(arr));
// Time complexity: O(n log n)
// space complexity: O(1)

// Set method - Best Method 

function ContainsDuplicate(arr) {
  let hash = new Set()
  for (let i = 0; i < arr.length; i++) {
    if (hash.has(arr[i])) {
        return true
    }
    hash.add(arr[i])
  }
  return false
}

// console.log(ContainsDuplicate(arr));

// time complexity = O(n)


// Conclution : 
// | Approach         | Time           | Space                             | Notes                                                                                              |
// | ---------------- | -------------- | --------------------------------- | -------------------------------------------------------------------------------------------------- |
// | Brute Force      | `O(n²)`        | `O(1)`                            | Compare every pair of elements.                                                                    |
// | Sorting          | `O(n log n)`   | Depends on sorting implementation | Sort first, then check adjacent elements.                                                          |
// | Hash Set (`Set`) | `O(n)` average | `O(n)`                            | Fastest average-case solution and the one most interviewers expect after the brute-force approach. |


