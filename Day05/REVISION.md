# Day 05 - Array Manipulation & Two Pointers

## Problem 1: Reverse Integer

**Problem:** Reverse the digits of an integer, handling negative numbers and 32-bit overflow.

### Pattern: Digit Extraction + Rebuild
**Time Complexity:** O(log n)  
**Space Complexity:** O(1)

### Dry Run
```javascript
x = 121
xCopy = 121
x = 121 (abs of 121)
rev = 0

Step 1: x = 121
  - last = 121 % 10 = 1
  - rev = (0 * 10) + 1 = 1
  - x = Math.floor(121 / 10) = 12

Step 2: x = 12
  - last = 12 % 10 = 2
  - rev = (1 * 10) + 2 = 12
  - x = Math.floor(12 / 10) = 1

Step 3: x = 1
  - last = 1 % 10 = 1
  - rev = (12 * 10) + 1 = 121
  - x = Math.floor(1 / 10) = 0

xCopy (121) < 0? NO → return 121
```

### Negative Number Example
```javascript
x = -121
xCopy = -121
x = Math.abs(-121) = 121
rev = 121 (after reversal logic)

xCopy < 0? YES → return -121
```

### 32-bit Overflow Protection
```javascript
limit = Math.pow(2, 31) = 2,147,483,648

// If reversed number exceeds limit
if (rev < -limit || rev > limit) {
    return 0
}

// Example:
x = 1534236469
reversed = 9646324351
9646324351 > 2147483648 → return 0 (overflow!)
```

### Flow
1. Store original for sign
2. Convert to absolute value
3. Build reversed number digit by digit
4. Check overflow limits
5. Apply original sign
6. Return result

---

## Problem 2: Remove Duplicates (Sorted Array)

**Problem:** Remove duplicates from sorted array in-place, return count of unique elements.

### Pattern: Two Pointers (Slow-Fast)
**Time Complexity:** O(n)  
**Space Complexity:** O(1)

### Dry Run
```javascript
arr = [1, 1, 2, 2, 3, 3, 4, 4, 5]
x = 0 (slow pointer - unique position)
i = 0 (fast pointer - explorer)

Initial: [1, 1, 2, 2, 3, 3, 4, 4, 5]
          ↑
          x,i

Step 1: i=0, arr[0]=1 vs arr[0]=1
  - 1 > 1? NO → Don't move x
  Array: [1, 1, 2, 2, 3, 3, 4, 4, 5]
          ↑  ↑
          x  i

Step 2: i=1, arr[1]=1 vs arr[0]=1
  - 1 > 1? NO → Don't move x
  Array: [1, 1, 2, 2, 3, 3, 4, 4, 5]
          ↑     ↑
          x     i

Step 3: i=2, arr[2]=2 vs arr[0]=1
  - 2 > 1? YES → Move x, copy value
  - x = 0 + 1 = 1
  - arr[1] = arr[2] = 2
  Array: [1, 2, 2, 2, 3, 3, 4, 4, 5]
          ↑  ↑  ↑
             x  i

Step 4: i=3, arr[3]=2 vs arr[1]=2
  - 2 > 2? NO → Don't move x
  Array: [1, 2, 2, 2, 3, 3, 4, 4, 5]
             ↑     ↑
             x     i

Step 5: i=4, arr[4]=3 vs arr[1]=2
  - 3 > 2? YES → Move x, copy value
  - x = 1 + 1 = 2
  - arr[2] = arr[4] = 3
  Array: [1, 2, 3, 2, 3, 3, 4, 4, 5]
             ↑  ↑     ↑
                x     i

Step 6: i=5, arr[5]=3 vs arr[2]=3
  - 3 > 3? NO → Don't move x

Step 7: i=6, arr[6]=4 vs arr[2]=3
  - 4 > 3? YES → Move x, copy value
  - x = 2 + 1 = 3
  - arr[3] = arr[6] = 4
  Array: [1, 2, 3, 4, 3, 3, 4, 4, 5]
                ↑        ↑
                x        i

Step 8: i=7, arr[7]=4 vs arr[3]=4
  - 4 > 4? NO → Don't move x

Step 9: i=8, arr[8]=5 vs arr[3]=4
  - 5 > 4? YES → Move x, copy value
  - x = 3 + 1 = 4
  - arr[4] = arr[8] = 5
  Array: [1, 2, 3, 4, 5, 3, 4, 4, 5]
                   ↑           ↑
                   x           i

Final: x = 4
Return x + 1 = 5 (count of unique elements)
First 5 elements are: [1, 2, 3, 4, 5] ✓
```

### Alternative: Hash Set Method
```javascript
arr = [1, 1, 2, 2, 3, 3, 4, 4, 5]
hash = new Set()

i=0: hash.has(1)? NO → add 1 → hash={1}
i=1: hash.has(1)? YES → skip
i=2: hash.has(2)? NO → add 2 → hash={1,2}
i=3: hash.has(2)? YES → skip
i=4: hash.has(3)? NO → add 3 → hash={1,2,3}
...

Final: hash={1,2,3,4,5}
Return Array.from(hash) = [1,2,3,4,5]
```

---

## Problem 3: Remove Element

**Problem:** Remove all occurrences of a specific value in-place.

### Pattern: Two Pointers (Overwrite)
**Time Complexity:** O(n)  
**Space Complexity:** O(1)

### Dry Run
```javascript
arr = [1, 1, 2, 2, 3]
elem = 3
x = 0 (write position)

Step 1: i=0, arr[0]=1 ≠ 3?
  - YES → arr[0] = arr[0] = 1, x = 1
  Array: [1, 1, 2, 2, 3]
          ↑
          x

Step 2: i=1, arr[1]=1 ≠ 3?
  - YES → arr[1] = arr[1] = 1, x = 2
  Array: [1, 1, 2, 2, 3]
             ↑
             x

Step 3: i=2, arr[2]=2 ≠ 3?
  - YES → arr[2] = arr[2] = 2, x = 3
  Array: [1, 1, 2, 2, 3]
                ↑
                x

Step 4: i=3, arr[3]=2 ≠ 3?
  - YES → arr[3] = arr[3] = 2, x = 4
  Array: [1, 1, 2, 2, 3]
                   ↑
                   x

Step 5: i=4, arr[4]=3 ≠ 3?
  - NO → skip (don't increment x)
  Array: [1, 1, 2, 2, 3]
                   ↑
                   x (stays at 4)

Return x = 4
First 4 elements: [1, 1, 2, 2] ✓ (element 3 removed)
```

---

## Problem 4: Majority Element

**Problem:** Find element appearing more than n/2 times (Boyer-Moore Voting).

### Pattern: Voting Algorithm
**Time Complexity:** O(n)  
**Space Complexity:** O(1)

### Dry Run
```javascript
arr = [2, 2, 1, 1, 1, 2, 2]
candidate = null
count = 0

Step 1: num=2
  - count=0? YES → candidate=2, count=1
  State: candidate=2, count=1

Step 2: num=2
  - num=candidate? YES → count++
  State: candidate=2, count=2

Step 3: num=1
  - num=candidate? NO → count--
  State: candidate=2, count=1

Step 4: num=1
  - num=candidate? NO → count--
  State: candidate=2, count=0

Step 5: num=1
  - count=0? YES → candidate=1, count=1
  State: candidate=1, count=1

Step 6: num=2
  - num=candidate? NO → count--
  State: candidate=1, count=0

Step 7: num=2
  - count=0? YES → candidate=2, count=1
  State: candidate=2, count=1

Final: candidate = 2 ✓
```

### Why It Works
```
Array: [2, 2, 1, 1, 1, 2, 2]
       2 appears 4 times (> 7/2 = 3.5)

The majority element will always survive the voting:
- Each match with majority: count++
- Each mismatch: count-- (cancels one majority vote)
- Since majority > n/2, it can't be cancelled completely
```

### Brute Force Alternative
```javascript
// Time: O(n²), Space: O(1)
for each element:
    count = 0
    for each element again:
        if same: count++
    if count > n/2: return element
```

---

## Two Pointers Pattern Summary

### Key Concepts

1. **Slow-Fast Pointers** (Remove Duplicates)
   - Slow: Points to last unique element
   - Fast: Explores array
   - When new unique found: move slow, copy value

2. **Write-Read Pointers** (Remove Element)
   - Write: Where to place next valid element
   - Read: Scans through array
   - Only write when element is valid

3. **Why In-Place?**
   - Saves space: O(1) instead of O(n)
   - Modifies original array
   - Returns new length, not new array

---

## Visual Comparison

### Remove Duplicates vs Remove Element

```
Remove Duplicates [1,1,2,2,3]:
- Compare with last unique
- Move pointer when different
- Result: [1,2,3,_,_] length=3

Remove Element [1,1,2,2,3] remove 2:
- Compare with target value
- Move pointer when different
- Result: [1,1,3,_,_] length=3
```

---

## Key Takeaways

1. **Reverse Integer**: Handle negatives and overflow
2. **Two Pointers**: Efficient for in-place array modifications
3. **Slow-Fast**: Slow tracks valid position, fast explores
4. **Voting Algorithm**: O(1) space for majority element
5. **Hash Set**: Easy but uses O(n) space

---

## Interview Tips

### Remove Duplicates
- Only works on SORTED arrays
- Two pointers: slow tracks uniques, fast explores
- Return count (x+1), not modified array
- Time: O(n), Space: O(1)

### Remove Element
- Similar to remove duplicates but compare with value
- Don't increment write pointer for target values
- Works on unsorted arrays

### Majority Element
- Boyer-Moore is elegant O(1) space solution
- Can verify with second pass if not guaranteed to exist
- Problem states majority always exists, so verification not needed

---

## Complexity Comparison

| Problem           | Time  | Space | Method           |
|-------------------|-------|-------|------------------|
| Reverse Integer   | O(log n) | O(1) | Digit extraction |
| Remove Duplicates | O(n)  | O(1)  | Two pointers     |
| Remove Element    | O(n)  | O(1)  | Two pointers     |
| Majority Element  | O(n)  | O(1)  | Boyer-Moore      |
