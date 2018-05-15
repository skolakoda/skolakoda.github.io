---
title: Algoritam uparivanja čarapa
layout: lekcija-algoritmi
permalink: /algoritam-carapa
---

![](https://scontent-vie1-1.xx.fbcdn.net/v/t31.0-8/q82/p720x720/28616879_2035788323343022_8449107029541399640_o.jpg?_nc_cat=0&oh=6d8196e2839257cbca9a135ed2c47f94&oe=5B94C6B9)

**When I was an undergraduate at MIT, one of my roommates had several dozen pairs of socks, each pair with a slightly different color or design.** He frequently postponed doing his laundry until he was completely out of clean socks, so whenever he washed them he had the not inconsiderable task of matching them all up again in pairs.

Here is the way he would do it: First, he would pull a random sock out of the pile of clean laundry, then he would extract another sock at random and compare it to the first to see if it matched. If it didn’t, he would throw the second sock back and pull out another one. He would keep doing this until he found a match, and then he would go through the same sequence all over again with a new sock. Since he had to look though a lot of laundry, the process went very slowly—especially at the beginning, because there were a lot more socks to be examined before a match turned up.

He was studying for a degree in mathematics, and was apparently taking some kind of course in computers. One day when he had hauled his laundry basket back to our rooms, he announced, “I have decided to use a better algorithm for matching my socks.” What he meant was that he was now going to use a procedure of a fundamentally different nature. He pulled out the first sock and set it on the table, then he pulled out the next sock and compared it with the first sock; since it didn’t match, he set it next to the first. Now each time he pulled out a sock he would compare it to the growing row of socks on the table. When he found a match, he would bundle that pair together and throw them in his sock drawer. When he didn’t, he would add the unmatched sock to the row. Using this method, he was able to pair up his socks in a small fraction of the time it had previously required.

Izvor: W. Daniel Hillis, *The Pattern On The Stone: The Simple Ideas That Make Computers Work*
