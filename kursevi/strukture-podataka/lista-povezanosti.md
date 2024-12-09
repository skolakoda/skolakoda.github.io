---
title: Lista povezanosti
layout: lekcija-strukture
permalink: /lista-povezanosti
---

![](/images/koncepti/podaci/lista-susedstva.png)

**Lista povezanosti ili lista susjedstva (*adjacency list*) je matrica u koju za svaki čvor u grafu zapisujemo njegove susjede. Za razliku od matrice susjedstva, lista susjeda može biti i grbava matrica (matrica kod koje veličine svih redova nisu jednake).**

Na slici gore vidimo vidimo listu povezanosti koja odgovara datom grafu. U prvom redu pišemo susjede čvora A, u drugom susjede čvora B itd.

Ukoliko želimo da u listu susjeda zabilježimo i vrijednost grane između dva čvora moramo koristiti vektore. Tako bismo u `LS[i][j].first` pisali neki susjedni čvor čvora i, dok bi u `LS[i][j].second` pisali vrijednost grane između ta dva čvora (LS označava vektor vektora parova u koji ćemo smjestiti našu listu susjeda).

## Prednost i mane

Prednost liste susjeda je to što možemo iterativno obilaziti postojeće grane, što kod matrice susjedstva nije moguće. Takođe, koristeći listu susjeda štedimo prostor (memoriju). 

Sa druge strane, mana liste susjeda je to što ne možemo u svakom trenutku provjeriti da li postoji grana između neka dva čvora.

## Primer u C++

Kreiramo usmereni graf koristeći listu susedstva. Unosi se broj čvorova (`n`) i ivica (`m`), zatim za svaku ivicu unosi početni i krajnji čvor (u formatu `a b`). Lista susedstva (`LS`) se popunjava tako da za svaki čvor sadrži listu susednih čvorova. Na kraju, kod ispisuje susede za svaki čvor.

```cpp
#include <iostream>
#include <vector>
using namespace std;

int main()
{
    int n,m;
    cin>>n>>m;

    vector<int> Vi;
    vector<vector<int> > LS(n,Vi);

    int a,b;
    for (int i=0;i<m;i++)
    {
        cin>>a>>b;
        LS[a-1].push_back(b-1);
    }

    for (int i=0;i<n;i++)
    {
        cout<<i+1<<": ";
        for (int j=0;j<LS[i].size();j++)
            cout<<LS[i][j]+1<<' ';
        cout<<endl;
    }

    return 0;
}
```

## Primer u JS-u

{:.ulaz}
```js
function createAdjacencyList(n, edges) {
    const LS = Array.from({ length: n }, () => [])

    edges.forEach(([a, b]) => {
        LS[a - 1].push(b - 1)
    })

    return LS
}

// upotreba
const n = 5
const edges = [
    [1, 2],
    [1, 3],
    [2, 4],
    [3, 5]
]

const adjacencyList = createAdjacencyList(n, edges)

adjacencyList.forEach((x, i) => 
    console.log(`${i + 1}: ${x.map(neighbor => neighbor + 1).join(' ')}`)
)
```

### Izvori

- [boljiprogramer.com](http://boljiprogramer.com/napredno-programiranje/algoritmi-sa-grafovima/zapis-grafa-matrica-susjedstva-lista-susjeda/)
