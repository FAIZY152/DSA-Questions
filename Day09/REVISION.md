# Day 09 - Consecutive Sequences & Array Manipulation

## Problem 1: Max Consecutive Ones

**Problem:** Find the maximum number of consecutive 1s in a binary array.

### Pattern: Counter Reset
**Time Complexity:** O(n)  
**Space Complexity:** O(1)

### Dry Run
```javascript
arr = [1, 0, 1, 1, 0, 1]
currentCount = 0
maxCount = 0

Step 1: i=0, arr[0]=1
  - Is 1? YES
  - currentCount = 0 + 1 = 1
  - 1 > 0? YES → maxCount = 1
  State: currentCount=1, maxCount=1
  
Step 2: i=1, arr[1]=0
  - Is 1? NO
  - currentCount = 0 (reset)
  State: currentCount=0, maxCount=1

Step 3: i=2, arr[2]=1
  - Is 1? YES
  - currentCount = 0 + 1 = 1
  - 1 > 1? NO → maxCount = 1
  State: currentCount=1, maxCount=1

Step 4: i=3, arr[3]=1
  - Is 1? YES
  - currentCount = 1 + 1 = 2
  - 2 > 1? YES → maxCount = 2  ← Update!
  State: currentCount=2, maxCount=2

Step 5: i=4, arr[4]=0
  - Is 1? NO
  - currentCount = 0 (reset)
  State: currentCount=0, maxCount=2

Step 6: i=5, arr[5]=1
  - Is 1? YES
  - currentCount = 0 + 1 = 1
  - 1 > 2? NO → maxCount = 2
  State: currentCount=1, maxCount=2

Final: maxCount = 2
```

### Visual Representation
```
Array:  [1, 0, 1, 1, 0, 1]
         ↑     ↑  ↑     ↑
         1     1  1     1
         
Sequences:
[1]           → length 1
[1, 1]        → length 2 ← Maximum!
[1]           → length 1

The key: Reset counter when we see 0
```

### Alternative Visualization
```
arr = [1, 0, 1, 1, 0, 1]

Current Count Evolution:
Index 0: 1 → currentCount=1, maxCount=1
Index 1: 0 → currentCount=0, maxCount=1 (reset)
Index 2: 1 → currentCount=1, maxCount=1 (start new sequence)
Index 3: 1 → currentCount=2, maxCount=2 (continue sequence)
Index 4: 0 → currentCount=0, maxCount=2 (reset)
Index 5: 1 → currentCount=1, maxCount=2 (new sequence)

Final: 2
```

### Flow
1. Initialize currentCount = 0, maxCount = 0
2. Loop through array:
   - If element is 1:
     - Increment currentCount
     - Update maxCount if currentCount is larger
   - If element is 0:
     - Reset currentCount to 0
3. Return maxCount

---

## Problem 2: Move Zeroes to End

**Problem:** Move all zeros to the end while maintaining order of non-zero elements.

### Pattern: Two Pointers (Slow-Fast)
**Time Complexity:** O(n)  
**Space Complexity:** O(1)

### Dry Run
```javascript
arr = [0, 1, 0, 2, 3, 4]
x = 0 (slow pointer - position to place next non-zero)

Step 1: i=0, arr[0]=0
  - 0 ≠ 0? NO → skip (don't increment x)
  arr = [0, 1, 0, 2, 3, 4]
         ↑
         x

Step 2: i=1, arr[1]=1
  - 1 ≠ 0? YES
  - arr[0] = arr[1] = 1
  - x = 0 + 1 = 1
  arr = [1, 1, 0, 2, 3, 4]
            ↑
            x

Step 3: i=2, arr[2]=0
  - 0 ≠ 0? NO → skip
  arr = [1, 1, 0, 2, 3, 4]
            ↑
            x (stays at 1)

Step 4: i=3, arr[3]=2
  - 2 ≠ 0? YES
  - arr[1] = arr[3] = 2
  - x = 1 + 1 = 2
  arr = [1, 2, 0, 2, 3, 4]
               ↑
               x

Step 5: i=4, arr[4]=3
  - 3 ≠ 0? YES
  - arr[2] = arr[4] = 3
  - x = 2 + 1 = 3
  arr = [1, 2, 3, 2, 3, 4]
                  ↑
                  x

Step 6: i=5, arr[5]=4
  - 4 ≠ 0? YES
  - arr[3] = arr[5] = 4
  - x = 3 + 1 = 4
  arr = [1, 2, 3, 4, 3, 4]
                     ↑
                     x

Phase 1 Complete: x = 4
arr = [1, 2, 3, 4, 3, 4]
                  ↑
                  x (all non-zeros moved to front)

Phase 2: Fill remaining with zeros
Step 7: j=4, arr[4] = 0
  arr = [1, 2, 3, 4, 0, 4]

Step 8: j=5, arr[5] = 0
  arr = [1, 2, 3, 4, 0, 0]

Final: [1, 2, 3, 4, 0, 0] ✓
```

### Visual Step-by-Step
```
Initial: [0, 1, 0, 2, 3, 4]
          ↑
          x

After processing non-zeros:
         [1, 2, 3, 4, 3, 4]
                     ↑
                     x=4

Fill from x to end with 0s:
         [1, 2, 3, 4, 0, 0]
                     ↑  ↑
                     filled with 0s
```

### Two-Phase Approach
```javascript
// Phase 1: Move non-zeros to front
x = 0
for i in range(0, n):
    if arr[i] ≠ 0:
        arr[x] = arr[i]
        x++

// Phase 2: Fill rest with zeros
for j in range(x, n):
    arr[j] = 0
```

### Alternative: Swap Approach
```javascript
arr = [0, 1, 0, 2, 3, 4]
x = 0

// When we find non-zero, swap with position x
i=0: arr[0]=0 → skip
i=1: arr[1]=1 → swap arr[0] and arr[1]
     [1, 0, 0, 2, 3, 4], x=1
i=2: arr[2]=0 → skip
i=3: arr[3]=2 → swap arr[1] and arr[3]
     [1, 2, 0, 0, 3, 4], x=2
i=4: arr[4]=3 → swap arr[2] and arr[4]
     [1, 2, 3, 0, 0, 4], x=3
i=5: arr[5]=4 → swap arr[3] and arr[5]
     [1, 2, 3, 4, 0, 0], x=4
```

---

## Pattern Comparison

### Counter Reset vs Two Pointers

| Problem              | Pattern         | Key Concept                    |
|----------------------|-----------------|--------------------------------|
| Max Consecutive Ones | Counter Reset   | Reset on break, track maximum  |
| Move Zeros           | Two Pointers    | Slow tracks position, fast explores |

---

## Edge Cases

### Max Consecutive Ones
```javascript
// 1. All ones
arr = [1, 1, 1, 1]
// currentCount keeps incrementing
// maxCount = 4

// 2. All zeros
arr = [0, 0, 0, 0]
// currentCount always 0
// maxCount = 0

// 3. No ones
arr = [0]
// maxCount = 0

// 4. Ones at end
arr = [0, 0, 1, 1, 1]
// Must check currentCount in loop (not just at end)
// maxCount = 3
```

### Move Zeros
```javascript
// 1. No zeros
arr = [1, 2, 3, 4]
// x moves through all positions
// No zeros to fill
// Result: [1, 2, 3, 4]

// 2. All zeros
arr = [0, 0, 0, 0]
// x never increments (stays at 0)
// Fill from 0 to end
// Result: [0, 0, 0, 0]

// 3. Zeros at end already
arr = [1, 2, 0, 0]
// Result: [1, 2, 0, 0] (no change)

// 4. Single element
arr = [0]
// x=0, fill from 0 to 1
// Result: [0]
```

---

## Key Takeaways

### Max Consecutive Ones
1. **Track current streak** with counter
2. **Reset on break** (when 0 appears)
3. **Update maximum** during the streak (not after)
4. **Don't forget** to check maxCount inside the loop
5. Time: O(n), Space: O(1)

### Move Zeros
1. **Two-phase approach**: 
   - Move non-zeros to front
   - Fill rest with zeros
2. **Slow pointer** tracks where to place next non-zero
3. **Fast pointer** (loop variable) explores array
4. **Maintains order** of non-zero elements
5. **In-place**: O(1) space

---

## Interview Tips

### Max Consecutive Ones
- Explain the counter reset logic clearly
- Mention you update max during iteration (optimization)
- Draw the array and show current/max counters
- Time: O(n) - single pass through array

### Move Zeros
- Clarify: maintain relative order? (yes)
- Mention two approaches: overwrite then fill vs swap
- Explain why two pointers work
- "Slow pointer tracks position, fast explores"
- Time: O(n), Space: O(1)

---

## Common Mistakes

### Max Consecutive Ones
```javascript
// ❌ Wrong: Updating max outside if block
if (arr[i] === 1) {
    currentCount++
}
maxCount = Math.max(currentCount, maxCount) // Wrong placement!

// ✅ Correct: Update inside
if (arr[i] === 1) {
    currentCount++
    maxCount = Math.max(currentCount, maxCount)
} else {
    currentCount = 0
}
```

### Move Zeros
```javascript
// ❌ Wrong: Not filling with zeros
for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
        arr[x] = arr[i]
        x++
    }
}
// Forgot to fill remaining positions!

// ✅ Correct: Fill remaining
for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
        arr[x] = arr[i]
        x++
    }
}
for (let j = x; j < arr.length; j++) {
    arr[j] = 0  // Fill rest with zeros
}
```

---

## Practice Variations

### Related Problems
1. **Max Consecutive Ones II**: Can flip one 0 to 1
2. **Max Consecutive Ones III**: Can flip k 0s to 1s
3. **Move Negative Numbers**: Similar to move zeros
4. **Segregate 0s and 1s**: Partition array

All use similar patterns!

---

## Complexity Summary

| Problem              | Time | Space | Pattern       |
|----------------------|------|-------|---------------|
| Max Consecutive Ones | O(n) | O(1)  | Counter Reset |
| Move Zeros           | O(n) | O(1)  | Two Pointers  |

Both are optimal single-pass solutions!
