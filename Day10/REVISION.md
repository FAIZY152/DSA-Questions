# Day 10 - Mathematical & Bit Manipulation

## Problem 1: Missing Number

**Problem:** Find the missing number in array containing n distinct numbers from 0 to n.

### Approach 1: Brute Force
**Time:** O(n²) | **Space:** O(1)

### Dry Run - Brute Force
```javascript
arr = [0, 1, 3, 4, 5]
n = 5 (length of array)

Check 0: found at index 0 ✓
Check 1: found at index 1 ✓
Check 2: NOT found → return 2 ✓

For each number 0 to n:
  i=0: Search 0 in array
    j=0: arr[0]=0 → found=true, break
  
  i=1: Search 1 in array
    j=0: arr[0]=0 ≠ 1
    j=1: arr[1]=1 → found=true, break
  
  i=2: Search 2 in array
    j=0: arr[0]=0 ≠ 2
    j=1: arr[1]=1 ≠ 2
    j=2: arr[2]=3 ≠ 2
    j=3: arr[3]=4 ≠ 2
    j=4: arr[4]=5 ≠ 2
    found=false → return 2 ✓
```

---

### Approach 2: Sorting
**Time:** O(n log n) | **Space:** O(1)

### Dry Run - Sorting
```javascript
arr = [3, 0, 1, 4, 5]
sorted = [0, 1, 3, 4, 5]

Expected: [0, 1, 2, 3, 4, 5]

i=0: sorted[0]=0, expected=0 → match
i=1: sorted[1]=1, expected=1 → match
i=2: sorted[2]=3, expected=2 → MISMATCH! return 2 ✓

Logic: 
If arr[i] ≠ i, then i is missing
```

---

### Approach 3: Sum Formula (OPTIMAL)
**Time:** O(n) | **Space:** O(1)

### Dry Run - Sum Formula
```javascript
arr = [0, 1, 3, 4, 5]
n = 5

Step 1: Calculate expected sum (0 to n)
Formula: n * (n + 1) / 2
totalSum = 5 * (5 + 1) / 2 = 5 * 6 / 2 = 15

Step 2: Calculate actual sum
partialSum = 0
i=0: partialSum = 0 + 0 = 0
i=1: partialSum = 0 + 1 = 1
i=2: partialSum = 1 + 3 = 4
i=3: partialSum = 4 + 4 = 8
i=4: partialSum = 8 + 5 = 13

Step 3: Find difference
missing = totalSum - partialSum
missing = 15 - 13 = 2 ✓
```

### Why This Works
```
Expected: 0 + 1 + 2 + 3 + 4 + 5 = 15
Actual:   0 + 1 +   + 3 + 4 + 5 = 13
Difference = 2 (the missing number)

Sum formula: 1+2+3+...+n = n(n+1)/2

Example with n=5:
0+1+2+3+4+5 = 5×6/2 = 15
```

### Visual Representation
```
Array: [0, 1, 3, 4, 5]
        ↓  ↓     ↓  ↓  ↓
Sum:    0+ 1+  + 3+ 4+ 5 = 13
               ↑
           Missing 2

Expected sum (0 to 5): 15
Actual sum: 13
Difference: 2 ← Missing number
```

---

## Problem 2: Single Number

**Problem:** Find the element that appears once when all others appear twice.

### Approach 1: Brute Force
**Time:** O(n²) | **Space:** O(1)

### Dry Run - Brute Force
```javascript
arr = [2, 2, 1]

i=0, arr[0]=2:
  count = 0
  j=0: arr[0]=2, 2==2 → count=1
  j=1: arr[1]=2, 2==2 → count=2
  j=2: arr[2]=1, 2==1 → count=2
  count=2, not 1 → continue

i=1, arr[1]=2:
  count = 0
  j=0: arr[0]=2, 2==2 → count=1
  j=1: arr[1]=2, 2==2 → count=2
  j=2: arr[2]=1, 2==1 → count=2
  count=2, not 1 → continue

i=2, arr[2]=1:
  count = 0
  j=0: arr[0]=2, 1==2 → count=0
  j=1: arr[1]=2, 1==2 → count=0
  j=2: arr[2]=1, 1==1 → count=1
  count=1 → return 1 ✓
```

---

### Approach 2: Hash Map
**Time:** O(n) | **Space:** O(n)

### Dry Run - Hash Map
```javascript
arr = [2, 2, 1, 3, 3, 4, 5, 5]
hash = {}

Phase 1: Build frequency map
i=0: arr[0]=2 → hash[2]=1      hash={2:1}
i=1: arr[1]=2 → hash[2]=2      hash={2:2}
i=2: arr[2]=1 → hash[1]=1      hash={2:2, 1:1}
i=3: arr[3]=3 → hash[3]=1      hash={2:2, 1:1, 3:1}
i=4: arr[4]=3 → hash[3]=2      hash={2:2, 1:1, 3:2}
i=5: arr[5]=4 → hash[4]=1      hash={2:2, 1:1, 3:2, 4:1}
i=6: arr[6]=5 → hash[5]=1      hash={2:2, 1:1, 3:2, 4:1, 5:1}
i=7: arr[7]=5 → hash[5]=2      hash={2:2, 1:1, 3:2, 4:1, 5:2}

Phase 2: Find elements with count=1
Check arr[0]=2: hash[2]=2 → skip
Check arr[1]=2: hash[2]=2 → skip
Check arr[2]=1: hash[1]=1 → add to result → [1]
Check arr[3]=3: hash[3]=2 → skip
Check arr[4]=3: hash[3]=2 → skip
Check arr[5]=4: hash[4]=1 → add to result → [1, 4]
Check arr[6]=5: hash[5]=2 → skip
Check arr[7]=5: hash[5]=2 → skip

Result: [1, 4] (all single numbers)
```

---

### Approach 3: XOR (OPTIMAL for single unique)
**Time:** O(n) | **Space:** O(1)

### XOR Properties
```
a ^ a = 0  (any number XOR itself = 0)
a ^ 0 = a  (any number XOR 0 = itself)
XOR is commutative: a ^ b = b ^ a

Example:
2 ^ 2 = 0
2 ^ 2 ^ 1 = 0 ^ 1 = 1
```

### Dry Run - XOR
```javascript
arr = [2, 2, 1]
result = 0

i=0: result = 0 ^ 2 = 2
     Binary: 000 ^ 010 = 010

i=1: result = 2 ^ 2 = 0
     Binary: 010 ^ 010 = 000
     (2 cancels itself!)

i=2: result = 0 ^ 1 = 1
     Binary: 000 ^ 001 = 001

Final: result = 1 ✓
```

### Why XOR Works
```
Array: [4, 1, 2, 1, 2]

Step by step:
0 ^ 4 = 4
4 ^ 1 = 5
5 ^ 2 = 7
7 ^ 1 = 6  (the first 1 cancels this 1)
6 ^ 2 = 4  (the first 2 cancels this 2)

Result: 4 (the unique number)

Pairs cancel each other:
2 ^ 2 = 0
1 ^ 1 = 0
Only 4 remains!
```

---

## Problem 3: Power(x, n)

**Problem:** Calculate x raised to power n (handle negative powers).

### Approach 1: Brute Force
**Time:** O(n) | **Space:** O(1)

### Dry Run - Brute Force
```javascript
x = 2, n = 5
power = 5
ans = 1

i=0: ans = 1 * 2 = 2
i=1: ans = 2 * 2 = 4
i=2: ans = 4 * 2 = 8
i=3: ans = 8 * 2 = 16
i=4: ans = 16 * 2 = 32

n > 0, so return ans = 32
Result: 2^5 = 32 ✓

If n = -3:
Calculate 2^3 = 8
Return 1/8 = 0.125
```

---

### Approach 2: Binary Exponentiation (OPTIMAL)
**Time:** O(log n) | **Space:** O(1)

### Dry Run - Binary Exponentiation
```javascript
x = 2, n = 10
power = 10
ans = 1

Iteration 1:
  power=10, 10%2=0 (even)
  x = 2 * 2 = 4
  power = 10/2 = 5
  ans = 1

Iteration 2:
  power=5, 5%2=1 (odd)
  ans = 1 * 4 = 4  ← Take one x
  x = 4 * 4 = 16
  power = 5/2 = 2

Iteration 3:
  power=2, 2%2=0 (even)
  x = 16 * 16 = 256
  power = 2/2 = 1
  ans = 4

Iteration 4:
  power=1, 1%2=1 (odd)
  ans = 4 * 256 = 1024  ← Take one x
  x = 256 * 256 = 65536
  power = 1/2 = 0

power=0, stop
Final: ans = 1024
Result: 2^10 = 1024 ✓
```

### How Binary Exponentiation Works
```
Calculate 2^10:

10 in binary: 1010

2^10 = 2^(8+2)
     = 2^8 × 2^2
     = 256 × 4
     = 1024

Process:
10 → even → skip, square base → 2^2=4, power=5
5  → odd  → take 4, square base → 4^2=16, power=2
2  → even → skip, square base → 16^2=256, power=1
1  → odd  → take 256, done

ans = 4 × 256 = 1024
```

### Visual Binary Breakdown
```
2^10 can be broken down:

n=10: even → square base, halve power
n=5:  odd  → take current base, square, halve
n=2:  even → square base, halve power
n=1:  odd  → take current base

Power: 10 → 5  → 2  → 1  → 0
Base:  2  → 4  → 16 → 256
Ans:   1  → 4  → 4  → 1024

When odd: multiply ans by current base
When even: just square the base
Always: halve the power
```

---

## Bit Manipulation: XOR Truth Table

```
A | B | A XOR B
--|---|--------
0 | 0 |   0
0 | 1 |   1
1 | 0 |   1
1 | 1 |   0

Key Properties:
- Same bits → 0
- Different bits → 1
- a ^ a = 0
- a ^ 0 = a
- Commutative: a ^ b ^ c = c ^ a ^ b
```

---

## Key Takeaways

### Missing Number
1. **Sum formula**: n(n+1)/2 - actual sum
2. **Most efficient**: O(n) time, O(1) space
3. **Remember**: Array has n elements, missing one from 0 to n
4. **Alternative**: XOR all numbers 0 to n with array elements

### Single Number
1. **XOR magic**: Pairs cancel out (a ^ a = 0)
2. **Hash map**: Works for multiple unique numbers
3. **XOR only works**: When ONE number appears once
4. **For multiple unique**: Use hash map approach

### Power
1. **Binary exponentiation**: Reduces O(n) to O(log n)
2. **Odd power**: Take one base, square rest
3. **Even power**: Just square base and halve exponent
4. **Negative power**: Calculate positive, then 1/result

---

## Interview Tips

### Missing Number
- Start with sum formula approach
- Mention XOR as alternative (a ^ a = 0)
- "Sum of 0 to n minus actual sum"
- Handle edge case: n=0 or n=1

### Single Number
- Perfect use case for XOR
- Explain a ^ a = 0 property
- For variations (multiple unique), use hash map
- Draw XOR cancellation: 2^2^1 = 0^1 = 1

### Power
- Mention both approaches
- Draw binary breakdown for clarity
- "Halve the problem size each time"
- Don't forget negative power handling!

---

## Complexity Summary

| Problem        | Brute Force | Optimal Time | Optimal Space | Key Technique      |
|----------------|-------------|--------------|---------------|--------------------|
| Missing Number | O(n²)       | O(n)         | O(1)          | Math (sum formula) |
| Single Number  | O(n²)       | O(n)         | O(1)          | XOR                |
| Power(x, n)    | O(n)        | O(log n)     | O(1)          | Binary Exp         |

---

## Common Mistakes

### Missing Number
```javascript
// ❌ Wrong: Forgetting n in sum
totalSum = n * (n - 1) / 2  // Missing the +1

// ✅ Correct:
totalSum = n * (n + 1) / 2
```

### Single Number
```javascript
// ❌ Wrong: Initializing with first element
result = arr[0]
for (let i = 1; i < arr.length; i++) {
    result ^= arr[i]
}

// ✅ Correct: Initialize with 0
result = 0
for (let i = 0; i < arr.length; i++) {
    result ^= arr[i]
}
```

### Power
```javascript
// ❌ Wrong: Not handling negative
if (n < 0) {
    return -myPow(x, -n)  // Wrong!
}

// ✅ Correct:
if (n < 0) {
    return 1 / myPow(x, -n)  // Take reciprocal
}
```
