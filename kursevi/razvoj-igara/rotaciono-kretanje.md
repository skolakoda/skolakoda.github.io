---
title: Rotaciono kretanje
layout: lekcija-razvoj-igara
permalink: /rotaciono-kretanje
---

![](/images/razvoj-igara/rotaciono-kretanje.png)

**Osnovna razlika između čestica i krutih tela je u tome što ne možemo zanemariti rotaciju krutih tela.**

Pošto različite tačke čvrstog tela pređu različite putanje, različite su im brzine. Zbog toga za opisivanje rotacionog kretanja treba uvesti nove veličine.

Njutnov drugi zakon kretanja može se proširiti na rotaciju na relativno jednostavan način. Pre svega, naše varijable se menjaju:
* pomeraj -> ugaoni pomeraj
* pređeni put -> ugao rotacije ili opisani ugao (θ theta, u radijanima)
* brzina -> ugaona brzina (ω omega, radijani / sekundi)
* ubrzanje -> ugaono ubrzanje (α alpha, radijani / sekundi²)
* masa -> ugaona masa ili momenat inercije (različiti oblici imaju različite momente inercije, iako su iste mase)
* sila -> moment sile ili obrtni momenat

## Obrtni moment (*torque*)

Obrtni moment (ili moment sile) je sklonost sile da rotira predmet oko neke ose. Zamislimo francuski ključ. Dok ga guramo da odvijemo vijak, primenjujemo silu na njegovom kraju, a on se rotira.

Obrtni moment računamo na osnovu toga koliko je daleko primenjena sila od centra rotacije predmeta. Na primer, ako na ključ dužine 1 metar primenjujemo silu od 10 njutna pod uglom od 90 stepeni, obrtni moment na matici biće 10 njutn-metara. Ako guramo pod drugim uglom, obrtni moment će biti manji. Ako guramo direktno prema matici, obrtni moment biće nula i ključ se neće pomerati.

obrtni moment se meri u njutn-metrima. 5 njutn-metara je sila od 5 njutna primenjena na dužinu od 1 metra.

## Drugi Njutnov zakon (prilagođen)

Dakle, možemo prilagoditi Njutnov drugi zakon za rotaciju:

```
T = J * a
moment sile = ugaona masa * ugaono ubrzanje
```

Važno je razumeti da linearna brzina je brzina centra mase tela. Ako telo ne rotira, brzina centra mase je ista za sve tačke na telu. Ako telo rotira, tačke udaljenije od centra rotiraju brže od onih bliže centru.

## Centar mase

![rotacija-centar-mase](/images/razvoj-igara/rotacija-centar-mase.png)

Kada telo slobodno rotira, uvek rotira oko centra mase. Različiti predmeti veoma različito rotiraju, zavisno od oblika i načina na koji je njihova težina raspoređena.

## Literatura

- Randy Gaul, [*How to Create a Custom 2D Physics Engine: Oriented Rigid Bodies*](https://code.tutsplus.com/how-to-create-a-custom-2d-physics-engine-oriented-rigid-bodies--gamedev-8032t)
