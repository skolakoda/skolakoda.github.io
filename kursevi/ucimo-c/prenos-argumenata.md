---
title: Prenos argumenata funkcije
layout: lekcija-c
permalink: /prenos-argumenata
---

U C-u i drugim jezicima, svi su argumenti funkcije su prosleđeni "po vrednosti", što znači da je pozvana funkcija dodelila vrednost argumenata svojim privremenim varijablama. 

Suprotnost je "pozivanje preko reference", gde pozvana funkcija pristupa originalnom argumentu, a ne lokalnoj kopiji.

## Pozivanje po vrednosti

Kod prenosa po vrednosti, pozvana funkcija ne može direktno zameniti varijablu koja joj je prosleđena; ona može zameniti samo svoju privremenu kopiju.

Pozivanje pomoću vrednosti djeluje aktivno, a ne pasivno. Ono obično vodi kompaktnijim programima s manje različitih varijabli, jer parametri mogu biti tretirani kao pogodno obeležene lokalne varijable u pozvanoj funkciji. 

## Pozivanje po referenci

Kada bude potrebno, mi ćemo omogućiti promenu varijable unutar pozvane funkcije. Pri pozivu jednostavno pošaljemo adresu varijable koja se uvodi kao argument (zapravo se radi o pokazivaču), pa pozvana funkcija indirektno dohvata varijablu i po potrebi menja.

Kod nizova je priča nešto drugačija. Kad se ime niza koristi kao argument, vrednost koja se predaje funkciji je adresa početka niza - tu nema kopiranja elemenata niza.


### Izvori

- Brian Kernighan i Dennis Ritchie, *Programski jezik C*
- M. Jurak, *Programski jezik C*, predavanja 2003/04.
