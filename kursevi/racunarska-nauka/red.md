---
title: "Red (<i>queue</i>)"
layout: lekcija-racunarstvo
permalink: /red
image: https://upload.wikimedia.org/wikipedia/commons/f/f7/Queue_outside_a_soup_kitchen_at_Klostertorv_in_%C3%85lborg_1943.jpg
---

![]({{page.image}})

**Red je linearna struktura u kojoj se elementi dodaju isključivo na jednom kraju, a oduzimaju isključivo na drugom kraju.** Strukturu reda lako je predočiti analogijom sa istim pojmom u svakodnevnom životu – npr. redom ispred blagajne u dućanu. Svaka nova osoba koja dođe zauzima mjesto na kraju reda, a osoba sa početka reda plaća svoju robu i odlazi. Drugi uobičajeni naziv za ovu strukturu je “**FIFO**” lista (eng. *first in – first out*).

![](https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Queue_algorithmn.jpg/600px-Queue_algorithmn.jpg)

## Implementacija

Struktura reda može se u računalu implementirati na različite načine, a najčešće se koristi jedno jednodimenzionalno polje i dvije varijable (pokazivača) koje sadrže lokacije početka i kraja reda, odnosno lokacije početnog i krajnjeg elementa u redu.

## Primer

Prosta implementacija reda u Javascriptu:

{:.ulaz}
```js
queue = []
queue.push(2)           // queue is now [2]
queue.push(5)           // queue is now [2, 5]
element = queue.shift() // queue is now [5]
console.log(element)    // displays 2
```


Izvor: N. Pavković, D. Marjanović, N. Bojčetić, *Programiranje i algoritmi II*, Zagreb, 2005.
