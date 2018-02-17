---
title: Rad sa gitom u kolektivu
author: damjan
layout: lekcija-frontend
permalink: /rad-sa-gitom
---

***Na velikim projektima se, po pravilu, radi sa gitom. Postoje uobičajene procedure, načini rada i modeli grananja softvera, koje morate pohvatati kako biste postali produktivan član kolektiva.***

## Stalne grane

Svaki veliki projekat na kome radimo ima bar tri glavne grane:

* `master` ili `dev` - glavno razvojno okruženje, krajnje nestabilno, oslikava trenutno stanje projekta
* `staging` - okruženje za testiranje, oslikava poslednje stabilno stanje projekta
* `production` - produkcija, stabilna verzija projekta koju vide klijenti

U ove glavne grane kod se nikada ne gura (ne *push*-uje).

## Privremene grane

Po pravilu, za svaki zadatak se pravi zasebna privremena grana, i samo na taj način doprinosimo projektu. Developeri rade na sopstvenim odlika/zakrpa (*feature/bugfix*) granama, i u njih guraju svoje izmene. Zasebne grane nakon pregleda koda (*code review*) bivaju spojene u glavnu.

Postoji nekoliko stilova imenovanja privremenih grana:
* po zadatku (npr. `header-fix`)
* po developeru i zadatku (npr. `ana-header-fix`)
* po broju zadatka (npr. `231`)
* po broju i nazivu zadatka (npr. `231-header-fix`)

Unutar kolektiva se obično prihvati jedan od ovih stilova, koji svi prate.

## Spajanje grana

Po završetku zadatka, razvijalac kreira *pull request* na Github-u, odnosno zahtev za prihvatanjem njegove grane u glavnu. Naravno, njegova grana se ne spaja (*merge*) u glavnu sve dok neko ne pogleda taj kod. Nakon spajanja se radna grana briše.

Ukoliko se desi da nečiji kod bez pregleda bude spojen u glavnu granu, treba je resetovati na prethodno stanje. Promene napravljene na taj način neće biti sačuvane.

![git grane](images/koncepti/git/git-grane.png)

## Git poruke

Veoma je bitno ostaviti kratku i jasnu git poruku prilikom svake uknjižbe (komita). Poruke se uglavnom pišu na engleskom jeziku, i koristi se sadašnje umesto prošlog vremena (npr. `add .gitignore` umesto `added .gitignore`).

Ako više komitova za redom radimo na istom zadatku, onda možemo samo menjati redni broj poruke, na primer `fix collision (1)`, `fix collision (2)`, `fix collision (3)`.

Imajte na umu da se procedure mogu prilično razlikovati između kolektiva, ali nadam se da vam je ovo pomoglo da steknete sliku.
