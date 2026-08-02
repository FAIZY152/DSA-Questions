# Day 04 - Number Manipulation

## Problem 1: Count Digits

**Problem:** Count the number of digits in an integer (including negative numbers).

### Pattern: Division Method
**Time Complexity:** O(log n) - number of digits  
**Space Complexity:** O(1)

### Dry Run
```javascript
nums = 23132
count = 0

Step 1: nums = 23132
  - nums % 10 = 2 (last digit - not used, just for understanding)
  - nums = Math.floor(23132 / 10) = 2313
  - count = 1

Step 2: nums = 2313
  - nums % 10 = 3
  - nums = Math.floor(2313 / 10) = 231
  - count = 2

Step 3: nums = 231
  - nums % 10 = 1
  - nums = Math.floor(231 / 10) = 23
  - count = 3

Step 4: nums = 23
  - nums % 10 = 3
  - nums = Math.floor(23 / 10) = 2
  - count = 4

Step 5: nums = 2
  - nums % 10 = 2
  - nums = Math.floor(2 / 10) = 0
  - count = 5

nums = 0 → Loop stops
Final: 5 digits
```

### Handling Negative Numbers
```javascript
nums = -23132

// Convert to positive
nums = nums < 0 ? -nums : nums  // nums = 23132

// Then apply same logic
// Result: 5 digits (negative sign doesn't count)
```

### Alternative Method: String Conversion
```javascript
function CountDigit(nums) {
    let str = Math.abs(nums).toString()
    return str.length
}

// nums = -23132
// Math.abs(-23132) = 23132
// "23132" → length = 5
```

### Flow - Division Method
1. Handle negative: convert to positive
2. Initialize count = 0
3. While number > 0:
   - Divide by 10 (removes last digit)
   - Increment count
4. Return count

---

## Problem 2: Palindrome Number

**Problem:** Check if a number reads the same forwards and backwards.

### Pattern: Reverse and Compare
**Time Complexity:** O(log n) - number of digits  
**Space Complexity:** O(1)

### Dry Run
```javascript
x = 121
original = 121
reverse = 0

Step 1: x = 121
  - digit = 121 % 10 = 1
  - reverse = (0 * 10) + 1 = 1
  - x = Math.floor(121 / 10) = 12

Step 2: x = 12
  - digit = 12 % 10 = 2
  - reverse = (1 * 10) + 2 = 12
  - x = Math.floor(12 / 10) = 1

Step 3: x = 1
  - digit = 1 % 10 = 1
  - reverse = (12 * 10) + 1 = 121
  - x = Math.floor(1 / 10) = 0

x = 0 → Loop stops
original (121) === reverse (121)? YES → TRUE ✓
```

### Non-Palindrome Example
```javascript
x = 432
original = 432
reverse = 0

Step 1: x = 432
  - digit = 432 % 10 = 2
  - reverse = (0 * 10) + 2 = 2
  - x = Math.floor(432 / 10) = 43

Step 2: x = 43
  - digit = 43 % 10 = 3
  - reverse = (2 * 10) + 3 = 23
  - x = Math.floor(43 / 10) = 4

Step 3: x = 4
  - digit = 4 % 10 = 4
  - reverse = (23 * 10) + 4 = 234
  - x = Math.floor(4 / 10) = 0

x = 0 → Loop stops
original (432) === reverse (234)? NO → FALSE ✗
```

### Negative Number Edge Case
```javascript
x = -121

// Negative numbers can't be palindromes
// -121 reversed would be 121- (doesn't make sense)
// Return false immediately

if (x < 0) return false
```

### Flow
1. If number is negative → return false
2. Store original number
3. Initialize reverse = 0
4. While number > 0:
   - Extract last digit (num % 10)
   - Build reverse: reverse = (reverse * 10) + digit
   - Remove last digit (Math.floor(num / 10))
5. Compare original with reverse
6. Return true if equal, false otherwise

---

## Visual Representation

### How Reversal Works
```
Number: 121

Building reverse step by step:
reverse = 0

Step 1: Get 1 from 121
  reverse = 0*10 + 1 = 1
  [1]

Step 2: Get 2 from 12
  reverse = 1*10 + 2 = 12
  [1][2]

Step 3: Get 1 from 1
  reverse = 12*10 + 1 = 121
  [1][2][1]

Final: 121 (same as original)
```

### Key Operations

| Operation       | Purpose                      | Example         |
|-----------------|------------------------------|-----------------|
| `num % 10`      | Get last digit               | 123 % 10 = 3    |
| `Math.floor(num / 10)` | Remove last digit   | 123 / 10 = 12   |
| `rev * 10 + digit` | Add digit to reverse     | 12*10 + 3 = 123 |

---

## Common Edge Cases

### 1. Single Digit
```javascript
x = 7
// Only one iteration
// reverse = 7
// 7 === 7 → TRUE (all single digits are palindromes)
```

### 2. Number Ending in Zero
```javascript
x = 120
// First digit extracted: 0
// Reverse would be 021 = 21
// 120 ≠ 21 → FALSE
// (Numbers ending in 0 can't be palindromes except 0 itself)
```

### 3. Zero
```javascript
x = 0
// reverse = 0
// 0 === 0 → TRUE
```

### 4. Large Palindrome
```javascript
x = 1221
// Step-by-step:
// 1 → reverse = 1
// 2 → reverse = 12
// 2 → reverse = 122
// 1 → reverse = 1221
// 1221 === 1221 → TRUE
```

---

## Alternative Approach: String Method

### For Palindrome (Not Recommended for Interviews)
```javascript
function isPalindrome(x) {
    if (x < 0) return false
    let str = x.toString()
    let reversed = str.split("").reverse().join("")
    return str === reversed
}

// Easier to write but:
// - Uses extra space O(n)
// - String operations are slower
// - Shows less algorithmic thinking
```

---

## Key Takeaways

1. **Division by 10**: Removes last digit
2. **Modulo 10**: Extracts last digit
3. **Build Reverse**: Multiply by 10 and add new digit
4. **Negative Numbers**: Can't be palindromes (return false early)
5. **Time Complexity**: O(log n) because digits = log₁₀(n)

---

## Interview Tips

### Count Digits
- Mention both division and string methods
- Division method is more algorithmic (preferred)
- Handle negative numbers by converting to positive
- Time: O(log n) not O(n) - important distinction!

### Palindrome
- Always check for negative first (optimization)
- Explain why you store the original number
- Walk through the reversal logic clearly
- Mention space complexity O(1) - no array needed

---

## Pattern Recognition

Both problems use the same core technique:
```javascript
while (num > 0) {
    digit = num % 10           // Extract last digit
    // Do something with digit
    num = Math.floor(num / 10) // Remove last digit
}
```

This pattern appears in many number manipulation problems!

---

## Practice Variations

1. **Sum of Digits**: Add each digit instead of counting
2. **Reverse Number**: Just return the reversed number
3. **Armstrong Number**: Sum of cubes of digits equals original
4. **Digital Root**: Keep summing digits until single digit

All use the same extraction pattern!
