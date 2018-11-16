---
title: Prilagodljivi web dizajn
layout: lekcija-html
permalink: /prilagodljivi-dizajn
image: /images/koncepti/web/responsive.svg
---

![responsive web-design]({{page.image}})

**Prilagodljivi web dizajn je prikaz sadržaja na najprihvatljiviji način za bilo koju veličinu ekrana.**

*Responsive* web dizajn je važan zato što broj pregledača i uređaja koji prikazuju veb stranice stalno raste. Nekada su sajtovi pravljeni fiksne širine, oko 1000 piksela, i očekivalo se da će svi korisnici imati slično iskustvo. Danas imamo mnoštvo uređaja raznih veličina, od mobilnih telefona do zidnih televizora, i više nije moguće imati isti prikaz za sve. Razlika izmedu najmanjih i najvećih ekrana je veća nego ikad.

Cilj prilagodljivog dizajna je da imamo jedan osnovni HTML i CSS kod, koji se dobro prikazuje na svim uređajima, uključujući telefon, računar i pločicu pametnog frižidera. To znači da će ista stranica biti funkcionalna na svim uređajima, premda neće izgledati identično. 

## Tri pristupa

### Prvo desktop dizajn (*desktop-first*)

Dizajneri su ranije dostavljali developerima samo desktop verziju sajta. Front-end developeri su, na osnovu toga, kodirali dizajn da podjednako dobro radi u svakom poznatom pretraživaču.

Prikaz sajta na mobilnim telefonima je obično bio improvizacija, nešto što se radilo na osnovu desktop dizajna. Na malim ekranima se manje važni elementi obično stave ispod glavnog sadržaja ili, u najgorem slučaju, sakriju u potpunosti. Navigaciju možemo prilagoditi da više odgovara dodiru. Tipografiju bi takode trebalo skalirati zbog bolje čitljivosti, omogućavajući čitanje bez potrebe stalnog povlačenja prikaza sa jedne na drugu stranu.

### Prvo mobilni dizajn (*mobile first*)

Kako je upotreba mobilnih telefona uzimala maha, mobilni dizajn sajtova je sve više dobijao na važnosti. 

Uveden je nov pristup web dizajnu, da se sajt više ne radi prvo za desktop, već za mobilne telefone. Umesto da započinjemo sa dizajnom desktop sajta fiksne širine i smanjujemo ga da odgovara manjim prikazima, sada prvo dizajniramo sajt za manje prikaze, a zatim da postepeno prilagođavamo za veće.

### Zaseban mobilni sajt

Rešenja fokusirana na mobilne uređaje, koja pružaju optimizovan sadržaj njihovim korisnicima, nazivaju se mobilni web sajtovi. Mnoge poznate platforme imaju zaseban mobilni sajt (npr.  [m.wikipedia.org](https://en.m.wikipedia.org) i [m.facebook.com](https://m.facebook.com/)), umesto zajedničke prilagodljive verzije.

Nekada je mobilna verzija sajta, skrojena po meri, mnogo bolja opcija od prilagodljivog dizajna. Ukoliko budžet dozvoljava, mobilna verzija sajta može biti najbolja opcija. Ona može prikazati različit sadržaj, dizajn i interakciju na osnovu uređaja, lokacije, brzine konekcije i drugih varijabli, uključujući tehničke mogućnosti uređaja. Ova vrsta rešenja zahteva mnogo više od onoga što sam prilagodljiv dizajn može da ponudi.

## Prilagodljivi meta tag

Da bismo započeli prilagodljivi dizajn neophodno je dodati sledeći tag u `head` dokumenta, koji govori pregledaču da prikaže stranicu preko cele širine uređaja:

```html
<meta name="viewport" content="width=device-width">
```

Sa porastom rezolucije na mobilnim uređajima, **piksel više nije piksel**, odnosno CSS pikseli i pikseli uređaja nisu ista stvar. Mobilni pregledači podrazumevano emuliraju veće ekrane i učitavaju sajtove za veću širinu uređaja (npr. iPhone koristi 980px piksela), da bi se neoptimizovani sajtovi videli celi na ekranu. Prilagodljivi meta tag govori pregledaču da je sajt prilagođen za sve veličine ekrana i da ne želimo lažne desktop mere.

### Izvori

* Ben Frain, *HTML5 i CSS3: Prilagodljiv web dizajn*, Beograd, 2014.
* Laura Lemay, Rafe Colburn, Jennifer Kyrnin, *HTML5, CSS3 i JavaScript za razvoj veb strana*, Beograd, 2016.
