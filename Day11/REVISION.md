# Day 11 - Kadane's Algorithm

## Problem: Maximum Subarray Sum

**Problem:** Find the contiguous subarray with the largest sum.

### Pattern: Kadane's Algorithm (Dynamic Programming)
**Time Complexity:** O(n)  
**Space Complexity:** O(1)

---

## The Algorithm

### Dry Run
```javascript
arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
currentSum = 0
maxSum = 0

Step 1: i=0, arr[0]=-2
  - currentSum = 0 + (-2) = -2
  - maxSum = max(-2, 0) = 0
  - currentSum < 0? YES → reset currentSum = 0
  State: currentSum=0, maxSum=0

Step 2: i=1, arr[1]=1
  - currentSum = 0 + 1 = 1
  - maxSum = max(1, 0) = 1  ← Update!
  - currentSum < 0? NO
  State: currentSum=1, maxSum=1

Step 3: i=2, arr[2]=-3
  - currentSum = 1 + (-3) = -2
  - maxSum = max(-2, 1) = 1
  - currentSum < 0? YES → reset currentSum = 0
  State: currentSum=0, maxSum=1

Step 4: i=3, arr[3]=4
  - currentSum = 0 + 4 = 4
  - maxSum = max(4, 1) = 4  ← Update!
  - currentSum < 0? NO
  State: currentSum=4, maxSum=4

Step 5: i=4, arr[4]=-1
  - currentSum = 4 + (-1) = 3
  - maxSum = max(3, 4) = 4
  - currentSum < 0? NO
  State: currentSum=3, maxSum=4

Step 6: i=5, arr[5]=2
  - currentSum = 3 + 2 = 5
  - maxSum = max(5, 4) = 5  ← Update!
  - currentSum < 0? NO
  State: currentSum=5, maxSum=5

Step 7: i=6, arr[6]=1
  - currentSum = 5 + 1 = 6
  - maxSum = max(6, 5) = 6  ← Update!
  - currentSum < 0? NO
  State: currentSum=6, maxSum=6

Step 8: i=7, arr[7]=-5
  - currentSum = 6 + (-5) = 1
  - maxSum = max(1, 6) = 6
  - currentSum < 0? NO
  State: currentSum=1, maxSum=6

Step 9: i=8, arr[8]=4
  - currentSum = 1 + 4 = 5
  - maxSum = max(5, 6) = 6
  - currentSum < 0? NO
  State: currentSum=5, maxSum=6

Final: maxSum = 6
Winning subarray: [4, -1, 2, 1] = 6 ✓
```

---

## Visual Representation

### Tracking Current Sum
```
Array: [-2, 1, -3, 4, -1, 2, 1, -5, 4]

Current Sum Evolution:
Index 0: -2 → negative, reset to 0
Index 1:  1 → positive, keep going
Index 2: -2 → negative, reset to 0
Index 3:  4 → start new sequence
Index 4:  3 → continue (4-1)
Index 5:  5 → continue (3+2)
Index 6:  6 → continue (5+1) ← Peak!
Index 7:  1 → continue (6-5)
Index 8:  5 → continue (1+4)

Maximum reached: 6 at index 6
```

### Subarray Visualization
```
Array: [-2, 1, -3, 4, -1, 2, 1, -5, 4]

Possible subarrays with their sums:
[-2] = -2
[1] = 1
[-3] = -3
[4] = 4
[4,-1] = 3
[4,-1,2] = 5
[4,-1,2,1] = 6 ← Maximum!
[4,-1,2,1,-5] = 1
[4,-1,2,1,-5,4] = 5
```

---

## Key Insight: Why Reset?

### When Current Sum Goes Negative
```
arr = [5, -3, 2]

Option 1: Keep negative sum
currentSum = 5
currentSum = 5 + (-3) = 2
currentSum = 2 + 2 = 4
Total: 4

Option 2: Start fresh when negative
currentSum = 5
currentSum = 5 + (-3) = 2 (positive, keep)
currentSum = 2 + 2 = 4
Total: 4

But consider: [5, -10, 2]
Option 1: 5 + (-10) + 2 = -3
Option 2: 5 + (-10) = -5 (reset!)
         then 2 = 2 (better!)

If carrying forward gives negative,
starting fresh is always better!
```

### The Logic
```
If currentSum < 0:
  - Adding it to next element makes next element smaller
  - Better to start fresh from next element
  - Reset currentSum to 0

Example:
currentSum = -5
next = 3

Include previous: -5 + 3 = -2
Start fresh: 3

Starting fresh is better!
```

---

## Algorithm Variants

### Standard Kadane's (Handles All Negative)
```javascript
function maxSubArray(arr) {
    let currentSum = arr[0]  // Start with first element
    let maxSum = arr[0]
    
    for (let i = 1; i < arr.length; i++) {
        // Either extend existing or start new
        currentSum = Math.max(arr[i], currentSum + arr[i])
        maxSum = Math.max(maxSum, currentSum)
    }
    
    return maxSum
}

// This handles all-negative arrays correctly
arr = [-3, -2, -5, -1]
// Returns -1 (the least negative)
```

### Your Version (Assumes Some Positive)
```javascript
function maxSubArray(arr) {
    let currentSum = 0
    let maxSum = 0
    
    for (let i = 0; i < arr.length; i++) {
        currentSum += arr[i]
        maxSum = Math.max(currentSum, maxSum)
        
        if (currentSum < 0) {
            currentSum = 0
        }
    }
    
    return maxSum
}

// Works great when at least one positive exists
// Returns 0 for all-negative arrays
```

---

## Step-by-Step Example: Simple Case

### Array: [1, -2, 3, 4]
```
i=0, num=1:
  currentSum = 0 + 1 = 1
  maxSum = max(1, 0) = 1
  1 < 0? NO
  State: current=1, max=1

i=1, num=-2:
  currentSum = 1 + (-2) = -1
  maxSum = max(-1, 1) = 1
  -1 < 0? YES → reset current=0
  State: current=0, max=1

i=2, num=3:
  currentSum = 0 + 3 = 3
  maxSum = max(3, 1) = 3
  3 < 0? NO
  State: current=3, max=3

i=3, num=4:
  currentSum = 3 + 4 = 7
  maxSum = max(7, 3) = 7
  7 < 0? NO
  State: current=7, max=7

Final: 7
Best subarray: [3, 4]
```

---

## Why Kadane's is Genius

### Brute Force Approach: O(n³)
```javascript
// Check every possible subarray
for i in range(n):
    for j in range(i, n):
        sum = 0
        for k in range(i, j+1):
            sum += arr[k]
        maxSum = max(maxSum, sum)

// Three nested loops!
```

### Better Brute Force: O(n²)
```javascript
// Accumulate sum while building subarray
for i in range(n):
    sum = 0
    for j in range(i, n):
        sum += arr[j]
        maxSum = max(maxSum, sum)

// Two nested loops
```

### Kadane's: O(n)
```javascript
// Single pass!
for i in range(n):
    currentSum += arr[i]
    maxSum = max(maxSum, currentSum)
    if currentSum < 0:
        currentSum = 0

// One loop!
```

---

## Decision Tree Visualization

```
At each element, ask:

"Should I extend the previous subarray,
 or start a new one?"

If previous sum is positive:
  → Extend (adding helps)
  
If previous sum is negative:
  → Start fresh (negative hurts)

Example: [-2, 3]
At 3:
  Option A: -2 + 3 = 1 (extend)
  Option B: 3 (start fresh) ← Better!
```

---

## Edge Cases

### 1. All Negative Numbers
```javascript
arr = [-5, -2, -8, -1]

Your version:
- currentSum keeps resetting to 0
- maxSum stays 0
- Returns 0 (wrong for LeetCode!)

Standard Kadane's:
- Tracks least negative
- Returns -1 ✓
```

### 2. All Positive Numbers
```javascript
arr = [1, 2, 3, 4]

currentSum keeps growing:
0→1→3→6→10
maxSum = 10 (entire array) ✓
```

### 3. Single Element
```javascript
arr = [5]
maxSum = 5 ✓

arr = [-5]
Your version: 0
Standard: -5 ✓
```

### 4. Alternating Positive/Negative
```javascript
arr = [5, -3, 5, -3, 5]

Track: 0→5→2→7→4→9
maxSum = 9 ✓
Better than just sum of positives (15)
because subarray must be contiguous!
```

---

## Key Takeaways

1. **Greedy + DP**: Make local optimal choice at each step
2. **Reset on Negative**: Negative sum hurts future elements
3. **Track Maximum**: Update max whenever current exceeds it
4. **Single Pass**: O(n) time, O(1) space
5. **Contiguous**: Must be consecutive elements

---

## Interview Tips

### What to Say
- "This is Kadane's Algorithm"
- "Key insight: if running sum goes negative, start fresh"
- "At each element, decide: extend or restart"
- Time: O(n), Space: O(1)

### What to Ask
- "Should I handle all-negative arrays?" (clarifies variant)
- "Do you need the subarray indices or just the sum?"
- "Can the array be empty?"

### Drawing It Out
```
Draw the array with running sums above:
  0  1 -2  4  3  5  6  1  5
[-2, 1,-3, 4,-1, 2, 1,-5, 4]

Show where you reset (negative sums)
Show where maxSum updates
```

---

## Common Mistakes

### 1. Not Resetting
```javascript
// ❌ Wrong
currentSum += arr[i]
maxSum = Math.max(currentSum, maxSum)
// Never resets when negative!

// ✅ Correct
currentSum += arr[i]
maxSum = Math.max(currentSum, maxSum)
if (currentSum < 0) {
    currentSum = 0
}
```

### 2. Wrong Initialization
```javascript
// ❌ Wrong for all-negative
let maxSum = 0  // Should be -Infinity or arr[0]

// ✅ Better
let maxSum = arr[0]  // Handles all cases
```

### 3. Checking Reset Before Update
```javascript
// ❌ Wrong order
if (currentSum < 0) currentSum = 0
maxSum = Math.max(currentSum, maxSum)
// Might miss the actual max!

// ✅ Correct order
maxSum = Math.max(currentSum, maxSum)
if (currentSum < 0) currentSum = 0
```

---

## Practice Variations

1. **Max Product Subarray**: Track max and min (negatives flip)
2. **Max Circular Subarray**: Use Kadane's twice
3. **Max Average Subarray**: Divide by length
4. **Max Sum with K elements**: Sliding window + Kadane's

All build on this core concept!

---

## Complexity Summary

| Approach    | Time  | Space | Notes                |
|-------------|-------|-------|----------------------|
| Brute Force | O(n³) | O(1)  | Check all subarrays  |
| Better BF   | O(n²) | O(1)  | Accumulate as we go  |
| Kadane's    | O(n)  | O(1)  | Optimal! Single pass |

Kadane's is the gold standard for this problem! 🏆
