---
title: Bitovski operatori u Javaskriptu
layout: post
tags: [bitovi, javascript, racunarska-nauka]
---

## Inputting and outputting binary numbers

In the following examples, we work with binary numbers, via the following two operations:
parseInt(str, 2) parses a string str in binary notation (base 2). For example:

> parseInt('110', 2)
6

num.toString(2) converts the number num to a string in binary notation. For example:

> 6..toString(2)
'110'

## Check if number is even or odd:

```js
n & 1    // jel neparan

1 & 1    // 1
2 & 1    // 0
```

Može i sa prvođenjem u istinosnu vrednost:
```js
!!(1 & 1)    // true
!!(2 & 1)    // false
```

The how:

```js
// 1 & 1
00000001 // 1
00000001 // 1
--------
00000001 // 1 (odd)

// 2 & 1
00000010 // 2
00000001 // 1
--------
00000000 // 0 (even)
```

## Variable swap:

var a = 1,
    b = 2;

a = a ^ b;
b = b ^ a;
a = a ^ b;

// shorthand

a ^= b;
b ^= a;
a ^= b;

// b = 1, a = 2

The how:

'a'.charCodeAt(0) // 97
'b'.charCodeAt(0) // 98

(97).toString(2) // 1100001
(98).toString(2) // 1100010

// a ^= b;
1100001 // 97 (a)
1100010 // 98 (b)
-------
0000011 // 3 (a)

// b ^= a;
1100010 // 98 (b)
0000011 // 3 (a)
-------
1100001 // 97 (b)

// a ^= b;
0000011 // 3 (a)
1100001 // 97 (b)
-------
1100010 // 98 (a)

String.fromCharCode(97); // b = 'a'
String.fromCharCode(98); // a = 'b'

## Shorthand indexOf:

!!~[1].indexOf(2) // false
!!~[1].indexOf(1) // true

The how:

[1].indexOf(2) // -1
[1].indexOf(1) // 0

~-1 // 0
~0 // -1

!!0 // false
!!-1 // true

## Fast truncation:

// for positive numbers it can be a faster substitute for Math.floor()
~~(5.3) // 5

// negative truncation
~~(-5.3) // -5

## Brzo množenje i deljenje sa osnovom dva

8 >> 1 // 4
8 >> 2 // 2

8 << 1 // 16
8 << 2 // 32

The how:

// 8 >> 1
00001000 // 8
00000100 // 4

// 8 >> 2
00001000 // 8
00000010 // 2

// 8 << 1
00001000 // 8
00010000 // 16

// 8 << 2
00001000 // 8
00100000 // 32

## Decimal to Integer

4.12 >> 0 // 4
4.12 << 0 // 4

-4.12 >> 0 // -4
-4.12 << 0 // -4

## Konverzija tipa

"3" | 0     // 3
"5" >>> 0   // 5
true >>> 0  // 1

### Obrtanje vrednosti

Bitwise XOR

value ^= 1
value ? "Close dropdown" : "Open dropdown";
