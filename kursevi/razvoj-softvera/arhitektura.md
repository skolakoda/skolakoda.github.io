---
title: Arhitektura softvera
layout: lekcija-razvoj
permalink: /arhitektura-softvera
image: /images/koncepti/arhitektonski-obrasci.webp
---

![]({{page.image}})

**Arhitektura softvera predstavlja osnovnu strukturu softverskog sistema, uključujući komponente, njihove odnose i interakcije, kao i principe i smernice za buduću izgradnju i razvoj.** Cilj arhitekture je da osigura da softver ispunjava zahteve korisnika, da bude skalabilan, održiv i prilagodljiv za buduće promene.

Arhitektura softvera je ključ za projektovanje održivih i visokokvalitetnih rešenja. Često se poredi sa građevinskom arhitekturom, gde je temeljni dizajn presudan za izgradnju kompleksnih struktura.

## Zašto je arhitektura bitna?

Dobra arhitektura nam omogućuje:

- **Efikasnost razvoja:** Dobar arhitektonski dizajn omogućava brže i efikasnije razvijanje softvera.
- **Skalabilnost i fleksibilnost:** Omogućava prilagođavanje promenama u zahtevima korisnika i tehnologijama.
- **Smanjenje rizika:** Smanjuje rizik od problema u kasnijim fazama razvoja i održavanja.
- **Održavanje kvaliteta:** Arhitektura osigurava da softver ostane stabilan, siguran i robustan tokom celog životnog ciklusa.
- **Usmerenost ka potrebama korisnika:** Pomaže da rešenje bude funkcionalno i usklađeno sa očekivanjima korisnika.

## Principi

Osnovni principi softverske arhitekture su:

- **Odvajanje briga:** Podela sistema na komponente sa jasno definisanim odgovornostima.
- **Modularnost**: Sistemi treba da budu podeljeni na manje, nezavisne module koji mogu biti razvijeni i testirani zasebno.
- **Labava povezanost i visoka kohezija (*loose coupling and high cohesion*)**: Komponente treba da budu labavo povezane, ali unutar sebe koherentne.
- **Ponovna upotrebljivost**: Korišćenje već postojećih rešenja, komponenti i obrazaca kako bi se smanjio dupli rad i povećala efikasnost razvoja.
- **Skalabilnost:** Dizajn mora omogućiti povećanje resursa kako raste broj korisnika ili podataka.
- **Održivost:** Sistem mora biti lak za održavanje i prilagođavanje novim tehnologijama.
- **Bezbednost po dizajnu:** Sigurnosni aspekti moraju biti deo arhitektonskog plana od početka.

Ovi principi osiguravaju da arhitektura ne samo da zadovoljava trenutne potrebe, već i omogućava uspešno prilagođavanje budućim izazovima.

## Sastojci

Osnovni sastojci softverske arhitekture su:

- **Komponente**: To su pojedinačni delovi sistema koji obavljaju specifične funkcije. Komponente mogu biti servisne jedinice, moduli, slojevi ili servisi.
- **Interfejsi**: Definišu kako komponente međusobno komuniciraju. Interfejsi omogućavaju razmenu podataka i usmeravaju protok informacija unutar sistema.
- **Podaci**: Skladište podataka, kao što su baze podataka ili fajl sistemi, koji podržavaju skladištenje i pristup podacima.
- **Ponašanje**: Kako komponente komuniciraju i kako obavljaju svoje funkcije u određenom okruženju. To uključuje sve uslove, protokole i operacije u sistemu.

## Literatura 

- Gabriel Baptista, Francesco Abbruzzese, *Software Architecture with C# 12 and .NET 8*, 2024.