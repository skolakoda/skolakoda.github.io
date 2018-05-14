---
title: Pretraga u dubinu
layout: lekcija-algoritmi
permalink: /pretraga-u-dubinu
---

![](https://camo.githubusercontent.com/0200351e288c90c4a2ccc54534ba8b7c3e2b23f2/687474703a2f2f7265732e636c6f7564696e6172792e636f6d2f647172326d656a68632f696d6167652f75706c6f61642f76313530313336303733342f6466735f7630706935702e676966)

**Pretraga u dubinu (engl. *depth-first search*) se može koristiti kad god je potrebno nizom poteza stići od date polazne situacije (pozicije, stanja) do završne.** Traženje puta u lavirintu je možda najpoznatiji primer primene algoritma pretrage u dubinu. Primeri ovakvih zadataka su još Lojdova slagalica od 15 brojeva i problem osam dama.

## Izlazak iz lavirinta

![](https://upload.wikimedia.org/wikipedia/commons/1/11/Tremaux_Maze_Solving_Algorithm.gif)

Kako biste tražili put kroz lavirint?

Ideja koja je ovde opisana verovatno vam je već poznata: ostavljate iza sebe trag (mrvice, kamenčiće, nit konca...) i napredujete dok god možete. Kada dođete do mesta sa kojeg se ne može dalje napredovati, vraćate se unazad tragom do najbližeg mesta sa kojeg možete krenuti nekom neistraženom putanjom i nastavljate tom putanjom. Ovako postupate dok ne nađete izlaz, ili dok ne istražite sve putanje (što bi značilo da izlaz ne postoji).

Ovo je u osnovi algoritam pretrage najpre u dubinu (engl. *depth-first search*). Pretraga se zove najpre u dubinu jer prvo napredujete, to jest idete dublje u lavirint dokle god možete, a vraćate se samo ako ne možete da idete dalje u dubinu. Osim pretrage u dubinu, mogli bismo na primer, prvo da označimo sva mesta na koja možemo da stignemo u jednom koraku, zatim ona na koja možemo da stignemo u dva koraka i tako dalje. Ovakva pretraga se zove najpre u širinu (engl. *breadth first search*).

Razmotrimo još jedno pitanje u vezi sa opisanim algoritmom: da li pri vraćanju tragom treba taj trag uklanjati ili ostavljati? Ako bismo uklanjali trag, moglo bi se dogoditi da ista polja posećujemo veliki broj puta iz raznih pravaca. Ako bismo pak ostavljali trag i posle vraćanja, bilo bi komplikovanije prikazati putanju od polazne do tekuće pozicije i razlikovati je od delova lavirinta kojima smo išli i vratili se (slepi krakovi). Kako obe odluke imaju dobrih i loših strana, u opštem slučaju je najbolje da koristimo dve vrste traga, jedan kada napredujemo, a drugi kada se vraćamo. Tako uvek imamo jasno označenu putanju od polazne do tekuće pozicije (koja u slučaju nailaska na izlaz postaje rešenje), a takođe i garanciju da ćemo svako polje lavirinta posetiti najviše jedanput.

Neka je lavirint predstavljen matricom `a`. Funkcija `Seek` kojom tražimo put kroz lavirint ima koordinate tekućeg polja kao argumente. Pretpostavljamo da su sam lavirint i njegove dimenzije `rowCnt` i `colCnt` dostupni funkciji. Funkcija vraća vrednost koja govori da li je put pronađen. Algoritam traženja puta mogao bi se ovako zapisati:

```c
Seek(i, j)
  if (i < 1) or (j < 1) or (i > rowCnt) or (j > colCnt)
    return false;

  if (a[i][j] = kExit)
    PrintMatrix();
    return true;

  if (a[i][j] != kPass)
    return false;

  a[i][j] = kSearching;
  bool found = Seek(i-1, j) or Seek(i, j-1) or Seek(i+1, j) or Seek(i, j+1);
  a[i][j] = kSearched;
  return found;
```

Trajanje ovakve pretrage je u najgorem slučaju srazmerno veličini prostora pretrage (u primeru to je veličina lavitinta). Sama pretraga zahteva prostor srazmeran najvećoj dostignutoj dubini pretrage, što u najgorem slučaju može biti isto što i veličina prostora pretrage. U rekurzivnoj implementaciji, koja je jednostavnija, ta memorija se koristi implicitno za stek rekurzivnih poziva. U nerekurzivnoj implementaciji bilo bi neophodno da se pamti niz polja koja su posećena, a kroz koja pretraga još uvek traje (polja označena vrednošću `kSearching` u rekurzivnom algoritmu gore).

## Lojdova slagalica

![](https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/15-puzzle.svg/240px-15-puzzle.svg.png)

U slučaju Lojdove slagalice početna pozicija se bira na slučajan način, završna pozicija je ona na kojoj su brojevi poređani po veličini (kao na slici), a potez se izvršava tako što prazno polje zameni mesto sa jednim njemu susednim poljem. Na žalost, broj pozicija u ovoj igri je toliko veliki da kompletna pretraga prostora svih pozicija može trajati vrlo dugo. Da ne bismo morali da prolazimo ceo prostor pretrage, poželjno je na neki inteligentan način birati sledeći potez.

Postoji niz poboljšanja pretrage u dubinu i upravo ova slagalica je odličan primer kako se pretraga može ubrzati usmeravanjem i ograničavanjem.

## Problem osam dama

![](https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/8queensminconflict.gif/400px-8queensminconflict.gif)

Problem osam dama se sastoji u sledećem: potrebno je na šahovsku tablu postaviti osam dama tako da se one međusobno ne napadaju, to jest da se nikoje dve dame ne nalaze u istom redu, istoj koloni ili na istoj dijagonali table. Početna pozicija je prazna tabla, potez je dodavanje jedne dame na tablu poštujući ograničenja o nenapadanju, a završna pozicija je bilo koja pozicija sa osam dama na tabli, tako da se dame ne napadaju.

Da bismo pojednostavili pretragu, primetimo da tih osam dama moraju da se nalaze u različitim kolonama table. Zbog toga možemo i-tu damu uvek dodavati u i-tu kolonu. Dodavanje vršimo tako što probamo svako polje kolone redom i proveravamo da li dama sa tog polja napada neku od ranije postavljenih dama. Ako napada, vraćamo se i pokušavamo sledeće polje, a ako ne napada, nastavljamo pretragu prelaskom na sledeću damu i sledeću kolonu. Kada uspemo da načinimo osam koraka u dubinu, tada je na tabli osam dama i došli smo do jednog rešenja koje prikazujemo.

U algoritmu koji sledi, niz `pos` sadrži pozicije dama po kolonoma, petlja po `i` isprobava sve pozicije dama na tekućoj dubini (u tekućoj koloni), a petlja po `j` proverava da li se novopostavljena dama napada sa nekom od prethodno postavljenih dama.

```c
Search(depth)
  if (depth == 8)
    OutputSolution;
    return true;

  ++depth;

  for i = 1 to 8
    pos[depth] = i;
    valid = true;
    for j = 1 to depth-1
      if (pos[j] == pos[depth] or
        j + pos[j] == depth + pos[depth] or
        j - pos[j] == depth - pos[depth])
          valid = false;
    if (valid && Search(depth))
      return true;

  return false;
```

Zanimljivo da je pre pojave računara bio potreban genije i upornost veličine Gausa (jedan od najvećih matematičara svih vremena) za potpuno rešavanje ovog problema (nalaženje svih 92 rešenja). Danas je to običan školski zadatak do čijeg rešenja može da dođe svako ko ume da programira.

Izvor: [Petlja.org](https://petlja.org/BubbleBee/r/Lectures/algoritmi-pretrage-najpre-u-dubinu-i-najpre-u-sirinu)
