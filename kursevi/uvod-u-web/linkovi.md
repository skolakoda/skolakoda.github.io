---
title: Linkovi
layout: lekcija-html
permalink: /linkovi
---

**Skromna veza odnosno sidro (*anchor*, `<a>`) temelj je World Wide Weba.**

To je mehanizam koji omogućuje međusobno povezivanje stranica, a korisnicima istraživanje i kretanje kroz njih. Link zahteva `href` atribut da bi radio. Sintaksa je sledeća:

```html
<a href="https://en.wikipedia.org/">Wikipedija</a>
```

## `target` atribut

Pored obaveznog svojstva `href`, link može imati i opciono svojstvo `target`, koje određuje gde će se link otvoriti. Target atribut može imati sledeće vrednosti:

- `target="_blank"` otvara link u novom prozoru.
- `target="_self"` otvara link u istom prozoru (podrazumevano ponašanje). 
- `target="_parent"` koristi se unutar okvira i forsira link da se otvori u roditeljskom prozoru.
- `target="_top"` koristi se unutar okvira i forsira link da se otvori u najvišem prozoru.

{:.html-ulaz}
```html
<a target="_blank" href="https://en.wikipedia.org/">Target blank</a>
<a target="_self" href="https://en.wikipedia.org/">Target self</a>
<a target="_parent" href="https://en.wikipedia.org/">Target parent</a>
<a target="_top" href="https://en.wikipedia.org/">Target top</a>
```

## Savet: Izbegavajte reč "ovde"

Česta greška prilikom pravljenja linkova je upotreba reči "link" ili "ovde". Na primer:

{:.uvuceno}
Informacije o programerskim kursevima se nalaze [ovde](/kursevi).

{:.uvuceno}
Pratite ovaj [link](#) za uputstvo za sklapanje robota.

Pošto se linkovi ističu od teksta koji ih okružuje, posetioci će videti link pre nego što pro­čitaju tekst. Dakle, prvo što će videti u prethodnom primeru su reči "ovde" i "link". Pošto reč "ovde" ne kaže gde link vodi, moramo čitati tekst pre i posle linka da bi saznali gde link vodi. Ako pasus sadrži više reči "ovde", uparivanje linkova sa onim što oni povezuju može postati teško. Pored toga, ovi linkovi su kratki i teški za dodir. 

Ovo je primer kako pisati linkove upotrebljive za mobilne uređaje i lakše za razumevanje:

{:.uvuceno}
Saznajte više informacija o [programerskim kursevima](/kursevi).

{:.uvuceno}
Ovo je odlično uputstvo za [sklapanje robota](#).

Oba linka su duža, a samim tim lakša za dodir. Takođe, linkovi su opisni, što posetiocima omogućava da brže shvate kuda oni vode. Plus, bolji su za SEO jer govore pretraživačima šta se na njima nalazi.