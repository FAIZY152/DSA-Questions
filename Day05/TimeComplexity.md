The correct order from fastest to slowest is:

O(1)
    ↓
O(log n)
    ↓
O(n)
    ↓
O(n log n)
    ↓
O(n²)
    ↓
O(n³)
    ↓
O(2ⁿ)
    ↓
O(n!)

Notice that O(log n) is actually better than O(n), not the other way around.

Let's understand why.

Imagine You Have 1,000,000 Books 📚

Suppose you're searching for one specific book.

There are different ways to find it.

1. O(log n) — Binary Search ⭐⭐⭐⭐⭐

Imagine all books are sorted alphabetically.

You don't start from the first book.

Instead:

1,000,000 books

↓

Open the middle

↓

Wrong?

Choose left half

↓

Wrong?

Choose middle again

↓

Wrong?

Half again

↓

Half again

Every step cuts the search space in half.

Example:

1000000

↓

500000

↓

250000

↓

125000

↓

62500

↓

31250

↓

...

Instead of checking 1 million books, you check only about 20 books.

Amazing!

JavaScript Example
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {

        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === target)
            return mid;

        if (arr[mid] < target)
            left = mid + 1;
        else
            right = mid - 1;
    }

    return -1;
}

Time Complexity

O(log n)
2. O(n) — Linear Search ⭐⭐⭐⭐

Now suppose the books are not sorted.

You must check one by one.

Book 1

↓

Book 2

↓

Book 3

↓

Book 4

↓

...

Worst case

You check all books.

Example

function linearSearch(arr, target){

    for(let i=0;i<arr.length;i++){

        if(arr[i]===target){

            return i;

        }

    }

    return -1;

}

Time

O(n)
Compare

Suppose

n = 1,000,000

Linear Search

Need about

1,000,000 checks

Binary Search

Need about

20 checks

That's why

O(log n)

is MUCH faster than

O(n)
3. O(n log n)

Now imagine you have to sort those books.

Algorithms like

Merge Sort
Heap Sort
Quick Sort (average)

work in

O(n log n)

Why?

They repeatedly divide the data (log n) and process all elements (n).

Rough idea:

1000 books

↓

Split

↓

Split

↓

Split

↓

Merge everything

Time

n × log n

Example

1000

×

10

=

10000 operations
4. O(2ⁿ)

This is where algorithms become very slow.

Suppose you have 3 switches.

Each switch has

ON

OFF

How many combinations?

2 × 2 × 2

=

8

If

20 switches

Then

2²⁰

=

1,048,576 combinations

Every new item doubles the work.

Example

Finding all subsets.

Input

[1,2,3]

Output

[]

[1]

[2]

[3]

[1,2]

[1,3]

[2,3]

[1,2,3]

There are

2ⁿ

subsets

Time

O(2ⁿ)
5. O(n!)

This is the slowest common complexity.

Imagine arranging people in every possible order.

For

ABC

Possible arrangements

ABC

ACB

BAC

BCA

CAB

CBA

There are

3!

=

6

Now

10 people
10!

=

3,628,800

Now

15 people
15!

=

1,307,674,368,000

That's over 1.3 trillion possibilities.

Algorithms that generate all permutations usually have

O(n!)
Let's Compare Using the Same Input

Suppose

n = 16
Complexity	Approximate Operations
O(log n)	4
O(n)	16
O(n log n)	64
O(n²)	256
O(n³)	4,096
O(2ⁿ)	65,536
O(n!)	20,922,789,888,000

Notice how O(2ⁿ) and O(n!) explode as n grows.

Visual Growth
n = 8

O(log n)      █

O(n)          ████

O(n log n)    ███████

O(n²)         ████████████████

O(n³)         █████████████████████████████████████

O(2ⁿ)         ████████████████████████████████████████████████████████████████

O(n!)         █████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████

The bars aren't to scale, but they show how quickly the growth accelerates.

Interview Tip

Whenever you analyze an algorithm, ask yourself:

Does it divide the problem in half every step? → O(log n)
Does it visit every element once? → O(n)
Does it sort efficiently using divide-and-conquer? → O(n log n)
Does it have nested loops over the same input? → O(n²) (or higher)
Does it try every subset? → O(2ⁿ)
Does it try every possible ordering (permutation)? → O(n!)