---
title: Model–view–controller
layout: lekcija-razvoj
permalink: /mvc
---

![](https://upload.wikimedia.org/wikipedia/commons/a/a0/MVC-Process.svg)

**Model–view–controller (MVC) je arhitektonski obrazac koji se koristi za organizaciju koda u aplikacijama.**

Ovaj obrazac deli aplikaciju na tri povezane celine, čime se smanjuje međuzavisnost i olakšava održavanje. Na taj način, MVC arhitektura omogućava paralelni razvoj komponenti i ponovnu iskoristivost koda.

Inicijano korišćena za desktop aplikacije, ova arhitektura je postala popularna u razvoju web i mobilnih aplikacija. Popularni programski jezici Java, C#, PHP, Ruby i drugi imaju svoje MVC *framework*-e.

## Arhitektura 

Komponente MVC arhitekture su:
- **Model** predstavlja strukturu podatka i poslovnu logiku aplikacije. On je odgovoran za pristup podacima, njihovu obradu i pravila koja se primenjuju na te podatke. Model ne zna ništa o korisničkom interfejsu ili načinu na koji se podaci prikazuju.
- **Prikaz (*View*)** je deo aplikacije koji se bavi prikazom podataka korisniku. On predstavlja korisnički interfejs i odgovoran je za vizuelno predstavljanje podataka iz modela. Prikaz se ažurira kada model obavesti o promenama, čime se osigurava da korisnik uvek vidi najnovije podatke. Isti podaci mogu imati više različitih prikaza – grafikoni, tabele i slično.
- **Kontroler (*Controller*)** deluje kao posrednik između modela i prikaza. On prima korisničke ulaze (npr. klikove, unos podataka) i obrađuje ih, često menjajući stanje modela kao odgovor na te ulaze. Kontroler takođe može da ažurira view kako bi odražavao promene u modelu.

## Kako radi

- Kada korisnik izvrši neku akciju (npr. klikne dugme), ta akcija se šalje kontroleru.
- Kontroler obrađuje akciju, i može da izvrši promene u modelu (npr. ažurira podatke).
- Kada se model promeni, on obaveštava prikaz o tim promenama.
- Prikaz se zatim ažurira kako bi prikazao nove podatke korisniku.

## Koje obrasce koristi

MVC se oslanja na [posmatrački obrazac](/obrazac-posmatrac) za osnovne komunikacije. Kada se model promeni, on obaveštava svoje posmatrače (prikaze) da je nešto ažurirano — što je verovatno najvažniji odnos u MVC-u. Obrazac posmatrača takođe omogućava da se više prikaza poveže sa istim modelom.

Prikazi i kontrolori imaju malo drugačiji odnos. Kontroleri omogućavaju prikazima da reaguju na korisnički unos i predstavljaju primer [obrasca strategije](/obrazac-strategija).

## Literatura

- Kazi Ljubica: *Osnove industrijskog razvoja softvera (skripta)*, Tehnički fakultet Mihajlo Pupin, Zrenjanin
- Addy Osmani, *Learning Javascript Design Patterns*, 2023.
