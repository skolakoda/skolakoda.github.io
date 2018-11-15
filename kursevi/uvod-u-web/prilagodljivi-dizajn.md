---
title: Prilagodljivi web dizajn
layout: lekcija-html
permalink: /prilagodljivi-dizajn
image: /images/koncepti/web/responsive.svg
---

![responsive web-design]({{page.image}})

***Nekada su svi sajtovi pravljeni fiksne širine, oko 1000 piksela, i očekivalo se da će svi korisnici imati prilično isto iskustvo.***

Danas imamo mnoštvo uređaja raznih veličina, od mobilnih telefona do zidnih televizora, i više nije moguće imati isti prikaz za sve. Upotreba mobilnih za pregled interneta stalno raste. S druge strane, uobičajena je upotreba monitora od 27 i 30 inča. Razlika izmedu najmanjih i najvećih ekrana je veća nego ikad.

Rešenje je prilagodljivi web dizajn, koji prikazuje sadržaj na prihvatljiv način za bilo koju veličinu ekrana. Cilj prilagodljivog dizajna je da imamo jedan osnovni HTML i CSS kod, koji se može prikazati na bilo kom uređaju. To znači da će ista stranica moći da se pregleda na mobilnom telefonu i veli­kom monitoru i da će biti funkcionalna na oba uređaja, premda neće izgledati identično.

## Prvo desktop dizajn (*desktop-first*)

Dizajneri su ranije dostavljali developerima samo desktop verziju sajta. Front-end developeri su, na osnovu toga, kodirali dizajn da podjednako dobro radi u svakom poznatom pretraživaču.

Prikaz sajta na mobilnim telefonima je obično bio improvizacija, nešto što se radilo na osnovu desktop dizajna. Na malim ekranima se manje važni elementi obično stave ispod glavnog sadržaja ili, u najgorem slučaju, sakriju u potpunosti. Navigaciju možemo prilagoditi da više odgovara dodiru. Tipografiju bi takode trebalo skalirati zbog bolje čitljivosti, omogućavajući čitanje bez potrebe stalnog povlačenja prikaza sa jedne na drugu stranu.

## Prvo mobilni dizajn (*mobile first*)

Kako je upotreba mobilnih telefona uzimala maha, mobilni dizajn sajtova je sve više dobijao na važnosti. 

Uveden je nov pristup web dizajnu, da se sajt više ne radi prvo za desktop, već za mobilne telefone. Umesto da započinjemo sa dizajnom desktop sajta fiksne širine i smanjujemo ga da odgovara manjim prikazima, sada prvo dizajniramo sajt za manje prikaze, a zatim da postepeno prilagođavamo za veće.

## Mobilni web sajtovi

Mnoge poznate platforme imaju zaseban mobilni sajt (npr.  [Wikipedija](https://en.m.wikipedia.org/wiki/Main_Page) i [Facebook](https://m.facebook.com/)), umesto zajedničke prilagodljive verzije.

Nekada je mobilna verzija sajta, skrojena po meri, mnogo bolja opcija od prilagodljivog dizajna. Rešenja fokusirana na mobilne uređaje, koja pružaju optimizovan sadržaj njihovim korisnicima, nazivaju se mobilni web sajtovi.

Ukoliko budžet dozvoljava, mobilna verzija sajta nekad može biti najbolja opcija. Ona može prikazati različit sadržaj, dizajn i interakciju na osnovu uređaja, lokacije, brzine konekcije i mnogo drugih varijabli, uključujući i tehničke mogućnosti uređaja. Ova vrsta rešenja zahteva mnogo više od onoga što sam prilagodljiv dizajn može da ponudi.


Izvor: Ben Frain, *HTML5 i CSS3: Prilagodljiv web dizajn*, Beograd, 2014.
