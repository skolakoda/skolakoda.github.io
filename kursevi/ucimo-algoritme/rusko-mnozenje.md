---
title: Rusko seljačko množenje
layout: lekcija-algoritmi
permalink: /rusko-mnozenje
---

![](https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Bundesarchiv_Bild_101I-137-1050-04A%2C_Russland%2C_alte_M%C3%A4nner_vor_Holzhaus.jpg/401px-Bundesarchiv_Bild_101I-137-1050-04A%2C_Russland%2C_alte_M%C3%A4nner_vor_Holzhaus.jpg)

**Rusko seljačko množenje je algoritam koji omogućuje množenje velikih brojeva uz pomoć prostih operacija sabiranja i deljenja sa dva.**

Bio je u upotrebi među seljacima koji nisu bili školovani i nisu znali tablicu množenja. Sličan algoritam se takođe koristio i u drevnom Egiptu, pa se naziva i egipatsko množenje.

## Koraci

Da bismo pomnožili dva broja, na primer 12 i 14, potrebno je da prvi delimo na pola (zaokružujući naniže) do jedinice, a drugi dupliramo:

```
12   14
6    28
3    56
1    112
```

Potom, odbacujemo sve redove gde je prvi broj paran:

<pre>
<del>12</del>   <del>14</del>
<del>6</del>    <del>28</del>
3    56
1    112
</pre>

Na kraju, sabiramo brojeve koji su ostali u drugoj koloni.

```
     56
+   112
———————
    168
```

## Implementacija u Python-u

Data je iterativna implementacija u Python-u:

{:.ulaz}
```python
def pomnozi(x, y):
    zbir = 0
    while x > 0:
        if x % 2 == 1:  # ako je neparan dodaje na zbir
            zbir += y
        x = x >> 1      # deli sa dva bez ostatka
        y = y << 1      # mnozi sa dva
    return zbir

print (pomnozi(12, 14))
```

Moguće je algoritam implementirati i rekurzivno:

{:.ulaz}
```python
def pomnozi(x, y):
    if x == 0: return 0
    if x % 2 == 0:
        return 2 * pomnozi(x / 2, y)
    else:
        return y + 2 * pomnozi((x - 1) / 2, y)

print (pomnozi(12, 14))
```

## Implementacija u JS-u

Data je iterativna implementacija u JS-u:

{:.ulaz}
```js
function pomnozi(x, y) {
    let zbir = 0
    while (x > 0) {
        if (x % 2 === 1) zbir += y
        x = Math.floor(x / 2)
        y *= 2
    }
    return zbir
}

console.log(pomnozi(12, 14))
```

Moguće je algoritam implementirati i rekurzivno:

{:.ulaz}
```js
function pomnozi(x, y) {
    if (x === 0) return 0
    if (x % 2 === 0)
        return 2 * pomnozi(x / 2, y)
    else
        return y + 2 * pomnozi((x - 1) / 2, y)
}

console.log(pomnozi(12, 14))
```
