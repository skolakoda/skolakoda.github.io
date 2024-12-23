---
title: Autentifikacija korisnika
layout: lekcija-js
permalink: /autentifikacija
---

**Registracija i autentifikacija korisnika je relativno složena procedura, nezaobilazna u većini standardnih aplikacija.**

Prvo ćemo praviti ručno celu proceduru autentifikacije, kako bismo prošli svaki korak. Posle možemo koristiti standardne biblioteku Mongoose i Passport.

## Autentifikacija na bekendu

Koraci autentifikacije pomoću nodejs-a i mongodb-a:

- Napraviti u bazi novu kolekciju korisnici
- Osmisliti koja polja svaki korisnik treba da ima (npr. email i lozinka su obavezni, moze jos ime, username, uloga i sl.)
- Kriptovati lozinku pre unosa u bazu (koristi se neka jednosmerna hash funkcija poput md5)
- Kada postojeci korisnik zeli da se uloguje, prvo kriptovati lozinku koju je poslao (istom funkcijom naravno), pa uporediti sa kriptovanom lozinkom u bazi
- Generisati random token koji ce trajati odredjeno vreme za svakog korisnika, kako ne bi morao da salje ime i lozinku svaki put (pogledati [video](https://youtu.be/xBYr9DxDqyU))
- Proveravati korisnika preko validnog tokena koji ce svaki put slati sa frontenda

## Autentifikacija na frontendu

- Napraviti formular za registraciju (sa poljima u dogovoru sa bekendom) koji šalje POST zahtev
- Ako registracija uspe, prikazati korisniku poruku da je uspela i da se sada može prijaviti
- Napraviti formular za prijavu koji šalje POST zahtev
- Ako prijava uspe, sačuvati u lokalStorage-u token koji se dobija od bekenda
- Od sada nadalje automatski slati token sa svakim HTTP zahtevom za koji je potrebna autentifikacija
- Promeniti interfejs aplikacije u skladu sa činjenicom da je korisnik ulogovan (npr. umesto dugmeta Prijava ide Moj profil)
- Prilikom ponovnog pokretanja aplikacije, proveriti da li je korisnik već prijavljen i prilagoditi UI

## Bonus

Pokušajte da smislite kako je moguce imati autentifikaciju korisnika bez lozinke?
