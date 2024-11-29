---
title: Sile
layout: lekcija-razvoj-igara
permalink: /sile
---

![](/images/razvoj-igara/basic-forces.png)

Glavne sile prirode su gravitacija i otpor okruženja: trenje (po tlu) i vučenje (kroz vodu i vazduh). Ako pravilno modelujemo sile, dobićemo predmete koji se ponašaju realistično. 

U fizičkoj simulaciji, tela se pomeraju primenom sila i impulsa. Sile obično deluju na tela postepeno, a impulsi trenutno. Sile se konstantno primenjuju tokom vremena (kao gravitacija ili pogon), a impulsi trenutno menjaju zamah tela, obično na korisnički unos.

## Merne jedinice

Sila se meri u Njutnima. Ako masu merimo u kilogramima, kada je pomnožimo sa ubrzanjem (`m/s²`), dobijamo jedinicu `kg·m/s²`, koja je nazvana Njutn (`N`). Jedan Njutn je sila potrebna da telo mase jednog kilograma ubrzamo brzinom od jednog metra u sekundi na kvadrat: 

```
1N = 1kg * m/s²
```

Ubrzanje od jednog metra u sekundi na kvadrat (1 m/s²) znači da se brzina objekta povećava za 1 metar u sekundi svake sekunde. Na primer:
- U prvoj sekundi objekat se kreće brzinom od 1 m/s.
- U drugoj sekundi brzina postaje 2 m/s.
- U trećoj sekundi brzina raste na 3 m/s, i tako dalje.  

Jedinice mere nisu bitne u fizičkim proračunima, sve dok smo dosledni u njihovoj upotrebi.