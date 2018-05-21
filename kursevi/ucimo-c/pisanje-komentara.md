---
title: Pisanje komentara
layout: lekcija-c
permalink: /pisanje-komentara
---

**Čak i ako se autor pridržavao mnogih preporuka za pisanje jasnog i kvalitetnog kôda, ukoliko kôd nije dobro komentarisan njegovo razumevanje može i samom autoru predstavljati teškoću već nekoliko nedelja nakon pisanja.** Komentari treba da olakšaju razumevanje kôda i predstavljaju njegov svojevrsni dodatak.

Postoje alati koji olakšavaju kreiranje dokumentacije na osnovu komentara u samom kôdu i delom je generišu automatski (npr. Doxygen).

## Smernice

***Komentari ne treba da objašnjavaju ono što je očigledno:*** Komentari ne treba da govore kako kôd radi, već šta radi (i zašto). Na primer, naredna dva komentara su potpuno suvišna:

```c
k += 1.0; /* k se uvecava za 1.0 */
```

```c
return OK; /* vrati OK */
```

U prvom slučaju, komentar ima smisla ako objašnjava zašto se nešto radi, na primer:

```c
k += 1.0; /* kamatna stopa veca je za 1.0 */
```

U slučajevima da je neki deo programa veoma komplikovan, potrebno je u komentaru objasniti zašto je komplikovan, kako radi i zašto je izabrano takvo rešenje.

***Komentari treba da budu koncizni.*** Kako ne bi trošili preterano vreme, komentari treba da budu što je moguće kraći i jasniji, da ne ponavljaju informacije koje su već navedene drugde u komentarima ili su očigledne iz kôda. Previše komentara ili predugi komentari predstavljaju opasnost za čitljivost programa.

***Komentari treba da budu usklađeni sa kôdom.*** Ako se promeni kôd programa, a ne i prateći komentari, je to može da uzrokuje mnoge probleme i nepotrebne izmene u programu u budućnosti. Ukoliko se neki deo programa promeni, uvek je potrebno proveriti da li je novo ponašanje u skladu sa komentarima (za taj ali i druge delove programa). Usklađenost kôda i komentara je lakše postići ako komentari ne govore ono što je očigledno iz kôda.

***Komentarima treba objasniti ulogu datoteka i globalnih objekata.*** Komentarima treba, na jednom mestu, tamo gde su definisani, objasniti ulogu datoteka, globalnih objekata kao što su funkcije, globalne promenljive i strukture. Funkcije treba komentarisati pre same definicije a Torvalds čak savetuje da se izbegavaju komentari unutar tela funkcije. Čitava funkcija može da zaslužuje komentar (pre prvog reda), ali ako pojedini njeni delovi zahtevaju komentarisanje, onda je moguće da funkciju treba reorganizovati i/ili podeliti na nekoliko funkcija. Ni ovo pravilo nije kruto i u specifičnim situacijama prihvatljivo je komentarisanje delikatnih delova funkcije („posebno pametnih ili ružnih“).

***Loš kôd ne treba komentarisati, već ga popraviti.*** Često kvalitetno komentarisanje kako i zašto neki loš kôd radi zahteva više truda nego pisanje tog dela kôda iznova tako da je očigledno kako i zašto on radi.

***Komentari treba da budu laki za održavanje:*** Treba izbegavati stil pisanja komentara u kojem i mala izmena komentara zahteva dodatni posao u formatiranju. Na primer, promena narednog opisa funkcije zahteva izmene u tri reda komentara:

```c
/****************************************
* Funkcija area racuna povrsinu trougla *
*****************************************/
```

***Komentari mogu da uključuju standardne fraze.*** Vremenom se nametnulo nekoliko na bazi fraza koje se često pojavljuju u okviru komentara. Njih je lako pronaći u kôdu, a mnoga razvojna okruženja prepoznaju ih i prikazuju u istaknutoj boji kako bi privukli pažnju programera kao svojevrsna lista stvari koje treba obaviti. Najčešći markeri su:

- **TODO**: označava zadatke koje tek treba obaviti, koji kôd treba napisati.
- **FIXME**: označava deo kôda koji radi ali treba ga popraviti, u smislu opštijeg rešenja, lakšeg održavanja, ili bolje efikasnosti.
- **HACK**: označava deo kôda u kojem je, kako bi radio, primenjen neki trik i loše rešenje koje se ne prihvata kao trajno, te je potrebno popraviti ga.
- **BUG**: označava deo kôda koji je gotov i očekuje se da radi, ali je pronađen bag.
- **XXX**: obično označava komentar programera za sebe lično i treba biti obrisan pre nego što kôd bude isporučen drugima. Ovim markerom se obično označava neko problematično ili nejasno mesto u kôdu ili pitanje programera.


Izvor: Predrag Janičić i Filip Marić, *PROGRAMIRANJE 2, Osnove programiranja kroz programski jezik C*, Matematički fakultet, Beograd, 2017.
