## Potprogrami

Većina programskih jezika pruža mogućnost definisanja neke vrste potprograma, ali nazivi potprograma se razlikuju (najčešće se koriste termini funkcije, procedure, sabrutine ili metode). Potprogrami izoluju određena izračunavanja koja se kasnije mogu pozivati tj. koristiti na više različitih mesta u različitim kontekstima. Tako je, na primer, u jeziku C moguće definisati funkciju kojom se izračunava najveći zajednički delilac (NZD) dva broja, a kasnije tu funkciju iskoristiti na nekoliko mesta da bi se izračunao NZD različitih parova brojeva.

```c
int nzd(int a, int b) { ... }
...
x = nzd(1234, 5678);
y = nzd(8765, 4321);
```

Primetimo da su potprogrami obično parametrizovani tj. mogu da primaju ulazne parametre (kaže se i argumente). Postoje različiti načini prenosa parametara u potprograme. Na primer, u nekim slučajevima (tzv. prenos po vrednosti ) funkcija dobija svoju kopiju parametra navedenog u pozivu i sve vreme barata kopijom, ostavljajući originalni parametar nepromenjen. U nekim slučajevima (tzv. prenos po adresi ), parametar se ne kopira već se u funkciju prenosi samo memorijska adresa na kojoj se parametar nalazi i funkcija sve vreme barata originalnim parametrom.

Potprogrami imaju i mogućnost vraćanja vrednosti izračunavanja pozivaocu. Neki jezici (npr. Pascal) suštinski razlikuju funkcije koje izračunavaju (i kaže se vraćaju) neku vrednost i procedure čiji je zadatak samo da proizvedu određeni sporedni efekat (npr. da ispišu nešto na ekran ili da promene vrednost promenljive).

## Modularnost

Modularnost podrazumeva razbijanje većeg programa na nezavisne celine. Celine, koje sadrže definicije srodnih podataka i funkcija, obično se nazivaju biblioteke (engl. library) i smeštaju se u posebne datoteke. Ovim se postiže lakše održavanje kompleksnih sistema, kao i mogućnost višestruke upotrebe pojedinih modula u okviru različitih programa. Celine se obično zasebno prevode i kasnije povezuju u jedinstven program.

Programski jezici obično imaju svoje standardne biblioteke (engl. standard library) koje sadrže funkcije često potrebne programeru (npr. funkciju za izračunavanje dužine niske karaktera). Često se kôd funkcija standardne biblioteke statički povezuju sa programom (tj. uključuje se u izvršni kôd programa).

Osim standardne biblioteke, programske jezike često karakteriše i rantajm biblioteka (engl. runtime library) koja predstavlja sponu između kompilatora (tj. izvršnih programa koje on generiše) i operativnog sistema. Funkcije rantajm biblioteke se ne uključuju u izvršni kôd programa već se dinamički pozivaju tokom izvršavanja programa (i zato, da bi program mogao da se izvrši na nekom operativnom sistemu, neophodno je da na njemu bude instalirana rantajm biblioteka za taj programski jezik).
