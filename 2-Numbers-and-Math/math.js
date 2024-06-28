// We can do any basic operation in the console
2 + 2
> 4
10 - 3
> 7
// "*" for multiply and "/" for divide
10 * 3
> 30
10 / 2
> 5

// Math syntax is like normal math 
// We can use a lot of digits and decimals
2 + 2 + 2
> 6
2.2 + 2.2
> 4.4

//Calculate the products in the Checkout
10.90 * 2 + 20.95
> 42.75
10.90 * 2 + 20.95 + 4.99
> 47.74

// There is a order for the operations, and JS follow the rules
// * / done first
// + - done second
1 + 1 * 3
> 4

// We can use () to control which part go first
(1 + 1) * 3
> 6

// Syntax rules for ()
// We need open and closing brackets
// We need a complete calculation inside the brackets
20.95 + 7.99 * 2
> 36.93

// We can calculate percentages too
36.93 * 0.1
> 3.693

20.95 + 7.99 * 2 * 0.1
> 22.548
(20.95 + 7.99 * 2) * 0.1
> 3.693

// 1. Weird behavior of math in JavaScript
// 2,3,4 = integers
//2.2, 2.5 = floating point numbers (floats)

// Many programming languajes have problem with floats
// Binary doesnt allows to storage some decimal numbers
0.1 + 0.2
> 0.30000000000000004
20.65 + 7.99
> 28.93999999999998

// We can calculate in cents instead of dollars
(2095 + 799) / 100
> 28.94

// Round a number
Math.round(2.2)
> 2
Math.round(2.8)
> 3

((2095 + 799) * 0.1) / 100
> 2.894
Math.round((2095 + 799) * 0.1) / 100
>2.89