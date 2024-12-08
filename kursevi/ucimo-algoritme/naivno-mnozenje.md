---
title: Algoritam za naivno množenje
layout: lekcija-algoritmi
permalink: /naivno-mnozenje
---

**Algoritam za naivno množenje implementira množenje dva broja pomoću sabiranja.** Radi tako što sabira jedan činilac onoliko puta koliko je vrednost drugog činioca. 

Na primer, ako želimo da pomnožimo 3 i 5, funkcija će sabrati 5+5+5 i vratiti 15.

## Implementacija u Pythonu

```py
def pomnozi(x, y):
    zbir = 0
    while x > 0:
        zbir += y
        x -=1
    return zbir

```
## Implementacija u JS-u

{:.ulaz}
```js
function pomnozi(x, y) {
    let zbir = 0
    while (x > 0) {
      zbir += y
      x -=1
    }
    return zbir
}

console.log(pomnozi(6, 8))
```
