---
title: Metod rekurzije
layout: lekcija-algoritmi
permalink: /metod-rekurzije
---

**Rekurzija predstavlja metod u kome rešenje polaznog problema nalazimo koristeći rešenja potproblema iste strukture - jednostavnije instance istog problema. Jednostavnije instance problema se rešavaju istim principom, sve dok se ne dobije trivijalna instanca čije rešenje poznajemo.**

Da bi pristupili rešavanju problema rekurzijom, potrebno je da definišemo bazni slucaj (rešenje trivijalnih instanci) i rekurzivnu vezu (kako složeniju instancu problema rešiti koristeći jednostavnije instance). Ovaj pristup se može primeniti na veliku klasu problema i predstavlja jednu od centralnih ideja u računarskim nauka.

Ideja rekurzije je bazirana je na matematickoj indukciji, samo obrnutog smera. Naime, naš program prvo testira da li je zadata instanca trivijalana, primera radi da li je n=1 ili 2. Ukoliko jeste, rešenje nalazimo direktno (bez rekurzije). U suportnom, rešavamo problem za dati parametar tako što pozivamo tu istu funkciju sa manjim parametrom. Jednostavno, a deluje neverovatno.

Međutim, metod rekurzije je mač sa dve oštrice. Pored niza prednosti za ovaj metod, postoji i niz razloga zašto ga izbegavati.


Izvor: [Petlja.org](https://petlja.org/BubbleBee/r/lekcije/rekurzija)
