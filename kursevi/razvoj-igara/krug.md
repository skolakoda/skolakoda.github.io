---
title: Krug
layout: lekcija-razvoj-igara
permalink: /krug
---

**Krug određuju dve stvari - centar i poluprečnik.**

**Kružnica** je skup svih tačaka u ravni, udaljenih na poluprečnik od centra. **Lopta** je skup svih  tačaka u prostoru, udaljenih na poluprečnik od centra. 

U formulama se obično koristi `r` (*radius*) za poluprečnik i `d` (*diameter*) za prečnik.

## Obim kruga

```
obim = 2 * r * PI
```
ili
```
obim = d * PI
```

## Površina kruga:

```
povrsina = r² * PI
```

## Jednačina kružnice

![](/images/razvoj-igara/jednačina-kruznice.png)

Da izračunamo poluprečnik, odnosno udaljenost neke tačke na kružnici od centra kruga, koji je na ishodištu koordinatnog sistema (0, 0) koristimo Pitagorinu teoremu:

```
x² + y² = r²
```

Ako centar kruga nije na ishodištu, koristimo **jednačinu kružnice**, koja predstavlja proširenje Pitagorine teoreme:

```
(x - a)² + (y - b)² = r²
```

Gde su:

- (a,b) koordinate centra kruga
- (x,y) koordinate tačke na kružnici

Pomoću ove jednačine možemo crtati krug na ekranu ili računati kretanje predmeta po kružnoj putanji.
