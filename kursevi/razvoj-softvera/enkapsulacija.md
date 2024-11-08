---
title: Enkapsulacija i skrivanje informacija
layout: lekcija-razvoj
permalink: /enkapsulacija
image: https://upload.wikimedia.org/wikipedia/commons/0/09/Plc_control_panel.JPG
---

![]({{page.image}})

**Enkapsulacija (zatvaranje u kapsulu)** je koncept povezan sa objektno-orijentisanim programiranjem, koji ukazuje da objekat enkapsulira:

- podatke (koji su uskladišteni u svojstvima)
- načine na koje će biti iskorišćeni podaci (pomoću metoda)

## Sakrivanje informacija

Još jedan pojam koji je povezan sa enkapsulacijom je **sakrivanje informacija**. Ovo je širok pojam i može da znači mnogo štošta, ali hajde da vidimo šta znači kada se koristi u objektno-orijentisanom programiranju.

Zamislite jedan objekat – na primer, MP3 plejer. Kao korisnik objekta, možete da koristite interfejs, kao što su tasteri, ekran i tako dalje. Upotrebićete interfejs da bi objekat uradio nešto korisno za vas, kao što je reprodukovanje pesme. Vi ne znate kako uređaj funkcioniše u unutrašnjosti, a najčešće vas to i ne zanima. Drugim rečima, **implementacija interfejsa je sakrivena od vas**.

Isto se dešava u OOP-u kada kod koristi objekat pozivanjem metoda. Bez obzira da li ste sami napisali kod objekta ili ste ga dobili iz neke nezavisne biblioteke, vaš kod ne mora da „zna“ kako metodi funkcionišu interno. Vi koristite interfejs objekta, a da, pri tom, ne brinete o implementaciji.

## Kontrola pristupa

&nbsp;&nbsp;*Glavni članak [Kontrola pristupa](/kontrola-pristupa)*

Drugi aspekt sakrivanja informacija je vidljivost metoda i svojstava. U nekim jezicima objekat može da ima `public`, `private` i `protected` metode i svojstva. Ova kategorizacija definiše nivo pristupa koji korisnici objekta mogu imati. Na primer, samo metodi istog objekta imaju pristup metodima `private`, dok svako može pristupiti metodima `public`.

Na primer, u JavaScriptu svi metodi i svojstva su javni, ali videćete da postoje načini za zaštitu podataka unutar objekta i ostvarivanja privatnosti.


Izvor: Ved Antani, Stoyan Stefanov, *Objektno-orijentisan JavaScript*, Beograd, 2017.
