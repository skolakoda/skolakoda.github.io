---
title: A* algoritam
layout: lekcija-algoritmi
permalink: /a-star-algoritam
---

A* (pronounced A-star) is a global space-search algorithm that can be used to find solutions to many problems, path finding being just one of them. It has been used in many real-time strategy games and is probably the most popular path finding algorithm.

![astar-algoritam](slike/astar-algoritam.gif)

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
