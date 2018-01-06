---
title: Kako napraviti kontakt formu bez bekenda?
layout: lekcija-html
author: damjan
permalink: /kontakt-forma-bez-bekenda
---

***Nikako, naravno, bez bekenda je nemoguće napraviti funkcionalnu kontakt formu. No, fora je u tome da bekend ne mora biti naš. Možemo koristiti neki od besplatnih servisa koji će prihvatiti podatke naših korisnika i proslediti nam na mejl, ili uskladištiti negde.***

## Opcija 1: Formspree

Na sajtu Škole koda koristimo [Formspree](//formspree.io), i prilično dobro radi. Nije vam potreban ni Javascript ni PHP, samo obična HTML forma. Jedino je bitno da definišete parametre na formularu. U akciju stavite adresu formspree.io sa vašim mejlom, a metod podesite POST. Na njihovom sajtu imate kratko uputstvo, a ključna linija bi otprilike trebalo da izgleda ovako:

```html
<form action="http://formspree.io/tvoj@email.com" method="POST">
```

Što je najbolje, nije potrebna nikakva registracija za njihov servis, samo postavite formu na sajt i radi! Jedino morate potvrditi prijem prvog mejla, da vam neko ne bi slao spam. Zato je najbolje da prvi kontakt pošaljete sami sebi, kako bi sve isprobali.

## Opcija 2: Google Forms

Drugo rešenje, za koju sam čuo ali nisam probao, je [Google Forms](https://www.google.com/forms/about/). Kako sam skontao, kada postavite formular na sajt, Google će dobijene podatke skladištiti u tabelarnom formatu na vašem Google Drive-u. U tom formatu, podaci se lako sortiraju, pretražuju ili izvoze u Excel.

Dakle, ima opcija. Ukoliko koristite besplatne stranice na Githubu, to vas ne sprečava da imate fukcionalnu kontakt formu.
