---
title: A* algoritam
layout: lekcija-algoritmi
permalink: /a-star-algoritam
---

![astar-algoritam](/images/koncepti/algoritmi/astar-algoritam.gif)

**A* (*A-star*) je algoritam pretrage koji se koristi za rešavanje mnogih problema, uključujući nalaženje najkraćeg puta. Koristi se u mnogim igrama i verovatno je najpopularniji algoritam traženja puta.**

A* algoritam kombinuje Dajkstrin algoritam i pohlepnu (*greedy*) pretragu, što ga čini bržim od drugih algoritama poput Dajkstre, koji istražuje sve mogućnosti.

## Primer u pseudokodu

```
priorityqueue Open
list Closed
s.g = 0  // s is the start node
s.h = GoalDistEstimate( s )
s.f = s.g + s.h
s.parent = null
push s on Open
while Open is not empty
   pop node n from Open  // n has the lowest f
   if n is a goal node
      construct path
      return success
   for each successor n' of n
      newg = n.g + cost(n,n')
      if n' is in Open or Closed, and n'.g < = newg
         skip
      n'.parent = n
      n'.g = newg
      n'.h = GoalDistEstimate( n' )
      n'.f = n'.g + n'.h
      if n' is in Closed
         remove it from Closed
      if n' is not yet in Open
         push n' on Open
   push n onto Closed
return failure
```
