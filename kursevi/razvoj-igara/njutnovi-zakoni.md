---
title: Njutnovi zakoni kretanja
layout: lekcija-razvoj-igara
permalink: /njutnovi-zakoni
---

**Alhemičar i filozof prirode Isak Njutn je u 17. veku otkrio tri zakona koja regulišu svo kretanje na Zemlji (osim na kvantnom nivou). Njutnovi zakoni su veoma bitni za realistično kretanje u igrama.**

## Prvi Njutnov zakon: Zakon inercije

> Svako telo ostaje u stanju relativnog mirovanja ili ravnomernog pravolinijskog kretanja sve dok ga dejstvo drugog tela ne prisili da to stanje promeni.

![](/images/koncepti/sile/zakon-inercije.gif)

Prirodna je tendencija tela da zadrži svoje stanje. Ako se kreće, kretaće se, ako miruje, mirovaće. Ovaj scenario važi samo kada je razultat svih sila 0, tj. kada je telo neometano. U praksi, ravnomerno kretanje nikada ne potraje, jer se priroda raznim silama opire kretanju: gravitacijom, trenjem (po tlu) i vučenjem (kroz vodu i vazduh).

Zakon inercije vidimo na delu prilikom sudara, kada telo vozača teži da ostane u stanju kretanja.

## Drugi Njutnov zakon: Zakon sile

> Ubrzanje je srazmerno primenjenoj sili, a obrnuto srazmerno masi tela.

![](/images/koncepti/sile/zakon-sile.png)

Dakle, ubrzanje (*acceleration*) izaziva sila, a protivi mu se masa:

```
a = F / m
```
odnosno:
```
F = m * a
```

U programiranju igara, sila i ubrzanje su obično zapisani kao vektori. To znači da možemo računati svaku dimenziju ponaosob:
```
Fx = m * ax
Fy = m * ay
Fz = m * az
```

## Treći Njutnov zakon: Zakon akcije i reakcije

> Sila kojom jedno telo deluje na drugo telo jednaka je po intenzitetu sili kojom drugo telo deluje na prvo, ali je suprotnog smera.

Na primer, kada top ispaljuje projektil, projektil ga pomera nazad. Zbog razlike u masi i otporu, ista sila će pomeriti top znatno manje nego što će pomeriti projektil.

![](/images/koncepti/sile/top.gif)
