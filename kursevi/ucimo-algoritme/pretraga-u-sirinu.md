---
title: Pretraga u širinu
layout: lekcija-algoritmi
permalink: /pretraga-u-sirinu
---

![](https://camo.githubusercontent.com/2dbee6a8b24b0921898ffe2c0e1bd4a81a8f2f0f/687474703a2f2f7265732e636c6f7564696e6172792e636f6d2f647172326d656a68632f696d6167652f75706c6f61642f76313530313336303734362f6266735f7373776d657a2e676966)

**Pretraga u širinu (engl. *breadth first search*) se od pretrage u dubinu razlikuje po redosledu obilaženja polja, odnosno pozicija u postoru pretrage. Ovom pretragom se prvo pronalaze sve pozicije koje nastaju posle jednog poteza, zatim sve koje nastaju posle dva poteza, itd.**

Kada je poznat skup S(k) pozicija dostižnih k poteza, tada se skup S(k+1) pozicija dostižnih u k+1 poteza dobija napredovanjem za jedan korak na svaki mogući način is svake od pozicija iz S(k). Ranije posećene pozicije se ne uzimaju ponovo u obzir. Postupak se nastavlja dok se ne dođe do tražene pozicije, ili se pretraže sve pozicije u zadatim okvirima.

Prednost pretrage u širinu je što se prvo posećivanje svake nove pozicije uvek postiže u najmanjem mogućem broju poteza. Zahvaljujući tome, rešenja otkrivena pretragom u širinu su uvek optimalna po broju poteza. Sa druge strane, radi pretrage u širinu potrebno je organizovati pamćenje posećenih pozicija, da bi se pretraga mogla nastaviti iz svih tih pozicija.

Algoritam pretrage u širinu koristi strukturu podataka koja se naziva [red](/red) (engl. *queue*). Ona zaista funkcioniše kao red ljudi koji čekaju na neku uslugu: objekti mogu da se dodaju na kraj reda, a objekat koji je na početku reda može da se uzme i upotrebi. U slučaju lavirinta, objekti predstavljaju pozicije iz prostora pretrage, a to su dostignuta polja.

## Izlazak iz lavirinta

Da bismo bolje ilustrovali mogućnosti algoritma pretrage u širinu, postavićemo problem lavirinta nešto drugačije. Neka je matricom `a` dat lavirint i polazno polje u njemu. Zadatak je da se za svako polje lavirinta odredi najmanji broj poteza koji je potreban da se do tog polja stigne kroz lavirint, kretanjem od polaznog polja.

Stavljaćemo u red koordinate polja koja su susedna posećenim, tako da ona čekaju da budu posećena. Za svako polje ćemo u pomoćnoj matrici `m` pamtiti broj poteza koji je potreban za stizanje do njega.

```c
MinMoves(xstart, ystart)
  dirx[4] = {1, -1, 0, 0}; // Ovaj niz, zajedno sa sledecim zadaje 4 moguca smera kretanja
  diry[4] = {0, 0, 1, -1};

  for r = 1 to rowCnt
    for c = 1 to colCnt
      m[r][c] = infinity;

  queue<Square> q;
  q.push(Square(xstart, ystart));
  m[ystart][xstart]=0;

  while (!q.empty())
    x = q.front().x;
    y = q.front().y;
    q.pop();
    for dir = 1 to 4
      xx = x + dirx[dir];
      yy = y + diry[dir];
      if (xx > 0 && yy > 0 && xx <= rowCnt && yy <= colCnt &&
        m[yy][xx] == infinity && a[yy][xx] != kWall)
          m[yy][xx] = m[y][x] + 1;
          q.push(Square(xx, yy));

  // Ispisivanje izracunate matrice
  for r = 1 to rowCnt
    for c = 1 to colCnt
      if (m[r][c] == infinity)
        Write('.');
      else
        Write(m[r][c]);
    WriteLine();
```

Prilikom pretrage u širinu želimo da dodamo u red samo susede tekućeg polja koji još nisu posećeni. Ovde se posećena polja prepoznaju po tome što imaju upisan potreban broj poteza (različit od inicijalne vrednosti).

Vreme rada i zauzeće memorije su u najgorem slučaju srazmerni veličini prostora pretrage.


Izvor: [Petlja.org](https://petlja.org/BubbleBee/r/Lectures/algoritmi-pretrage-najpre-u-dubinu-i-najpre-u-sirinu)
