# Day 03 - Nested Loops & Pattern Printing

## Problem 1: Sum of Even Numbers

**Problem:** Calculate the sum of all even numbers in an array.

### Pattern: Conditional Accumulation
**Time Complexity:** O(n)  
**Space Complexity:** O(1)

### Dry Run
```javascript
arr = [-2, 5, -7, 9, -1]
sum = 0

Step 1: arr[0]=-2, -2 % 2 = 0? YES (even) → sum = 0 + (-2) = -2
Step 2: arr[1]=5,   5 % 2 = 0? NO  (odd)  → sum = -2
Step 3: arr[2]=-7, -7 % 2 = 0? NO  (odd)  → sum = -2
Step 4: arr[3]=9,   9 % 2 = 0? NO  (odd)  → sum = -2
Step 5: arr[4]=-1, -1 % 2 = 0? NO  (odd)  → sum = -2

Final: -2
```

### Flow
1. Initialize sum = 0
2. Loop through array
3. Check if element % 2 === 0 (even)
4. If even → add to sum
5. Return sum

---

## Problem 2: Remove Negative Numbers

**Problem:** Filter out all negative numbers from an array.

### Pattern: Conditional Collection
**Time Complexity:** O(n)  
**Space Complexity:** O(k) where k = positive numbers count

### Dry Run
```javascript
arr = [-2, 5, -7, 9, -1]
newArr = []

Step 1: arr[0]=-2 > 0? NO  → skip
Step 2: arr[1]=5  > 0? YES → newArr = [5]
Step 3: arr[2]=-7 > 0? NO  → skip
Step 4: arr[3]=9  > 0? YES → newArr = [5, 9]
Step 5: arr[4]=-1 > 0? NO  → skip

Final: [5, 9]
```

### Flow
1. Create empty result array
2. Loop through input array
3. If element > 0 → push to result
4. Return result array

---

## Problem 3: Nested Loops Understanding

### Example 1: Basic Nested Loop
```javascript
for (let i = 0; i < 3; i++) {
    for (let j = i; j > 0; j--) {
        console.log(`i: ${i}, j: ${j}`)
    }
}
```

### Dry Run
```
i=0: j loop doesn't run (j=0, 0>0 is false)
     Output: (nothing)

i=1: j=1, 1>0? YES → Output: i:1, j:1
     j=0, 0>0? NO  → Stop

i=2: j=2, 2>0? YES → Output: i:2, j:2
     j=1, 1>0? YES → Output: i:2, j:1
     j=0, 0>0? NO  → Stop
```

**Complete Output:**
```
i:1, j:1
i:2, j:2
i:2, j:1
```

### Example 2: Reverse Counter
```javascript
for (let i = 5; i > 0; i--) {
    for (let j = 0; j < i; j++) {
        console.log(`i: ${i}, j: ${j}`)
    }
}
```

### Dry Run
```
i=5: j runs from 0 to 4 (5 times)
     Output: i:5,j:0  i:5,j:1  i:5,j:2  i:5,j:3  i:5,j:4

i=4: j runs from 0 to 3 (4 times)
     Output: i:4,j:0  i:4,j:1  i:4,j:2  i:4,j:3

i=3: j runs from 0 to 2 (3 times)
     Output: i:3,j:0  i:3,j:1  i:3,j:2

i=2: j runs from 0 to 1 (2 times)
     Output: i:2,j:0  i:2,j:1

i=1: j runs from 0 to 0 (1 time)
     Output: i:1,j:0
```

---

## Problem 4: Pattern Printing - Triangle

### Pattern 1: Right-Aligned Triangle
```
*
**
***
****
*****
```

### Code
```javascript
for (let i = 0; i < 5; i++) {
    let row = ""
    for (let j = 0; j < i; j++) {
        row += "*"
    }
    console.log(row)
}
```

### Dry Run
```
i=0: j runs 0 times → row = ""      → Output: (empty line)
i=1: j runs 1 time  → row = "*"     → Output: *
i=2: j runs 2 times → row = "**"    → Output: **
i=3: j runs 3 times → row = "***"   → Output: ***
i=4: j runs 4 times → row = "****"  → Output: ****
```

---

### Pattern 2: Inverted Triangle
```
*****
****
***
**
*
```

### Code
```javascript
for (let i = 5; i >= 1; i--) {
    let row = ""
    for (let j = 1; j <= i; j++) {
        row += "*"
    }
    console.log(row)
}
```

### Dry Run
```
i=5: j runs from 1 to 5 → row = "*****" → Output: *****
i=4: j runs from 1 to 4 → row = "****"  → Output: ****
i=3: j runs from 1 to 3 → row = "***"   → Output: ***
i=2: j runs from 1 to 2 → row = "**"    → Output: **
i=1: j runs from 1 to 1 → row = "*"     → Output: *
```

---

### Pattern 3: Right-Aligned Triangle with Spaces
```
----*
---**
--***
-****
*****
```

### Code
```javascript
function Pattern(n) {
    for (let i = 1; i <= 5; i++) {
        let row = ""
        
        // Add spaces
        for (let j = 0; j < 5 - i + 1; j++) {
            row += "-"
        }
        
        // Add stars
        for (let k = 0; k < i + 1; k++) {
            row += "*"
        }
        
        console.log(row)
    }
}
```

### Dry Run
```
i=1: spaces: 5-1+1=5 → "-----"  stars: 1+1=2 → "**"    → "-----**"
i=2: spaces: 5-2+1=4 → "----"   stars: 2+1=3 → "***"   → "----***"
i=3: spaces: 5-3+1=3 → "---"    stars: 3+1=4 → "****"  → "---****"
i=4: spaces: 5-4+1=2 → "--"     stars: 4+1=5 → "*****" → "--*****"
i=5: spaces: 5-5+1=1 → "-"      stars: 5+1=6 → "******"→ "-******"
```

### Pattern Formula
```
For n rows:
Row i:
  - Spaces = n - i + 1
  - Stars  = i + 1
```

---

## Nested Loop Patterns Summary

### How Inner Loop Count Relates to Outer Loop

| Pattern Type           | Inner Loop Condition | Visual Result        |
|------------------------|----------------------|----------------------|
| `j < i`                | Increases with i     | Growing triangle     |
| `j < n - i`            | Decreases with i     | Inverted triangle    |
| `j = i; j > 0; j--`    | Countdown from i     | Reverse print        |
| Multiple inner loops   | -                    | Complex patterns     |

---

## Key Takeaways

1. **Single Loop**: For simple operations (sum, filter)
2. **Nested Loops**: For 2D operations (patterns, matrices)
3. **Inner Loop Depends on Outer**: Creates triangular patterns
4. **String Building**: Build row string, then print once
5. **Multiple Inner Loops**: Can create spaces + stars patterns

---

## Time Complexity Analysis

### Single Loop Problems
```javascript
// Sum even numbers: O(n)
// Remove negatives: O(n)
```

### Nested Loop Problems
```javascript
// Triangle pattern (n=5):
// i=0: 0 iterations
// i=1: 1 iteration
// i=2: 2 iterations
// i=3: 3 iterations
// i=4: 4 iterations
// Total = 0+1+2+3+4 = 10 = n(n-1)/2 = O(n²)
```

---

## Interview Tips

- For patterns, draw the output first
- Count spaces and stars for each row
- Find the formula relating row number to spaces/stars
- Build row string first, then print (cleaner)
- Nested loops are O(n²) time complexity

---

## Pattern Building Strategy

1. **Identify the pattern** (increasing/decreasing)
2. **Count elements per row** (spaces + characters)
3. **Find relationship** between row number and counts
4. **Implement outer loop** for rows
5. **Implement inner loop(s)** for spaces and characters
6. **Test with small n** first
