---
layout: default
title: Rad sa git submodulima
author: damjan
---

***Ako ti u jednom git projektu trebaju stvari iz drugog projekta, potreban ti je git submodule. Ako želiš da koristiš deo jednog git projekta u drugom projektu, vreme je za submodule.***

Git submodule je zgodan za razne situacije, na primer kad imamo zajedničke asete ili zajedničku biblioteku na više projekata, koju ne želimo da uključimo kao spoljašnju zavisnost (npr. preko `npm`-a), jer je još uvek aktivno razvijamo.

## Dodavanje submodula

Dodavanje submodula je prilično lako:

```
git submodule add <adresa drugog git projekta>
```

Sada u našem projektu imamo drugi git projekat, koji se ponaša kao submodule. To znači da ignoriše sve git radnje (add, commit..) koji se događaju izvan njega.

## Menjanje submodula

Podmodul možemo menjati i ažurirati, što je posebno zgodno kada je projekat koji smo uključili još uvek u razvoju. Ovo je bitna prednost u odnosu na spoljašnje biblioteke, koje uključujemo preko paket menadžera.

Da bismo menjali submodul, potrebno je da se nalazimo unutar njega. Tada možemo komitovati fajlove po želji, a submodul će čuvati svoju posebnu git istoriju.

## Kloniranje projekta koji sadrži submodule

Kada kloniramo projekat koji sadrži submodule, git ih neće po defaultu prekopirati, već ćemo dobiti samo prazne direktorije, sa referencama. Zato svaki put kada kloniramo projekat, moramo otkucati dve dodatne komande:

```
git submodule init
git submodule update
```

Ovo će fizički prekopirati fajlove iz uključenih submodula, tako da ponovo možemo raditi sa njima.
