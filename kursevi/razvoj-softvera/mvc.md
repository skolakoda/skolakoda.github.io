---
title: Model–view–controller
layout: lekcija-razvoj
permalink: /mvc
---

![](https://upload.wikimedia.org/wikipedia/commons/a/a0/MVC-Process.svg)

**Model–view–controller (MVC)** je softverski arhitekturni obrazac. Deli aplikaciju na tri međusobno povezane komponente kao bi se razdvojile interne predstave informacija od načina kako je informacija prezentovana i prihvaćena od strane korisnika. Na ovaj način, MVC projektni obrazac omogućava paralelni razvoj komponenti i ponovnu iskoristivost koda.

Inicijano korišćena za desktop aplikacije, ova arhitektura je postala popularna za dizajn web i mobilnih aplikacija. Najčešće korišćeni programski jezici Java, C#, PHP i Ruby imaju svoje popularne MVC framework-e koji se koriste u razvoju aplikacija.

Komponente su:
- **MODEL** – centralna komponenta MVC paterna. Izražava ponašanje aplikacije u smislu problemskog domena, nezavisno od korisničkog interfejsa. Upravlja podacima, programskom logikom i pravilima koja su ugrađena u aplikaciju.
- **VIEW** – može biti bilo koji prikaz informacija (*output representation*). Za iste informacije može biti više različitih prikaza – grafikoni, tabelarni prikazi i slično.
- **KONTROLER** – preuzima ulaze i konvertuje ih u komande koje su upućene MODELU ili VIEW.

Podela na 3 komponente definiše i njihovu međusobnu povezanost:

- MODEL čuva podatke, KONTROLER zadaje komande modelu za preuzimanje podataka, kontroler zadaje komande kojima se podaci prikazuju u VIEW.
- VIEW generiše novi izlaz koji je predstavljen korisniku, na osnovu promena koje su se desile u modelu.
- KONTROLER može da šalje komande MODELU da promeni stanje modela. Kontroler može da šalje komande na VIEW da se izmeni prikaz podataka na osnovu izmena modela ili da se prikaže druga vrsta ili način ponašanja VIEW.


Izvor: Kazi Ljubica: *Osnove industrijskog razvoja softvera (skripta)*, Tehnički fakultet Mihajlo Pupin, Zrenjanin
