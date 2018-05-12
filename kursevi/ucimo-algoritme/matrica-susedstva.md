---
title: Matrica susedstva
layout: lekcija-algoritmi
permalink: /matrica-susedstva
---

**Matrica povezanostii ili matrica susjedstva (engl. *adjacency matrix*) je matrica dimenzija V x V (gdje je V broj čvorova u grafu), u kojoj u polju (A, B) piše težina grane koja povezuje čvorove A i B (ako ona postoji). Matrica susjedstva uvijek je kvadratna matrica.**

Na slici 1 možemo vidjeti težinski neusmjereni graf kome odgovara navedena matrica.

![](http://boljiprogramer.com/wp-content/uploads/2018/03/graf21-1024x390.png)

Ko što vidimo, pošto postoji grana A – B sa težinom 12, u matrici susjedstva na poziciji (A, B) upisano je 12, ali, takođe, 12 je upisano na poziciju (B, A) u matrici. Ovo je urađeno jer je dati graf neusmjeren, pa ako imamo granu od A do B to znači da imamo i granu od B do A iste težine.

**Možemo primjetiti da je matrica susjedstva za neusmjerene grafove simetrična u odnosu na glavnu dijagonalu.** Ipak, ukoliko bismo imali usmjereni graf onda bi težinu grane od C do D pisali samo u polje (C, D), ali ne i u polje (D, C), tako da matrica, u tom slučaju, ne bi bila simetrična u odnosu na glavnu dijagonalu.

Ukoliko je graf koji zapisujemo bestežinski u matricu susjedstva na polje (A, B) upisaćemo 1 ukoliko postoji grana od A do B, ili 0 ukoliko ta grana ne postoji.

Nepopunjena polja u matrici susjedstva (npr. (A, C); (C, B); (B, G)…) popunjavaju se u zavisnosti od problema koji treba riješiti. Često ćemo na glavnu dijagonalu pisati 0, jer je svaki čvor od samog sebe udaljen 0. Ukoliko tražimo najkraći put između neka dva čvora u grafu onda ćemo na sva neispunjena polja (osim onih na glavnoj dijagonali) pisati beskonačno (tj. neki veoma veliki broj), da bi tako naglasili da direktna grana između ta dva čvora ne postoji.

Prednost matrice susjedstva je u tome što u vremenskoj složenosti O(1) možemo provjeriti postoji li neka grana i koliko je teška. Sa druge strane, nedostatak je to što matrica susjedstva zauzima VxV prostora, a često imamo veoma rijetke grafove.

## Vežba

Da bismo bolje razumjeli matricu susjedstva implementirajmo sljedeći kod:

Unose se brojevi n i m, a zatim m puta po tri broja a, b i c, što znači da između čvorova a i b u grafu postoji dvosmjerna grana dužine c. Potrebno je ispisati matricu susjedstva koja odgovara datom grafu. Ukoliko između čvorova x i y ne postoji grana u polje (x, y) treba upisati vrijednost -1.

```cpp
#include <iostream>
using namespace std;

int main()
{
    int n,m;
    cin>>n>>m;

    int G[n][n];

    for (int i=0;i<n;i++)
        for (int j=0;j<n;j++)
            G[i][j]=-1;

    for (int i=0;i<n;i++)
        G[i][i]=0;

    int a,b,c;
    for (int i=0;i<m;i++)
    {
        cin>>a>>b>>c;
        G[a][b]=c;
        G[b][a]=c;
    }

    for (int i=0;i<n;i++)
    {
        for (int j=0;j<n;j++)
            cout<<G[i][j]<<' ';
        cout<<endl;
    }

    return 0;
}
```

Izvor: [boljiprogramer.com](http://boljiprogramer.com/napredno-programiranje/algoritmi-sa-grafovima/zapis-grafa-matrica-susjedstva-lista-susjeda/)
