---
title: Matrica susedstva
layout: lekcija-strukture
permalink: /matrica-susedstva
---

![](https://upload.wikimedia.org/wikipedia/commons/3/3b/AdjacencyMatrix.png)

**Matrica povezanosti ili matrica susedstva (*adjacency matrix*) je kvadratna matrica dimenzija V x V (V je broj čvorova u grafu), gde u svakom polju piše težina grane koja povezuje ta dva čvora (ako postoji).**

**Matrica susjedstva za neusmjerene grafove je simetrična u odnosu na glavnu dijagonalu.** Kod usmjerenih grafova, matrica nije simetrična u odnosu na glavnu dijagonalu.

Ukoliko je graf bestežinski, u polje upisujemo 1 ukoliko postoji grana između čvorova, ili 0 ukoliko ne postoji.

Nepopunjena polja u matrici susjedstva popunjavaju se u zavisnosti od problema koji treba riješiti. Obično na glavnu dijagonalu pišemo 0, jer je svaki čvor od samog sebe udaljen 0. Ukoliko tražimo najkraći put, onda ćemo na sva neispunjena polja pisati beskonačno (ili -1), da bi naglasili da direktna veza ne postoji.

## Prednosti i nedostaci

Prednost matrice susjedstva je što u vremenskoj složenosti O(1) možemo provjeriti postoji li neka grana i koliko je teška. 

Nedostatak je to što matrica susjedstva zauzima VxV prostora, a često imamo veoma rijetke grafove.

## Primer u C++

Kreiramo matricu susedstva za graf sa `n` čvorova i `m` ivica. Svi elementi se inicijalizuju na `-1`, osim dijagonale (`0`). Program zatim unosi `m` ivica (`a, b, c`), postavljajući težine u matrici. Na kraju ispisujemo matricu.

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

## Primer u JS-u

Kreiramo matricu susedstva veličine `n`, gde su težine ivica date nizom `edges`. Ako ivica ne postoji, vrednost je `-1`. Na dijagonali su nule (udaljenost čvora do sebe).

{:.ulaz}
```js
function createAdjacencyMatrix(n, edges) {
    const matrix = Array.from({ length: n }, () => Array(n).fill(-1))

    for (let i = 0; i < n; i++)
        matrix[i][i] = 0

    edges.forEach(([a, b, c]) => {
        matrix[a][b] = c
        matrix[b][a] = c
    })

    return matrix
}

// upotreba
const n = 4
const edges = [
    [0, 1, 3], // ivica između čvorova 0 i 1 sa težinom 3
    [1, 2, 2], // ivica između čvorova 1 i 2 sa težinom 2
    [2, 3, 4]  // ivica između čvorova 2 i 3 sa težinom 4
]

const matrix = createAdjacencyMatrix(n, edges)
console.log(matrix)
```

### Izvori

- [boljiprogramer.com](http://boljiprogramer.com/napredno-programiranje/algoritmi-sa-grafovima/zapis-grafa-matrica-susjedstva-lista-susjeda/)
