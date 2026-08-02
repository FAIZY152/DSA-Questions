# Day 01 - Array Basics & String Problems

## Problem 1: Search Number in Array

**Problem:** Find a number in an array and return its index, or -1 if not found.

### Pattern: Linear Search
**Time Complexity:** O(n)  
**Space Complexity:** O(1)

### Dry Run
```javascript
arr = [2, 4, 56, 8, 9, 10, -2, -7, -6]
target = 8

Step 1: i=0, arr[0]=2  ≠ 8 → continue
Step 2: i=1, arr[1]=4  ≠ 8 → continue
Step 3: i=2, arr[2]=56 ≠ 8 → continue
Step 4: i=3, arr[3]=8  = 8 → FOUND at index 3 ✓
```

### Flow
1. Check if array is empty → return false
2. Loop through each element
3. If element matches target → return index
4. If loop completes without match → return -1

---

## Problem 2: Return Negative Numbers

**Problem:** Extract all negative numbers from an array.

### Pattern: Filtering with Condition
**Time Complexity:** O(n)  
**Space Complexity:** O(k) where k = number of negatives

### Dry Run
```javascript
arr = [2, 4, 56, 8, 9, 10, -2, -7, -6]
result = []

Step 1: 2 > 0   → skip
Step 2: 4 > 0   → skip
...
Step 7: -2 < 0  → push to result → [-2]
Step 8: -7 < 0  → push to result → [-2, -7]
Step 9: -6 < 0  → push to result → [-2, -7, -6]

Final: [-2, -7, -6]
```

### Flow
1. Create empty result array
2. Iterate through all elements
3. If element < 0 → add to result
4. Return result array

---

## Problem 3: Check Anagram

**Problem:** Determine if two strings are anagrams (same letters, different order).

### Pattern: Character Matching with Marking
**Time Complexity:** O(n²)  
**Space Complexity:** O(n) - for converting string to array

### Dry Run
```javascript
a = "cat"
b = "tac"
barry = ['t', 'a', 'c']

Step 1: Check a[0]='c'
  - barry[0]='t' ≠ 'c'
  - barry[1]='a' ≠ 'c'
  - barry[2]='c' = 'c' ✓ → mark barry[2]='*'
  barry = ['t', 'a', '*']

Step 2: Check a[1]='a'
  - barry[0]='t' ≠ 'a'
  - barry[1]='a' = 'a' ✓ → mark barry[1]='*'
  barry = ['t', '*', '*']

Step 3: Check a[2]='t'
  - barry[0]='t' = 't' ✓ → mark barry[0]='*'
  barry = ['*', '*', '*']

All matched → TRUE
```

### Flow
1. Check if lengths are different → return false
2. Convert second string to array
3. For each char in first string:
   - Search in second array
   - If found → mark it with '*'
   - If not found → return false
4. All matched → return true

---

## Problem 4: Contains Duplicate

**Problem:** Check if array has any duplicate values.

### Pattern: Three Approaches

#### Approach 1: Brute Force
**Time:** O(n²) | **Space:** O(1)

### Dry Run - Brute Force
```javascript
arr = [1, 2, 3, 2, 5]

Step 1: i=0, arr[0]=1
  - Compare with j=1: 1≠2
  - Compare with j=2: 1≠3
  - Compare with j=3: 1≠2
  - Compare with j=4: 1≠5

Step 2: i=1, arr[1]=2
  - Compare with j=2: 2≠3
  - Compare with j=3: 2=2 ✓ → DUPLICATE FOUND → return true
```

#### Approach 2: Sorting
**Time:** O(n log n) | **Space:** O(1)

### Dry Run - Sorting
```javascript
arr = [1, 3, 2, 2, 5]
sorted = [1, 2, 2, 3, 5]

Step 1: sorted[0]=1, sorted[1]=2 → 1≠2
Step 2: sorted[1]=2, sorted[2]=2 → 2=2 ✓ → DUPLICATE FOUND
```

#### Approach 3: Hash Set (OPTIMAL)
**Time:** O(n) | **Space:** O(n)

### Dry Run - Hash Set
```javascript
arr = [1, 2, 3, 2, 5]
hash = new Set()

Step 1: hash.has(1)? No → hash.add(1) → hash={1}
Step 2: hash.has(2)? No → hash.add(2) → hash={1,2}
Step 3: hash.has(3)? No → hash.add(3) → hash={1,2,3}
Step 4: hash.has(2)? YES ✓ → DUPLICATE FOUND → return true
```

### Flow - Hash Set (Best)
1. Create empty Set
2. Loop through array
3. If element exists in Set → return true (duplicate found)
4. Otherwise → add element to Set
5. If loop completes → return false (no duplicates)

---

## Complexity Comparison

| Approach    | Time       | Space | Best For               |
|-------------|------------|-------|------------------------|
| Brute Force | O(n²)      | O(1)  | Small arrays           |
| Sorting     | O(n log n) | O(1)  | Space-constrained      |
| Hash Set    | O(n)       | O(n)  | **Optimal (default)** |

---

## Key Takeaways

1. **Linear Search**: Simple but O(n) - use for unsorted data
2. **Filtering**: Create new array based on conditions
3. **Anagram**: Mark characters to avoid counting twice
4. **Duplicates**: Hash Set is the best approach for interviews
5. **Trade-off**: Time vs Space - Hash Set uses more space but faster

---

## Interview Tips

- Always ask about input size and constraints
- For duplicates, mention all three approaches and choose Set
- Explain time/space complexity before coding
- Use meaningful variable names for clarity
