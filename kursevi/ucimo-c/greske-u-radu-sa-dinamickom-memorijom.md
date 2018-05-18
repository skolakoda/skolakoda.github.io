---
title: Greške u radu sa dinamičkom memorijom
layout: lekcija-c
permalink: /greske-u-radu-sa-dinamickom-memorijom
---

**Dinamički alocirana memorija nudi mnoge mogućnosti i dobra rešenja ali često je i uzrok problema. Neki od najčešćih problema opisani su u nastavku.**

### Curenje memorije

![](http://www.waterdamage.co.uk/wp-content/uploads/2013/02/pipe-leak.jpg)

Jedna od najopasnijih grešaka u radu sa dinamički alociranom memorijom je tzv. curenje memorije (eng. *memory leaking*). Curenje memorije je situacija kada se u tekućem stanju programa izgubi informacija o lokaciji dinamički alociranog, a neoslobođenog bloka memorije. U tom slučaju, program više nema mogućnost da oslobođi taj blok memorije i on biva “zauvek” (do kraja izvršavanja programa) izgubljen (rezervisan za korišćenje od strane programa koji više nema načina da mu pristupi).

Curenje memorije ilustruje naredni primer.

```c
char* p;
p = (char*) malloc(1000);
....
p = (char*) malloc(5000);
```

Inicijalno je 1000 bajtova dinamički alocirano i adresa početka ovog bloka memorije smeštena je u pokazivačku promenljivu `p`. Kasnije je dinamički alocirano 5000 bajtova i adresa početka tog bloka memorije je opet smeštena u promenljivu `p`. Međutim, pošto originalnih 1000 bajtova nije oslobođeno korišćenjem funkcije `free`, a adresa početka tog bloka memorije je izgubljena promenom vrednosti pokazivačke promenljive `p`, tih 1000 bajtova biva nepovratno izgubljeno za program.

**Naročito su opasna curenja memorije koja se dogadaju u okviru petlje**. U takvim situacijama može da se gubi malo po malo memorije, ali tokom dugtrajnog izvršavanja programa, ukupna količina izgubljene memorije može da bude veoma velika. Moguće je da u nekom trenutku program iscrpi svu raspoloživu memoriju i onda će njegovo izvršavanje biti prekinuto od strane operativnog sistema. čak i da se to ne desi, moguće je da se iscrpi raspoloživi prostor u glavnoj memoriji i da se, zbog toga, sadržaj glavne memorije prebacuje na disk i obratno (tzv. *swapping*), što ekstremno usporava rad programa.

Curenje memorije je naročito opasno zbog toga što često ne biva odmah uočeno. Obično se tokom razvoja program testira kratkotrajno i na malim ulazima. Međutim, kada se program pusti u rad i počne da radi duži vremenski period i obraduje veće količine ulaza, curenje memorije postaje vidljivo, čini program neupotrebljivim i može da uzrokuje velike štete.

Većina programa za otkrivanje grešaka (debagera) detektuje da postoji curenje memorije, ali ne može locirati odgovarajuću grešku u kodu. Postoje specijalizovani programi, profajleri za curenje memorije (engl. *memory leaks profilers*) koji olakšavaju otkrivanje uzroka curenja memorije.

### Pristup oslobođenoj memoriji

Nakon poziva `free(p)`, memorija se oslobađa i ona više ne bi trebalo da se koristi. Međutim, poziv `free(p)` ne menja sadržaj pokazivača `p`. Moguće je da naredni poziv funkcije `malloc` vrati blok memorije upravo na toj poziciji, tako da ukoliko nastavimo da koristimo memoriju na adresi `p`, moguće je da će greška proći neopaženo. Zbog toga, preporučuje se da se nakon poziva `free(p)`, odmah `p` postavi na `NULL`. Tako se osigurava da će svaki pokušaj pristupa oslobođenoj memoriji biti odmah prepoznat i operativni sistem će zaustaviti izvršavanje programa sa porukom o grešci (najčešće *segmentation fault*).

![](https://imgs.xkcd.com/comics/compiler_complaint.png)

### Oslobađanje istog bloka više puta

Nakon poziva `free(p)`, svaki naredni poziv `free(p)` za istu vrednost pokazivača `p` prouzrokuje nedefinisano ponašanje programa i trebalo bi ga izbegavati. Takozvana višestruka oslobađanja mogu da dovedu do pada programa a poznato je da mogu da budu i izvor bezbednosnih problema.

### Oslobađanje neispravnog pokazivača

Funkciji `free(p)` dopušteno je proslediti isključivo adresu vraćenu od strane funkcije `malloc`, `calloc` ili `realloc`. Čak i prosleđivanje pokazivača na lokaciju koja pripada alociranom bloku, a nije njegov početak, uzrokuje probleme. Na primer,

```c
free(p+10); /* Oslobodi sve osim prvih 10 elemenata bloka */
```

neće osloboditi „sve osim prvih 10 elemenata bloka” i moguće da će dovesti do neprijatnih posledica, pa čak i pada programa.

### Prekoračenja i potkoračenja bafera

Nakon dinamičke alokacije, pristup memoriji je dozvoljen u okviru granica dobijenog bloka. Kao i kod statički alociranih nizova, pristup elementima van granice može da stvori ozbiljne probleme. Naravno, upis je često opasniji od čitanja.

U slučaju dinamički alociranih blokova memorije, obično se nakon bloka smeštaju dodatne informacije potrebne alokatoru kako bi uspešno vodio evidenciju koji delovi memorije su zauzeti, a koji slobodni. Prekoračenje bloka prilikom upisa menja te dodatne informacije, što uzrokuje pad sistema za dinamičko upravljanje memorijom.

### Fragmentisanje memorije

Čest je slučaj da ispravne aplikacije u kojima ne postoji curenje memorije (a koje često vrše alokaciju i dealokaciju) tokom dugog rada pokazuju degradaciju performansi i na kraju prekidaju svoj rad na nepredviđen način. Uzrok ovome je najčešće fragmentisanje memorije.

U slučaju fragmentisane memorije, u memoriji se nalazi dosta slobodnog prostora, ali on je rascepkan na male, nepovezane parčiće. Na primer, ukoliko 0 označava slobodni bajt, 1 zauzet, a memorija ima sadržaj 100101011000011101010110, postoji ukupno 12 slobodnih bajtova. Međutim, pokušaj alokacije 5 bajtova ne može uspeti, jer u memoriji nema prostora za smeštanje 5 povezanih bajtova. S druge strane, memorija koja ima sadržaj 111111111111111100000000 ima samo 8 slobodnih bajtova, ali je u stanju da izvrši alokaciju 5 traženih bajtova. Memoriju dodeljenu programu nije moguće automatski reorganizovati u fazi izvršavanja, jer nije moguće ažurirati sve pokazivače koji ukazuju na objekte na hipu.

Postoji nekoliko pristupa za izbegavanje fragmentisanja memorije. Ukoliko je moguće, poželjno je izbegavati dinamičku alokaciju. Naime, alociranje svih struktura podataka statički (u slučajevima kada je moguće) dovodi do bržeg i predvidljivijeg rada programa (po cenu većeg utroška memorije). Alternativno, ukoliko se ipak koristi dinamička alokacija, poželjno je memoriju alocirati u većim blokovima i umesto alokacije jednog objekta alocirati prostor za nekoliko njih odjednom. Na kraju, postoje tehnike efikasnijeg rukovanja memorijom (na primer, *memory pooling*), u kojima se programer manje oslanja na sistemsko rešenje, a više na svoje rešenje koje je prilagodenjeno specifičnim potrebama.


Izvor: [Mala škola referenciranja u programskom jeziku C](http://poincare.matf.bg.ac.rs/~jelenagr/2d/MalaSkolaPokazivaca.pdf)
