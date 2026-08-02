# Day 06 - Two Pointers & Hashing

## Problem 1: Majority Element (Multiple Approaches)

**Problem:** Find element appearing more than n/2 times in array.

### Approach 1: Brute Force
**Time:** O(n²) | **Space:** O(1)

### Dry Run - Brute Force
```javascript
arr = [2, 2, 1, 1, 1, 2, 2]
n = 7

i=0, arr[0]=2:
  j=0: arr[0]=2 → count=1
  j=1: arr[1]=2 → count=2
  j=2: arr[2]=1 → count=2
  j=3: arr[3]=1 → count=2
  j=4: arr[4]=1 → count=2
  j=5: arr[5]=2 → count=3
  j=6: arr[6]=2 → count=4
  count(4) > 7/2(3.5)? YES → return 2 ✓
```

---

### Approach 2: Sorting
**Time:** O(n log n) | **Space:** O(1)

### Dry Run - Sorting
```javascript
arr = [2, 2, 1, 1, 1, 2, 2]
sorted = [1, 1, 1, 2, 2, 2, 2]

count = 1
ans = arr[0] = 1

i=1: arr[1]=1 === arr[0]=1? YES → count=2, ans=1
i=2: arr[2]=1 === arr[1]=1? YES → count=3, ans=1
i=3: arr[3]=2 === arr[2]=1? NO  → count=1, ans=2
i=4: arr[4]=2 === arr[3]=2? YES → count=2, ans=2
i=5: arr[5]=2 === arr[4]=2? YES → count=3, ans=2
i=6: arr[6]=2 === arr[5]=2? YES → count=4, ans=2

count(4) > 7/2? YES → return 2 ✓
```

### Simplified Sorting Approach
```javascript
// After sorting, middle element is always majority
arr.sort((a,b) => a-b)
return arr[Math.floor(arr.length / 2)]

// Why? Majority element appears > n/2 times
// So it MUST occupy the middle position
sorted = [1, 1, 1, 2, 2, 2, 2]
                 ↑
         middle = index 3
         arr[3] = 2 ✓
```

---

### Approach 3: Boyer-Moore Voting (OPTIMAL)
**Time:** O(n) | **Space:** O(1)

### Dry Run - Voting
```javascript
arr = [2, 2, 1, 1, 1, 2, 2]
candidate = null
count = 0

num=2: count=0 → candidate=2, count=1      [2 leads by 1]
num=2: 2=2 → count=2                       [2 leads by 2]
num=1: 1≠2 → count=1                       [2 leads by 1]
num=1: 1≠2 → count=0                       [tied]
num=1: count=0 → candidate=1, count=1      [1 leads by 1]
num=2: 2≠1 → count=0                       [tied]
num=2: count=0 → candidate=2, count=1      [2 leads by 1]

Final: candidate = 2 ✓
```

---

## Problem 2: Two Sum (Pair Sum)

**Problem:** Find two numbers that add up to target value.

### Approach 1: Brute Force
**Time:** O(n²) | **Space:** O(1)

### Dry Run - Brute Force
```javascript
arr = [2, 3, 7, 15, 20, 6, 8]
target = 35

i=0, arr[0]=2:
  j=1: 2+3=5   ≠35
  j=2: 2+7=9   ≠35
  j=3: 2+15=17 ≠35
  j=4: 2+20=22 ≠35
  j=5: 2+6=8   ≠35
  j=6: 2+8=10  ≠35

i=1, arr[1]=3:
  j=2: 3+7=10  ≠35
  j=3: 3+15=18 ≠35
  j=4: 3+20=23 ≠35
  j=5: 3+6=9   ≠35
  j=6: 3+8=11  ≠35

...continue...

i=4, arr[4]=20:
  j=5: 20+6=26 ≠35
  j=6: 20+15=35 =35 ✓ → return [20,15]
```

---

### Approach 2: Two Pointers (On Sorted Array)
**Time:** O(n log n) for sort + O(n) | **Space:** O(1)

### Dry Run - Two Pointers
```javascript
arr = [2, 3, 7, 15, 20, 6, 8]
sorted = [2, 3, 6, 7, 8, 15, 20]
target = 35

i = 0 (left pointer)
x = 6 (right pointer, length-1)

Step 1: arr[0]=2, arr[6]=20
  - 2+20=22 < 35 → too small → i++
  State: i=1, x=6

Step 2: arr[1]=3, arr[6]=20
  - 3+20=23 < 35 → too small → i++
  State: i=2, x=6

Step 3: arr[2]=6, arr[6]=20
  - 6+20=26 < 35 → too small → i++
  State: i=3, x=6

Step 4: arr[3]=7, arr[6]=20
  - 7+20=27 < 35 → too small → i++
  State: i=4, x=6

Step 5: arr[4]=8, arr[6]=20
  - 8+20=28 < 35 → too small → i++
  State: i=5, x=6

Step 6: arr[5]=15, arr[6]=20
  - 15+20=35 = 35 ✓ → return [15,20]
```

### Two Pointers Logic
```
If sum < target → left++ (need bigger number)
If sum > target → right-- (need smaller number)
If sum = target → found!
```

---

### Approach 3: Hash Map (OPTIMAL)
**Time:** O(n) | **Space:** O(n)

### Dry Run - Hash Map
```javascript
arr = [2, 7, 11, 15]
target = 9
map = {}

i=0, nums[0]=2:
  - need = 9 - 2 = 7
  - 7 in map? NO
  - map[2] = 0
  map = {2: 0}

i=1, nums[1]=7:
  - need = 9 - 7 = 2
  - 2 in map? YES ✓
  - return [map[2], i] = [0, 1]

Result: indices [0, 1] → values [2, 7] ✓
```

### Why Hash Map is Best
```
One pass through array
For each number:
  - Calculate what we need
  - Check if we've seen it before
  - If yes → found pair
  - If no → store current number for future
```

---

## Problem 3: Reverse String

**Problem:** Reverse a character array in-place.

### Pattern: Two Pointers (Swap)
**Time:** O(n) | **Space:** O(1)

### Dry Run
```javascript
arr = ['h', 'e', 'l', 'l', 'o']
left = 0
right = 4

Step 1: left=0, right=4
  - Swap arr[0] and arr[4]
  - temp = 'h'
  - arr[0] = 'o'
  - arr[4] = 'h'
  arr = ['o', 'e', 'l', 'l', 'h']
  - left=1, right=3

Step 2: left=1, right=3
  - Swap arr[1] and arr[3]
  - temp = 'e'
  - arr[1] = 'l'
  - arr[3] = 'e'
  arr = ['o', 'l', 'l', 'e', 'h']
  - left=2, right=2

Step 3: left=2, right=2
  - left < right? NO → stop

Final: ['o', 'l', 'l', 'e', 'h'] ✓
```

### Visual Representation
```
Start: ['h', 'e', 'l', 'l', 'o']
        ↑                   ↑
       left               right

After Swap 1: ['o', 'e', 'l', 'l', 'h']
                    ↑       ↑
                  left    right

After Swap 2: ['o', 'l', 'l', 'e', 'h']
                        ↑
                    left=right (stop)
```

### Alternative: Build New String
```javascript
function reverseString(str) {
    let result = ""
    for (let i = str.length - 1; i >= 0; i--) {
        result += str[i]
    }
    return result
}

// Time: O(n)
// Space: O(n) - creates new string
// Not in-place!
```

---

## Pattern Comparison

### Two Pointers: Two Types

#### 1. Opposite Direction (Reverse String)
```
Start at both ends, move towards center
[h, e, l, l, o]
 ↑           ↑
left       right

Swap and move inward
```

#### 2. Same Direction (Remove Duplicates)
```
Start at same end, one moves faster
[1, 1, 2, 3]
 ↑  ↑
slow fast

Slow tracks position, fast explores
```

---

## Approach Selection Guide

### Two Sum Problem

| Unsorted Array | Sorted Array | Need Indices? | Best Approach |
|----------------|--------------|---------------|---------------|
| ✓              | ✗            | ✓             | Hash Map      |
| ✓              | ✗            | ✗             | Hash Map      |
| ✗              | ✓            | ✓             | Hash Map      |
| ✗              | ✓            | ✗             | Two Pointers  |

**Hash Map wins in most cases!**

---

## Key Takeaways

1. **Majority Element**:
   - Sorting middle trick is clever
   - Boyer-Moore is optimal
   - Majority = appears > n/2 times

2. **Two Sum**:
   - Hash Map is usually best
   - Two pointers requires sorting first
   - Store complement, not the number itself

3. **Reverse String**:
   - Two pointers from opposite ends
   - Swap using temp variable
   - In-place: O(1) space

4. **Two Pointers**:
   - Same direction: tracking/filtering
   - Opposite direction: swapping/mirroring

---

## Interview Tips

### Majority Element
- Mention all three approaches
- Explain why Boyer-Moore works
- "Voting: majority survives cancellation"

### Two Sum
- Ask: sorted? duplicates? multiple solutions?
- Hash Map: one pass, store what we need
- Two Pointers: only if already sorted

### Reverse String
- Clarify: in-place or new string?
- Two pointers is cleanest in-place solution
- Don't forget temp variable for swap!

---

## Complexity Summary

| Problem         | Optimal Time | Optimal Space | Method      |
|-----------------|--------------|---------------|-------------|
| Majority Element| O(n)         | O(1)          | Boyer-Moore |
| Two Sum         | O(n)         | O(n)          | Hash Map    |
| Reverse String  | O(n)         | O(1)          | Two Pointers|
