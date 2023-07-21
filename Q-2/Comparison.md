# Fibonacci Function Implementations

This repository contains three different implementations of the Fibonacci function in C. Each implementation uses a different approach to calculate the Fibonacci sequence, and we'll explore their advantages and disadvantages below.

## F_First(int n) - Dynamic Programming with Memoization

The function `F_First` uses dynamic programming with memoization to compute the Fibonacci sequence. It utilizes an array `memo` to store the results of previously computed Fibonacci numbers, avoiding redundant calculations. This approach improves the time complexity to O(n) for the first call, as each Fibonacci number is computed only once and then reused from the `memo` array.

Advantages:
- Efficient time complexity of O(n) for the first call.
- Avoids redundant calculations using memoization.
- Significantly speeds up calculations for large values of `n`.

Disadvantages:
- The `memo` array consumes additional memory space proportional to the maximum input value `MAX_N`.
- The `memo` array must be explicitly initialized to 0 before using it.
- The recursive nature of the function could lead to a stack overflow for very large input values of `n`.

## F_Second(int n) - Basic Recursion

The function `F_Second` implements the Fibonacci sequence using basic recursion. It is the simplest implementation, but it suffers from exponential time complexity of O(2^n) due to redundant function calls. The function recalculates Fibonacci numbers multiple times, leading to inefficient performance for large `n`.

Advantages:
- Simple and easy to understand implementation.
- Concise code.

Disadvantages:
- Exponential time complexity of O(2^n) due to redundant calculations.
- Can cause stack overflow errors for large input values of `n`.

## F_Third(int n) - Iterative Dynamic Programming

The function `F_Third` uses iterative dynamic programming to compute the Fibonacci sequence. It efficiently calculates each Fibonacci number in a single pass without redundant calculations, resulting in a linear time complexity of O(n).

Advantages:
- Efficient time complexity of O(n) as each Fibonacci number is calculated only once.
- Avoids recursion, reducing stack space requirements.
- More memory-efficient compared to memoization.

Disadvantages:
- The `dp` array consumes additional memory proportional to the input value `n`.
- Slightly more complex compared to the basic recursion but still more manageable than the recursive version with memoization.

Overall, the most efficient approach among the three is `F_Third(int n)` using iterative dynamic programming. It is recommended for calculating the Fibonacci sequence, especially for larger values of `n`. If memory usage is not a concern, and you need to calculate Fibonacci numbers for multiple different values of `n`, `F_First(int n)` with memoization would be the preferred choice due to its optimization of avoiding redundant calculations. `F_Second(int n)` should be avoided for large values of `n` due to its exponential time complexity and the potential for stack overflow errors.

Choose the appropriate implementation based on your specific requirements and constraints.
