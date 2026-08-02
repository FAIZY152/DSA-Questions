# Day 07 - Advanced Array Problems

## Problem 1: Best Time to Buy and Sell Stock

**Problem:** Find maximum profit from buying and selling stock once (buy before sell).

### Approach 1: Brute Force
**Time:** O(n²) | **Space:** O(1)

### Dry Run - Brute Force
```javascript
arr = [7, 1, 5, 3, 6, 4]
maxProfit = 0

i=0, buy=7:
  j=1: sell=1, profit=1-7=-6,  maxProfit=max(0,-6)=0
  j=2: sell=5, profit=5-7=-2,  maxProfit=max(0,-2)=0
  j=3: sell=3, profit=3-7=-4,  maxProfit=max(0,-4)=0
  j=4: sell=6, profit=6-7=-1,  maxProfit=max(0,-1)=0
  j=5: sell=4, profit=4-7=-3,  maxProfit=max(0,-3)=0

i=1, buy=1:
  j=2: sell=5, profit=5-1=4,   maxProfit=max(0,4)=4  ← Update!
  j=3: sell=3, profit=3-1=2,   maxProfit=max(4,2)=4
  j=4: sell=6, profit=6-1=5,   maxProfit=max(4,5)=5  ← Update!
  j=5: sell=4, profit=4-1=3,   maxProfit=max(5,3)=5

i=2, buy=5:
  j=3: sell=3, profit=3-5=-2,  maxProfit=max(5,-2)=5
  j=4: sell=6, profit=6-5=1,   maxProfit=max(5,1)=5
  j=5: sell=4, profit=4-5=-1,  maxProfit=max(5,-1)=5

...continue for i=3,4,5...

Final: maxProfit = 5 (buy at 1, sell at 6)
```

---

### Approach 2: One Pass (OPTIMAL)
**Time:** O(n) | **Space:** O(1)

### Dry Run - Optimal
```javascript
arr = [7, 1, 5, 3, 6, 4]
min = 7
maxProfit = 0

Step 1: i=0, arr[0]=7
  - 7 < 7? NO  → min=7
  - profit = 7-7=0
  - 0 > 0? NO  → maxProfit=0
  State: min=7, maxProfit=0

Step 2: i=1, arr[1]=1
  - 1 < 7? YES → min=1  ← Found cheaper buy price!
  - profit = 1-1=0
  - 0 > 0? NO  → maxProfit=0
  State: min=1, maxProfit=0

Step 3: i=2, arr[2]=5
  - 5 < 1? NO  → min=1
  - profit = 5-1=4
  - 4 > 0? YES → maxProfit=4  ← First profit!
  State: min=1, maxProfit=4

Step 4: i=3, arr[3]=3
  - 3 < 1? NO  → min=1
  - profit = 3-1=2
  - 2 > 4? NO  → maxProfit=4
  State: min=1, maxProfit=4

Step 5: i=4, arr[4]=6
  - 6 < 1? NO  → min=1
  - profit = 6-1=5
  - 5 > 4? YES → maxProfit=5  ← Better profit!
  State: min=1, maxProfit=5

Step 6: i=5, arr[5]=4
  - 4 < 1? NO  → min=1
  - profit = 4-1=3
  - 3 > 5? NO  → maxProfit=5
  State: min=1, maxProfit=5

Final: maxProfit = 5 ✓
```

### Key Insight
```
For each price:
1. Track minimum price seen so far (best buy point)
2. Calculate profit if we sell today
3. Update maximum profit

We don't need to track when to buy/sell,
just the maximum profit amount.
```

### Visual Representation
```
Prices: [7, 1, 5, 3, 6, 4]

Min tracking:
[7] min=7
[7,1] min=1  ← Update (found cheaper)
[7,1,5] min=1
[7,1,5,3] min=1
[7,1,5,3,6] min=1
[7,1,5,3,6,4] min=1

Profit calculation at each step:
Position 0: 7-7=0
Position 1: 1-1=0
Position 2: 5-1=4  ← profit found
Position 3: 3-1=2
Position 4: 6-1=5  ← better profit!
Position 5: 4-1=3

Best: Buy at 1 (index 1), Sell at 6 (index 4) = profit 5
```

---

## Problem 2: Merge Sorted Array

**Problem:** Merge two sorted arrays into first array (has extra space at end).

### Setup
```javascript
arr1 = [1, 2, 3, 0, 0, 0]  // m=3 (actual elements)
arr2 = [2, 5, 6]            // n=3
// Merge arr2 into arr1
```

### Approach 1: Merge Then Sort
**Time:** O((m+n)log(m+n)) | **Space:** O(1)

### Dry Run - Merge Then Sort
```javascript
arr1 = [1, 2, 3, 0, 0, 0]
arr2 = [2, 5, 6]
m = 3, n = 3

Step 1: Copy arr2 into arr1's empty space
for i=0 to 2:
  arr1[3+0] = arr2[0] = 2
  arr1[3+1] = arr2[1] = 5
  arr1[3+2] = arr2[2] = 6

arr1 = [1, 2, 3, 2, 5, 6]

Step 2: Sort entire array
arr1.sort((a,b) => a-b)
arr1 = [1, 2, 2, 3, 5, 6] ✓
```

---

### Approach 2: Three Pointers (OPTIMAL)
**Time:** O(m+n) | **Space:** O(1)

### Dry Run - Three Pointers (Right to Left)
```javascript
arr1 = [1, 2, 3, 0, 0, 0]
arr2 = [2, 5, 6]
m = 3, n = 3

p1 = m - 1 = 2 (last element of arr1)
p2 = n - 1 = 2 (last element of arr2)
i = m + n - 1 = 5 (last position to fill)

Step 1: i=5
  - p1=2, p2=2
  - arr1[2]=3, arr2[2]=6
  - 3 > 6? NO
  - arr1[5] = arr2[2] = 6
  - p2 = 1
  arr1 = [1, 2, 3, 0, 0, 6]
         p1=2 ↑        ↑ i=5
  arr2 = [2, 5, 6]
            ↑ p2=1

Step 2: i=4
  - p1=2, p2=1
  - arr1[2]=3, arr2[1]=5
  - 3 > 5? NO
  - arr1[4] = arr2[1] = 5
  - p2 = 0
  arr1 = [1, 2, 3, 0, 5, 6]
         p1=2 ↑     ↑ i=4
  arr2 = [2, 5, 6]
         ↑ p2=0

Step 3: i=3
  - p1=2, p2=0
  - arr1[2]=3, arr2[0]=2
  - 3 > 2? YES
  - arr1[3] = arr1[2] = 3
  - p1 = 1
  arr1 = [1, 2, 3, 3, 5, 6]
            ↑ p1=1  ↑ i=3
  arr2 = [2, 5, 6]
         ↑ p2=0

Step 4: i=2
  - p1=1, p2=0
  - arr1[1]=2, arr2[0]=2
  - 2 > 2? NO (not strictly greater)
  - arr1[2] = arr2[0] = 2
  - p2 = -1
  arr1 = [1, 2, 2, 3, 5, 6]
            ↑ p1=1 ↑ i=2
  arr2 = [2, 5, 6]
            ↑ p2=-1 (done)

Step 5: p2 < 0, break

Final: arr1 = [1, 2, 2, 3, 5, 6] ✓
```

### Why Right to Left?
```
Starting from the end:
- We have empty space (0s) at the end
- Can place largest elements first
- Won't overwrite unprocessed elements
- No need for extra space

Starting from the beginning:
- Would overwrite elements we haven't processed yet
- Would need extra space to store original arr1
```

### Visual Representation
```
Initial:
arr1: [1, 2, 3, _, _, _]
       p1→   ↑        ↑
                      i
arr2: [2, 5, 6]
             ↑
            p2

Step 1: Compare 3 vs 6 → place 6
arr1: [1, 2, 3, _, _, 6]
       p1→   ↑     ↑
                   i
arr2: [2, 5, 6]
          ↑
         p2

Step 2: Compare 3 vs 5 → place 5
arr1: [1, 2, 3, _, 5, 6]
       p1→   ↑  ↑
                i
arr2: [2, 5, 6]
       ↑
      p2

Step 3: Compare 3 vs 2 → place 3
arr1: [1, 2, 3, 3, 5, 6]
          ↑  ↑
         p1  i
arr2: [2, 5, 6]
       ↑
      p2

Step 4: Compare 2 vs 2 → place 2 from arr2
arr1: [1, 2, 2, 3, 5, 6]
          ↑↑
         p1 i (arr2 exhausted)

Done! All elements merged.
```

---

## Edge Cases

### Stock Problem
```javascript
// 1. Prices always decreasing
arr = [5, 4, 3, 2, 1]
// min=1, but it's at the end
// maxProfit = 0 (can't buy and sell)

// 2. All same price
arr = [3, 3, 3, 3]
// maxProfit = 0

// 3. Only one price
arr = [5]
// maxProfit = 0 (can't sell)
```

### Merge Arrays
```javascript
// 1. One array is empty
arr1 = [1, 2, 3, 0, 0, 0], m=3
arr2 = [], n=0
// Result: [1, 2, 3, 0, 0, 0] (no change)

// 2. All arr2 elements are larger
arr1 = [1, 2, 3, 0, 0, 0], m=3
arr2 = [4, 5, 6], n=3
// Just place arr2 at the end

// 3. All arr2 elements are smaller
arr1 = [4, 5, 6, 0, 0, 0], m=3
arr2 = [1, 2, 3], n=3
// Need to shift everything
```

---

## Key Takeaways

### Buy Sell Stock
1. **Track minimum price** seen so far
2. **Calculate profit** at each step (current - min)
3. **Update max profit** if current is better
4. One pass solution: O(n)
5. Can't buy and sell on same day

### Merge Sorted Arrays
1. **Three pointers**: p1, p2, and write position
2. **Start from end**: avoids overwriting
3. **Compare and place larger**: fill from right to left
4. **Handle remaining elements**: usually from arr2
5. In-place in arr1: O(1) space

---

## Interview Tips

### Stock Problem
- Mention both approaches
- Explain why one pass works
- "Track min as we go, calculate profit at each step"
- Edge case: what if prices always decrease? (profit = 0)

### Merge Arrays
- Ask: are both arrays sorted? (yes)
- Ask: does arr1 have enough space? (yes)
- Explain why we start from the end
- Time: O(m+n), Space: O(1)
- Mention the naive approach first (copy and sort)

---

## Complexity Summary

| Problem        | Brute Force  | Optimal Time | Optimal Space | Key Technique    |
|----------------|--------------|--------------|---------------|------------------|
| Buy Sell Stock | O(n²)        | O(n)         | O(1)          | Track min        |
| Merge Arrays   | O(n log n)   | O(m+n)       | O(1)          | Three pointers   |

---

## Pattern Recognition

Both problems use **greedy approach**:
- Stock: Always track the best seen so far (min price)
- Merge: Always place the largest available element

This "best so far" pattern is common in array problems!
