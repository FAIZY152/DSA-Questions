# Recursion - Complete Guide

> Understanding recursion from basics to advanced concepts

## 🎯 What is Recursion?

**Recursion** is when a function calls itself to solve a problem by breaking it down into smaller, similar sub-problems.

### Real-World Analogy
```
Imagine Russian nesting dolls (Matryoshka):
- Open the outer doll → find a smaller doll inside
- Open that doll → find an even smaller doll
- Continue until → you reach the smallest doll (base case)
- Then close them back up one by one

This is exactly how recursion works!
```

---

## 📚 Core Concepts

### 1. Two Essential Parts

Every recursive function needs:

#### **Base Case** (Stopping Condition)
- When to STOP recursing
- Prevents infinite loops
- Returns a simple value without recursion

#### **Recursive Case** (Self-Call)
- Function calls itself with a SMALLER problem
- Moves toward the base case
- Must make progress with each call

---

## 🔍 Your Example: Print Countdown

### Code Analysis
```javascript
function sum(n) {
    // BASE CASE: Stop when n reaches 0
    if (n === 0) {
        return
    }
    
    // Print current number
    console.log(n)
    
    // RECURSIVE CASE: Call with smaller value
    sum(n - 1)
}

sum(10)
```

### Complete Dry Run
```javascript
sum(10)

Call 1: sum(10)
  - n = 10, n === 0? NO
  - Print: 10
  - Call sum(9)
  
  Call 2: sum(9)
    - n = 9, n === 0? NO
    - Print: 9
    - Call sum(8)
    
    Call 3: sum(8)
      - n = 8, n === 0? NO
      - Print: 8
      - Call sum(7)
      
      Call 4: sum(7)
        - n = 7, n === 0? NO
        - Print: 7
        - Call sum(6)
        
        Call 5: sum(6)
          - n = 6, n === 0? NO
          - Print: 6
          - Call sum(5)
          
          Call 6: sum(5)
            - n = 5, n === 0? NO
            - Print: 5
            - Call sum(4)
            
            Call 7: sum(4)
              - n = 4, n === 0? NO
              - Print: 4
              - Call sum(3)
              
              Call 8: sum(3)
                - n = 3, n === 0? NO
                - Print: 3
                - Call sum(2)
                
                Call 9: sum(2)
                  - n = 2, n === 0? NO
                  - Print: 2
                  - Call sum(1)
                  
                  Call 10: sum(1)
                    - n = 1, n === 0? NO
                    - Print: 1
                    - Call sum(0)
                    
                    Call 11: sum(0)
                      - n = 0, n === 0? YES → BASE CASE!
                      - RETURN (stop recursion)
                    
                  ← Return to sum(1)
                ← Return to sum(2)
              ← Return to sum(3)
            ← Return to sum(4)
          ← Return to sum(5)
        ← Return to sum(6)
      ← Return to sum(7)
    ← Return to sum(8)
  ← Return to sum(9)
← Return to sum(10)

DONE!

Output: 10 9 8 7 6 5 4 3 2 1
```

---

## 📊 Call Stack Visualization

### How the Call Stack Works
```
Stack grows DOWN as functions are called
Stack shrinks UP as functions return

Initial: [empty]

After sum(10): [sum(10)]
After sum(9):  [sum(10), sum(9)]
After sum(8):  [sum(10), sum(9), sum(8)]
After sum(7):  [sum(10), sum(9), sum(8), sum(7)]
After sum(6):  [sum(10), sum(9), sum(8), sum(7), sum(6)]
After sum(5):  [sum(10), sum(9), sum(8), sum(7), sum(6), sum(5)]
After sum(4):  [sum(10), sum(9), sum(8), sum(7), sum(6), sum(5), sum(4)]
After sum(3):  [sum(10), sum(9), sum(8), sum(7), sum(6), sum(5), sum(4), sum(3)]
After sum(2):  [sum(10), sum(9), sum(8), sum(7), sum(6), sum(5), sum(4), sum(3), sum(2)]
After sum(1):  [sum(10), sum(9), sum(8), sum(7), sum(6), sum(5), sum(4), sum(3), sum(2), sum(1)]
After sum(0):  [sum(10), sum(9), sum(8), sum(7), sum(6), sum(5), sum(4), sum(3), sum(2), sum(1), sum(0)] ← MAX DEPTH!

Base case hit! Start returning...

After return: [sum(10), sum(9), sum(8), sum(7), sum(6), sum(5), sum(4), sum(3), sum(2), sum(1)]
After return: [sum(10), sum(9), sum(8), sum(7), sum(6), sum(5), sum(4), sum(3), sum(2)]
After return: [sum(10), sum(9), sum(8), sum(7), sum(6), sum(5), sum(4), sum(3)]
... continues until...
After return: [empty] ← ALL DONE!
```

### Space Complexity Note
```
Space: O(n)
Because we have n function calls on the stack simultaneously!
```

---

## 🎓 Classic Recursion Examples

### Example 1: Calculate Sum of Numbers

#### With Return Value
```javascript
function sum(n) {
    // Base case
    if (n === 0) {
        return 0
    }
    
    // Recursive case
    return n + sum(n - 1)
}

console.log(sum(5)) // Output: 15
```

#### Dry Run
```
sum(5)
= 5 + sum(4)
= 5 + (4 + sum(3))
= 5 + (4 + (3 + sum(2)))
= 5 + (4 + (3 + (2 + sum(1))))
= 5 + (4 + (3 + (2 + (1 + sum(0)))))
= 5 + (4 + (3 + (2 + (1 + 0))))   ← Base case returns 0
= 5 + (4 + (3 + (2 + 1)))
= 5 + (4 + (3 + 3))
= 5 + (4 + 6)
= 5 + 10
= 15 ✓
```

---

### Example 2: Factorial

```javascript
function factorial(n) {
    // Base case
    if (n === 0 || n === 1) {
        return 1
    }
    
    // Recursive case
    return n * factorial(n - 1)
}

console.log(factorial(5)) // Output: 120
```

#### Dry Run
```
factorial(5)
= 5 * factorial(4)
= 5 * (4 * factorial(3))
= 5 * (4 * (3 * factorial(2)))
= 5 * (4 * (3 * (2 * factorial(1))))
= 5 * (4 * (3 * (2 * 1)))    ← Base case returns 1
= 5 * (4 * (3 * 2))
= 5 * (4 * 6)
= 5 * 24
= 120 ✓
```

#### Call Stack
```
[factorial(5)]
[factorial(5), factorial(4)]
[factorial(5), factorial(4), factorial(3)]
[factorial(5), factorial(4), factorial(3), factorial(2)]
[factorial(5), factorial(4), factorial(3), factorial(2), factorial(1)] ← Base case!

Now unwinding with values:
[factorial(5), factorial(4), factorial(3), factorial(2)] → returns 2
[factorial(5), factorial(4), factorial(3)] → returns 6
[factorial(5), factorial(4)] → returns 24
[factorial(5)] → returns 120
[] → DONE!
```

---

### Example 3: Fibonacci

```javascript
function fibonacci(n) {
    // Base cases
    if (n === 0) return 0
    if (n === 1) return 1
    
    // Recursive case: sum of previous two
    return fibonacci(n - 1) + fibonacci(n - 2)
}

console.log(fibonacci(6)) // Output: 8
```

#### Dry Run
```
fibonacci(6)
= fibonacci(5) + fibonacci(4)
= (fibonacci(4) + fibonacci(3)) + (fibonacci(3) + fibonacci(2))
= ((fibonacci(3) + fibonacci(2)) + (fibonacci(2) + fibonacci(1))) + ((fibonacci(2) + fibonacci(1)) + (fibonacci(1) + fibonacci(0)))
... continues breaking down...

Eventually:
= ((2 + 1) + (1 + 1)) + ((1 + 1) + (1 + 0))
= (3 + 2) + (2 + 1)
= 5 + 3
= 8 ✓

Sequence: 0, 1, 1, 2, 3, 5, 8, 13, 21...
```

#### Tree Visualization
```
                    fib(6)
                   /      \
              fib(5)        fib(4)
             /      \       /      \
        fib(4)   fib(3) fib(3)   fib(2)
        /   \     /  \    /  \     /   \
    fib(3) fib(2) ...     ...    fib(1) fib(0)
     / \    / \
   ... ... ... ...
   
Notice: Many repeated calculations!
This is why Fibonacci is often optimized with memoization.
```

---

### Example 4: Power Function

```javascript
function power(base, exponent) {
    // Base case
    if (exponent === 0) {
        return 1
    }
    
    // Recursive case
    return base * power(base, exponent - 1)
}

console.log(power(2, 5)) // Output: 32
```

#### Dry Run
```
power(2, 5)
= 2 * power(2, 4)
= 2 * (2 * power(2, 3))
= 2 * (2 * (2 * power(2, 2)))
= 2 * (2 * (2 * (2 * power(2, 1))))
= 2 * (2 * (2 * (2 * (2 * power(2, 0)))))
= 2 * (2 * (2 * (2 * (2 * 1))))    ← Base case
= 2 * (2 * (2 * (2 * 2)))
= 2 * (2 * (2 * 4))
= 2 * (2 * 8)
= 2 * 16
= 32 ✓

2^5 = 2 × 2 × 2 × 2 × 2 = 32
```

---

### Example 5: Count Digits

```javascript
function countDigits(n) {
    // Base case
    if (n === 0) {
        return 0
    }
    
    // Recursive case: remove last digit and count + 1
    return 1 + countDigits(Math.floor(n / 10))
}

console.log(countDigits(12345)) // Output: 5
```

#### Dry Run
```
countDigits(12345)
= 1 + countDigits(1234)
= 1 + (1 + countDigits(123))
= 1 + (1 + (1 + countDigits(12)))
= 1 + (1 + (1 + (1 + countDigits(1))))
= 1 + (1 + (1 + (1 + (1 + countDigits(0)))))
= 1 + (1 + (1 + (1 + (1 + 0))))    ← Base case
= 1 + (1 + (1 + (1 + 1)))
= 1 + (1 + (1 + 2))
= 1 + (1 + 3)
= 1 + 4
= 5 ✓
```

---

### Example 6: Reverse String

```javascript
function reverseString(str) {
    // Base case: empty or single character
    if (str.length <= 1) {
        return str
    }
    
    // Recursive case: last char + reverse of rest
    return str[str.length - 1] + reverseString(str.slice(0, -1))
}

console.log(reverseString("hello")) // Output: "olleh"
```

#### Dry Run
```
reverseString("hello")
= "o" + reverseString("hell")
= "o" + ("l" + reverseString("hel"))
= "o" + ("l" + ("l" + reverseString("he")))
= "o" + ("l" + ("l" + ("e" + reverseString("h"))))
= "o" + ("l" + ("l" + ("e" + "h")))    ← Base case (length 1)
= "o" + ("l" + ("l" + "eh"))
= "o" + ("l" + "leh")
= "o" + "lleh"
= "olleh" ✓
```

---

## 🎨 Recursion Patterns

### Pattern 1: Linear Recursion
One recursive call per function call.

```javascript
function linear(n) {
    if (n === 0) return
    console.log(n)
    linear(n - 1)  // Only ONE recursive call
}
```

### Pattern 2: Binary Recursion
Two recursive calls per function call.

```javascript
function binary(n) {
    if (n === 0) return 0
    return binary(n - 1) + binary(n - 2)  // TWO recursive calls
}
```

### Pattern 3: Tail Recursion
Recursive call is the LAST operation (can be optimized).

```javascript
function tailRecursive(n, accumulator = 0) {
    if (n === 0) return accumulator
    return tailRecursive(n - 1, accumulator + n)  // Nothing after this call
}
```

---

## 🔄 Recursion vs Iteration

### Same Problem, Different Approaches

#### Recursive Version
```javascript
function sumRecursive(n) {
    if (n === 0) return 0
    return n + sumRecursive(n - 1)
}
```

#### Iterative Version
```javascript
function sumIterative(n) {
    let sum = 0
    for (let i = 1; i <= n; i++) {
        sum += i
    }
    return sum
}
```

### Comparison

| Aspect           | Recursion                | Iteration              |
|------------------|--------------------------|------------------------|
| Code             | Often shorter, elegant   | More verbose           |
| Space            | O(n) - call stack        | O(1) - no extra space  |
| Speed            | Slower (function calls)  | Faster                 |
| Readability      | Natural for some problems| Can be clearer         |
| Stack Overflow?  | Risk with deep recursion | No risk                |

### When to Use Recursion?
- Tree/graph traversal
- Divide and conquer algorithms
- Problem naturally recursive (Fibonacci, factorial)
- When code clarity matters more than efficiency

### When to Use Iteration?
- Simple loops and counters
- Performance critical code
- Very large inputs (avoid stack overflow)
- When space is limited

---

## ⚠️ Common Mistakes

### Mistake 1: Missing Base Case
```javascript
// ❌ WRONG: Will run forever!
function infinite(n) {
    console.log(n)
    infinite(n - 1)  // No stopping condition!
}

// ✅ CORRECT:
function correct(n) {
    if (n === 0) return  // Base case!
    console.log(n)
    correct(n - 1)
}
```

### Mistake 2: Not Moving Toward Base Case
```javascript
// ❌ WRONG: n never decreases!
function stuck(n) {
    if (n === 0) return
    console.log(n)
    stuck(n)  // Same value! Never reaches base case!
}

// ✅ CORRECT:
function progress(n) {
    if (n === 0) return
    console.log(n)
    stuck(n - 1)  // Decreases toward 0
}
```

### Mistake 3: Wrong Base Case
```javascript
// ❌ WRONG: For negative numbers!
function buggy(n) {
    if (n === 0) return  // What if n is negative?
    console.log(n)
    buggy(n - 1)  // -1, -2, -3... infinite!
}

// ✅ CORRECT:
function safe(n) {
    if (n <= 0) return  // Handles negative and zero!
    console.log(n)
    safe(n - 1)
}
```

### Mistake 4: Modifying Parameters Incorrectly
```javascript
// ❌ WRONG:
function wrong(n) {
    if (n === 0) return 0
    n = n - 1  // Don't modify then pass original!
    return n + wrong(n)  // Wrong value passed
}

// ✅ CORRECT:
function correct(n) {
    if (n === 0) return 0
    return n + correct(n - 1)  // Pass modified value directly
}
```

---

## 🎯 Practice Problems (Easy to Hard)

### Level 1: Basics

#### 1. Print Numbers (Ascending)
```javascript
function printAscending(start, end) {
    if (start > end) return
    console.log(start)
    printAscending(start + 1, end)
}
printAscending(1, 5) // Output: 1 2 3 4 5
```

#### 2. Sum of Array
```javascript
function sumArray(arr, index = 0) {
    if (index === arr.length) return 0
    return arr[index] + sumArray(arr, index + 1)
}
console.log(sumArray([1, 2, 3, 4, 5])) // Output: 15
```

#### 3. Count Occurrences
```javascript
function countOccurrences(arr, target, index = 0) {
    if (index === arr.length) return 0
    let count = arr[index] === target ? 1 : 0
    return count + countOccurrences(arr, target, index + 1)
}
console.log(countOccurrences([1, 2, 3, 2, 2], 2)) // Output: 3
```

---

### Level 2: Intermediate

#### 4. Binary Search (Recursive)
```javascript
function binarySearch(arr, target, left = 0, right = arr.length - 1) {
    if (left > right) return -1  // Not found
    
    let mid = Math.floor((left + right) / 2)
    
    if (arr[mid] === target) return mid
    if (arr[mid] < target) {
        return binarySearch(arr, target, mid + 1, right)
    } else {
        return binarySearch(arr, target, left, mid - 1)
    }
}
console.log(binarySearch([1, 2, 3, 4, 5], 4)) // Output: 3
```

#### 5. Palindrome Check
```javascript
function isPalindrome(str, left = 0, right = str.length - 1) {
    if (left >= right) return true  // All matched
    if (str[left] !== str[right]) return false
    return isPalindrome(str, left + 1, right - 1)
}
console.log(isPalindrome("racecar")) // Output: true
```

#### 6. GCD (Greatest Common Divisor)
```javascript
function gcd(a, b) {
    if (b === 0) return a
    return gcd(b, a % b)
}
console.log(gcd(48, 18)) // Output: 6
```

---

### Level 3: Advanced

#### 7. Generate All Permutations
```javascript
function permutations(str, prefix = "") {
    if (str.length === 0) {
        console.log(prefix)
        return
    }
    
    for (let i = 0; i < str.length; i++) {
        let char = str[i]
        let remaining = str.slice(0, i) + str.slice(i + 1)
        permutations(remaining, prefix + char)
    }
}
permutations("abc")
// Output: abc, acb, bac, bca, cab, cba
```

#### 8. Tower of Hanoi
```javascript
function towerOfHanoi(n, from, to, aux) {
    if (n === 1) {
        console.log(`Move disk 1 from ${from} to ${to}`)
        return
    }
    towerOfHanoi(n - 1, from, aux, to)
    console.log(`Move disk ${n} from ${from} to ${to}`)
    towerOfHanoi(n - 1, aux, to, from)
}
towerOfHanoi(3, 'A', 'C', 'B')
```

---

## 📖 Step-by-Step Recursion Checklist

When writing recursive functions:

1. **✅ Identify the base case**
   - What's the simplest input?
   - When should it stop?

2. **✅ Identify the recursive case**
   - How to break problem into smaller parts?
   - What's the recursive call?

3. **✅ Make sure you're progressing**
   - Is each call getting closer to base case?
   - Will it eventually reach the base case?

4. **✅ Trust the recursion**
   - Assume recursive call works correctly
   - Focus on combining results

5. **✅ Test with small inputs**
   - Try with n=0, n=1, n=2
   - Trace execution manually

---

## 🎓 Key Takeaways

1. **Two Parts:** Base case + Recursive case
2. **Call Stack:** Functions pile up, then unwind
3. **Space Cost:** O(n) for n recursive calls
4. **Think Small:** Trust recursion handles subproblems
5. **Test Edge Cases:** Empty input, single element, negative numbers

---

## 💡 Pro Tips

### Tip 1: Draw the Call Tree
Visualize how function calls branch out.

### Tip 2: Use Print Statements
Debug by printing at entry and exit:
```javascript
function debug(n) {
    console.log("Entering with n =", n)
    if (n === 0) {
        console.log("Base case reached!")
        return 0
    }
    let result = n + debug(n - 1)
    console.log("Returning", result, "for n =", n)
    return result
}
```

### Tip 3: Start with Base Case
Always write base case first!

### Tip 4: Memoization for Optimization
Cache results to avoid repeated calculations:
```javascript
let memo = {}
function fib(n) {
    if (n in memo) return memo[n]
    if (n <= 1) return n
    memo[n] = fib(n - 1) + fib(n - 2)
    return memo[n]
}
```

### Tip 5: Convert to Iteration if Needed
Not all recursive solutions are efficient. Know when to switch!

---

## 🚀 Next Steps

1. **Practice the examples** above
2. **Draw call stacks** for each one
3. **Try variations** (ascending/descending, different data types)
4. **Solve LeetCode** recursion problems
5. **Learn advanced topics:**
   - Backtracking
   - Divide and Conquer
   - Dynamic Programming with recursion

---

## 📚 Summary

```
Recursion = Function calling itself

Essential Components:
├── Base Case (stop condition)
└── Recursive Case (self-call with smaller input)

Key Concepts:
├── Call Stack (functions pile up)
├── Space Complexity (O(n))
└── Trust the Recursion (don't overthink)

Common Patterns:
├── Linear Recursion (one call)
├── Binary Recursion (two calls)
└── Tail Recursion (optimizable)

When to Use:
├── Trees and Graphs
├── Divide and Conquer
├── Natural recursive problems
└── When clarity > performance
```

---

**Remember:** Every recursive problem can be solved iteratively, but some problems are naturally recursive. Choose the approach that makes the code clearer and more maintainable!

Happy Recursing! 🎉
