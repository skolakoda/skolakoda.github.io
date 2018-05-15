---
title: Metod rekurzije
layout: lekcija-algoritmi
permalink: /metod-rekurzije
---

![](/images/fore/rekurzija-strip.png)

**Rekurzija je metod kojim rešenje problema nalazimo preko rešenja pojednostavljene verzije istog problema.** Jednostavnije instance problema se rešavaju istim principom, sve dok se ne dobije trivijalna instanca čije rešenje poznajemo.

Da bi pristupili rešavanju problema rekurzijom, potrebno je da definišemo:

- **bazni slučaj** (rešenje trivijalnih instanci) i
- **rekurzivnu vezu** (kako složeniju instancu problema rešiti koristeći jednostavnije instance).

Ovaj pristup se može primeniti na veliku klasu problema i predstavlja jednu od centralnih ideja u računarskim nauka.

Ideja rekurzije je bazirana je na matematickoj indukciji, samo obrnutog smera. Na primer, naš program prvo testira da li je zadata instanca trivijalana, primera radi da li je n=1 ili 2. Ukoliko jeste, rešenje nalazimo direktno. U suportnom, rešavamo problem za dati parametar tako što pozivamo tu istu funkciju sa manjim parametrom. Jednostavno, a deluje neverovatno.

Međutim, metod rekurzije je mač sa dve oštrice. Pored niza prednosti za ovaj metod, postoji i niz razloga zašto ga izbegavati.

## Primer: pronađi put do kuće

Jedan primer kojim se može opisati rekurzija je rešavanje problema pronalaska puta do kuće. Rekurzijom bi se ovaj problem mogao opisati u tri koraka, na sledeći način:

1. ako si kod kuće, ostani u mestu,
2. inače, napravi jedan korak prema kući,
3. pronađi put do kuće.

Tačka pod brojem 3 predstavlja poziv istog problema iz definicije, ali posle učinjene jedne jednostavne akcije, a to je jedan korak prema kući, problem je pojednostavljen.

## Generalni algoritam

Opisani postupak se može uopštiti, čime dobijamo generalni algoritam koji rešava probleme rekurzijom, i sastoji se od tri koraka:

1. trivijalni slučaj (kojim se prekida proces izračunavanja),
2. izvršavanje jedne akcije koja nas vodi ka trivijalnom slučaju,
3. rekurzivni poziv.

Ovako opisani postupak rešavanja problema ima algoritamski oblik i za većinu problema se može implementirati.


Izvor: [Petlja.org](https://petlja.org/BubbleBee/r/lekcije/rekurzija)
