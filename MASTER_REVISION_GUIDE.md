# 20k DSA Course - Master Revision Guide

> Complete dry run explanations, patterns, and flow diagrams for quick revision

## 📚 Overview

This guide contains detailed explanations for all problems covered in your DSA journey. Each day's REVISION.md file includes:
- ✅ Complete dry runs with step-by-step execution
- ✅ Pattern identification and classification
- ✅ Time & Space complexity analysis
- ✅ Visual representations and examples
- ✅ Common edge cases and mistakes
- ✅ Interview tips and talking points

---

## 📖 Day-by-Day Content

### [Day 01 - Array Basics & String Problems](./Day01/REVISION.md)
**Topics Covered:**
- Linear Search
- Filter operations
- Anagram checking
- Contains Duplicate (3 approaches)

**Key Patterns:**
- Linear search: O(n)
- Hash Set for duplicates: O(n) time, O(n) space
- Character marking for anagrams

**Interview Focus:** Always mention multiple approaches for "Contains Duplicate"

---

### [Day 02 - Finding Extremes in Arrays](./Day02/REVISION.md)
**Topics Covered:**
- Find Largest/Smallest Number
- Second Largest Number

**Key Patterns:**
- Single pass tracking with `-Infinity`/`Infinity`
- Two-variable tracking for second largest

**Interview Focus:** Explain why `-Infinity` initialization matters

---

### [Day 03 - Nested Loops & Pattern Printing](./Day03/REVISION.md)
**Topics Covered:**
- Nested loop mechanics
- Pattern printing (triangles, pyramids)
- Sum operations
- Filtering arrays

**Key Patterns:**
- Nested loops: O(n²)
- Pattern formulas: spaces = f(row), stars = g(row)

**Interview Focus:** Draw the pattern first, find the formula

---

### [Day 04 - Number Manipulation](./Day04/REVISION.md)
**Topics Covered:**
- Count Digits
- Palindrome Number

**Key Patterns:**
- Division by 10: removes last digit
- Modulo 10: extracts last digit
- Building reversed numbers

**Interview Focus:** Time complexity is O(log n) not O(n)!

---

### [Day 05 - Array Manipulation & Two Pointers](./Day05/REVISION.md)
**Topics Covered:**
- Reverse Integer
- Remove Duplicates (sorted array)
- Remove Element
- Majority Element (Boyer-Moore)

**Key Patterns:**
- Two pointers: slow-fast for in-place modifications
- Voting algorithm: O(n) time, O(1) space

**Interview Focus:** Two pointers save space - O(1) vs O(n)

---

### [Day 06 - Two Pointers & Hashing](./Day06/REVISION.md)
**Topics Covered:**
- Majority Element (3 approaches)
- Two Sum Problem
- Reverse String

**Key Patterns:**
- Hash Map for Two Sum: O(n) time
- Two pointers (opposite direction) for reversal
- Boyer-Moore voting

**Interview Focus:** Hash Map wins for Two Sum in most cases

---

### [Day 07 - Advanced Array Problems](./Day07/REVISION.md)
**Topics Covered:**
- Buy and Sell Stock
- Merge Sorted Arrays

**Key Patterns:**
- Track minimum for stock: O(n)
- Three pointers (right to left) for merge: O(m+n)

**Interview Focus:** Explain why merging from right to left works

---

### [Day 09 - Consecutive Sequences](./Day09/REVISION.md)
**Topics Covered:**
- Max Consecutive Ones
- Move Zeros to End

**Key Patterns:**
- Counter reset pattern
- Two pointers: write-read positions

**Interview Focus:** Reset vs continuous tracking

---

### [Day 10 - Mathematical & Bit Manipulation](./Day10/REVISION.md)
**Topics Covered:**
- Missing Number
- Single Number (XOR)
- Power(x, n) - Binary Exponentiation

**Key Patterns:**
- Sum formula: n(n+1)/2
- XOR properties: a ^ a = 0
- Binary exponentiation: O(log n)

**Interview Focus:** XOR is magical for pairs! Explain a^a=0

---

### [Day 11 - Kadane's Algorithm](./Day11/REVISION.md)
**Topics Covered:**
- Maximum Subarray Sum

**Key Patterns:**
- Kadane's Algorithm: O(n)
- Reset when current sum goes negative
- Greedy + Dynamic Programming

**Interview Focus:** "This is Kadane's Algorithm" - name it!

---

## 🎯 Pattern Categories

### 1. **Array Traversal**
- Linear Search (Day 01)
- Find Max/Min (Day 02)
- Count/Filter (Day 03)

### 2. **Two Pointers**
- Same direction (Day 05, 09)
- Opposite direction (Day 06)
- Three pointers (Day 07)

### 3. **Hashing**
- Hash Set for duplicates (Day 01)
- Hash Map for pairs (Day 06)
- Hash Map for frequency (Day 10)

### 4. **Number Manipulation**
- Digit extraction (Day 04, 05)
- Reversal techniques (Day 04, 05, 06)

### 5. **Mathematical**
- Sum formulas (Day 10)
- Binary exponentiation (Day 10)
- Kadane's Algorithm (Day 11)

### 6. **Bit Manipulation**
- XOR properties (Day 10)

---

## 📊 Complexity Cheat Sheet

| Problem Type           | Optimal Time | Optimal Space | Key Technique       |
|------------------------|--------------|---------------|---------------------|
| Contains Duplicate     | O(n)         | O(n)          | Hash Set            |
| Second Largest         | O(n)         | O(1)          | Two variables       |
| Remove Duplicates      | O(n)         | O(1)          | Two Pointers        |
| Two Sum                | O(n)         | O(n)          | Hash Map            |
| Buy Sell Stock         | O(n)         | O(1)          | Track minimum       |
| Merge Arrays           | O(m+n)       | O(1)          | Three Pointers      |
| Move Zeros             | O(n)         | O(1)          | Two Pointers        |
| Missing Number         | O(n)         | O(1)          | Sum Formula         |
| Single Number          | O(n)         | O(1)          | XOR                 |
| Power(x,n)             | O(log n)     | O(1)          | Binary Exp          |
| Max Subarray           | O(n)         | O(1)          | Kadane's            |

---

## 🎓 Interview Preparation Tips

### Before the Interview
1. Review patterns by category (not by day)
2. Practice explaining dry runs verbally
3. Memorize time/space complexity for each pattern
4. Know multiple approaches for common problems

### During the Interview
1. **Always ask clarifying questions:**
   - Input constraints (size, range)
   - Edge cases (empty, single element, all same)
   - Output format (indices vs values)

2. **Communicate your approach:**
   - "This is a [pattern name] problem"
   - Mention brute force first if it's simple
   - Explain why optimal approach is better

3. **Walk through example:**
   - Use a small, simple example first
   - Then mention edge cases you'd test

4. **Analyze complexity:**
   - State both time and space
   - Explain why it's optimal (or trade-offs)

---

## 🔥 Most Important Concepts

### Must-Know for Interviews
1. **Hash Set/Map** - Fast lookups, duplicates, pairs
2. **Two Pointers** - In-place operations, save space
3. **Kadane's Algorithm** - Classic DP problem
4. **Binary Exponentiation** - O(log n) optimization
5. **XOR Properties** - Bit manipulation magic

### Common Mistakes to Avoid
1. ❌ Not handling negative numbers
2. ❌ Wrong pointer initialization
3. ❌ Forgetting to reset counters
4. ❌ Incorrect complexity analysis
5. ❌ Not testing edge cases

---

## 📝 Quick Reference: When to Use What

### Use Hash Set when:
- Finding duplicates
- Checking existence
- Need O(1) lookup

### Use Hash Map when:
- Counting frequencies
- Storing key-value pairs (Two Sum)
- Need to track indices

### Use Two Pointers when:
- Sorted array operations
- In-place modifications
- Want O(1) space
- Comparing/swapping elements

### Use XOR when:
- Finding single unique in pairs
- Swapping without temp variable
- Problem involves pairs canceling

### Use Math Formula when:
- Series sums (1+2+...+n)
- Missing numbers
- Avoiding iteration

---

## 🚀 Next Steps

1. **Practice Each Pattern** - Do 3-5 similar problems per pattern
2. **Time Yourself** - Aim to solve + explain in 20-30 minutes
3. **Mock Interviews** - Practice explaining to others
4. **Review Mistakes** - Keep a log of what you got wrong
5. **Variations** - Try harder versions of each problem

---

## 📌 Quick Navigation

Jump to specific days using links above, or use this index:

- **Arrays & Strings:** Days 01, 02, 03
- **Two Pointers:** Days 05, 06, 07, 09
- **Math & Numbers:** Days 04, 05, 10
- **Advanced Techniques:** Days 07, 10, 11
- **Patterns:** Day 03

---

## 💡 Pro Tips

1. **Name the pattern** in interviews (shows knowledge)
2. **Draw diagrams** for two pointers and arrays
3. **Start with brute force** (shows thinking process)
4. **Optimize step by step** (don't jump to solution)
5. **Test with examples** (catch bugs early)

---

## ✅ Checklist for Each Problem

Before moving to next problem, ensure you can:
- [ ] Explain the problem in your own words
- [ ] Identify the pattern/technique
- [ ] Do a complete dry run
- [ ] State time and space complexity
- [ ] Name at least 2 edge cases
- [ ] Explain why the approach is optimal
- [ ] Code it from memory

---

## 🎯 Your DSA Journey Progress

```
Day 01: Array Basics ✓
Day 02: Extremes ✓
Day 03: Patterns ✓
Day 04: Number Manipulation ✓
Day 05: Two Pointers ✓
Day 06: Hashing ✓
Day 07: Advanced Arrays ✓
Day 09: Sequences ✓
Day 10: Math & Bits ✓
Day 11: Kadane's ✓
```

**Total Problems Solved:** 29+
**Total Patterns Learned:** 10+

Keep going! 💪

---

*Last Updated: Day 11 Complete*
*Next Focus: Practice variations and mock interviews*
