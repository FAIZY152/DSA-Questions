# Day 02 - Finding Extremes in Arrays

## Problem 1: Find Largest Number

**Problem:** Find the maximum value in an array.

### Pattern: Single Pass Tracking
**Time Complexity:** O(n)  
**Space Complexity:** O(1)

### Dry Run
```javascript
arr = [2, 3, 4, 5, 6, 10, 28, 20]
Lnmbr = -Infinity

Step 1: arr[0]=2  > -Infinity? YES → Lnmbr = 2
Step 2: arr[1]=3  > 2?         YES → Lnmbr = 3
Step 3: arr[2]=4  > 3?         YES → Lnmbr = 4
Step 4: arr[3]=5  > 4?         YES → Lnmbr = 5
Step 5: arr[4]=6  > 5?         YES → Lnmbr = 6
Step 6: arr[5]=10 > 6?         YES → Lnmbr = 10
Step 7: arr[6]=28 > 10?        YES → Lnmbr = 28  ← Maximum
Step 8: arr[7]=20 > 28?        NO  → Lnmbr = 28

Final: 28
```

### Why -Infinity?
```javascript
// ❌ Wrong: Initialize with 0 or 1
arr = [-18, -30, -190, -90]
Lnmbr = 0
// All numbers are negative, but 0 > all of them
// Result: 0 (WRONG!)

// ✅ Correct: Initialize with -Infinity
arr = [-18, -30, -190, -90]
Lnmbr = -Infinity
// Step 1: -18 > -Infinity → Lnmbr = -18
// Step 2: -30 > -18? NO
// Step 3: -190 > -18? NO
// Step 4: -90 > -18? NO
// Result: -18 (CORRECT!)
```

### Flow
1. Initialize max = -Infinity (handles negative numbers)
2. Loop through array
3. If current element > max → update max
4. Return max

---

## Problem 2: Find Smallest Number

**Problem:** Find the minimum value in an array.

### Pattern: Single Pass Tracking
**Time Complexity:** O(n)  
**Space Complexity:** O(1)

### Dry Run
```javascript
arr = [2, 3, 4, 5, 6, 10, 28, 20]
smallestNmbr = Infinity

Step 1: arr[0]=2  < Infinity? YES → smallestNmbr = 2  ← Minimum
Step 2: arr[1]=3  < 2?        NO  → smallestNmbr = 2
Step 3: arr[2]=4  < 2?        NO  → smallestNmbr = 2
Step 4: arr[3]=5  < 2?        NO  → smallestNmbr = 2
Step 5: arr[4]=6  < 2?        NO  → smallestNmbr = 2
Step 6: arr[5]=10 < 2?        NO  → smallestNmbr = 2
Step 7: arr[6]=28 < 2?        NO  → smallestNmbr = 2
Step 8: arr[7]=20 < 2?        NO  → smallestNmbr = 2

Final: 2
```

### Flow
1. Initialize min = Infinity (handles large numbers)
2. Loop through array
3. If current element < min → update min
4. Return min

---

## Problem 3: Find Second Largest Number

**Problem:** Find the second maximum value in an array (excluding duplicates of max).

### Pattern: Two-Variable Tracking
**Time Complexity:** O(n)  
**Space Complexity:** O(1)

### Dry Run
```javascript
arr = [2, 3, 5, 14, 13, 15, 15]
firstLargest = -Infinity
secondLargest = -Infinity

Step 1: arr[0]=2
  - 2 > -Infinity? YES
  - secondLargest = -Infinity (old firstLargest)
  - firstLargest = 2
  State: first=2, second=-Infinity

Step 2: arr[1]=3
  - 3 > 2? YES
  - secondLargest = 2 (old firstLargest)
  - firstLargest = 3
  State: first=3, second=2

Step 3: arr[2]=5
  - 5 > 3? YES
  - secondLargest = 3 (old firstLargest)
  - firstLargest = 5
  State: first=5, second=3

Step 4: arr[3]=14
  - 14 > 5? YES
  - secondLargest = 5 (old firstLargest)
  - firstLargest = 14
  State: first=14, second=5

Step 5: arr[4]=13
  - 13 > 14? NO
  - 13 > 5 AND 13 ≠ 14? YES
  - secondLargest = 13
  State: first=14, second=13

Step 6: arr[5]=15
  - 15 > 14? YES
  - secondLargest = 14 (old firstLargest)
  - firstLargest = 15
  State: first=15, second=14  ← Final State

Step 7: arr[6]=15
  - 15 > 15? NO
  - 15 > 14 AND 15 ≠ 15? NO (duplicate of first)
  State: first=15, second=14

Final: 14
```

### Key Logic
```javascript
if (arr[i] > firstLargest) {
    // New maximum found
    secondLargest = firstLargest  // Save old max as second
    firstLargest = arr[i]         // Update max
}
else if (arr[i] > secondLargest && arr[i] !== firstLargest) {
    // Not larger than max, but larger than second
    // AND not equal to max (avoid duplicates)
    secondLargest = arr[i]
}
```

### Flow
1. Initialize both trackers to -Infinity
2. Loop through array:
   - If element > firstLargest:
     - Move firstLargest to secondLargest
     - Update firstLargest
   - Else if element > secondLargest AND element ≠ firstLargest:
     - Update secondLargest only
3. Return secondLargest

---

## Visual Representation

### Second Largest Evolution
```
Array: [2, 3, 5, 14, 13, 15, 15]

After processing each element:
[2]              → first=2,  second=-∞
[2,3]            → first=3,  second=2
[2,3,5]          → first=5,  second=3
[2,3,5,14]       → first=14, second=5
[2,3,5,14,13]    → first=14, second=13
[2,3,5,14,13,15] → first=15, second=14 ✓
[...,15]         → first=15, second=14 (duplicate ignored)
```

---

## Common Edge Cases

### 1. Array with Less Than 2 Elements
```javascript
arr = [5]
// firstLargest = 5, secondLargest = -Infinity
// Return -Infinity or handle as error
```

### 2. All Elements Are Same
```javascript
arr = [7, 7, 7, 7]
// firstLargest = 7, secondLargest = -Infinity
// No second largest exists
```

### 3. Negative Numbers
```javascript
arr = [-5, -2, -8, -1]
// firstLargest = -1, secondLargest = -2
```

---

## Key Takeaways

1. **Use -Infinity/Infinity** for initialization to handle all cases
2. **Single Pass** is sufficient for all three problems
3. **Second Largest** requires checking for duplicates of max
4. **Two Variables** can track first and second in one loop
5. **Edge Cases**: Always handle arrays with < 2 elements

---

## Interview Tips

- Mention the importance of -Infinity for negative arrays
- Explain why you check `arr[i] !== firstLargest`
- Time complexity is O(n) - single pass solution
- Space complexity is O(1) - only using variables
- Consider what to return when second largest doesn't exist

---

## Complexity Summary

| Problem         | Time | Space | Variables Needed |
|-----------------|------|-------|------------------|
| Largest         | O(n) | O(1)  | 1                |
| Smallest        | O(n) | O(1)  | 1                |
| Second Largest  | O(n) | O(1)  | 2                |
