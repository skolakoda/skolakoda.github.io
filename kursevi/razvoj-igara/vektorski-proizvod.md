---
title: Vektorski proizvod
layout: lekcija-razvoj-igara
permalink: /vektorski-proizvod
---

**Vektorski proizvod (ili unakrsni proizvod) je operacija između dva vektora u 3D prostoru koja rezultira novim vektorom, normalnim na oba.**

Operacija se obeležava znakom `×`:

```
a × b
```

Komponente rezultirajućeg vektora računamo na sledeći način:
- x = (a.y * b.z) - (a.z * b.y)
- y = (a.z * b.x) - (a.x * b.z)
- z = (a.x * b.y) - (a.y * b.x)


## Redosled je bitan

Redosled činilaca je bitan jer vektorski proizvod nije komutativan:

```
a × b != b × a
```

Rezultirajući vektor ima uvek istu veličinu i normalan je na oba činioca, li mu smer zavisi od redosleda:

- Ako je redosled `a × b`, rezultat će biti u pravcu desne ruke.
- Ako je redosled `b × a`, rezultat će biti u suprotnom pravcu.

Smer rezultirajućeg vektora možemo vizuelizovati na sledeći način:

![cross-product](https://upload.wikimedia.org/wikipedia/commons/d/d2/Right_hand_rule_cross_product.svg)

## Rotiranje vektora u 2D igrama

Recimo da imamo brod sa topovima bočno. Ako je brod okrenut u smeru (2,1), gde su okrenuti topovi? Ovo je prosto u 2D. Da bi rotirali vektor za 90 stepeni u smeru kazaljke, prvo zamenimo mesta komponentama, te predznak druge komponente. Tako (a,b) postaje (b,-a). Dakle, ako je brod okrenut u smeru (2,1), desni topovi su okrenuti u smeru (1,-2). Levi topovi su suprotni, dakle menjamo predznake oba broja: (-1,2).

![cross-product](/images/razvoj-igara/boat-3.jpg)

### Objašnjenje

Za rotiranje vektora za 90 stepeni (u smeru kazaljke), koristimo sledeću 2D rotacionu matricu:

```
R(90°) = |  0  1 |
         | -1  0 |
```

Kada pomnožimo rotacionu matricu sa vektorom `(a, b)` koristeći množenje matrica, dobijamo:

```
v' = |  0  1 |   *   | a |
     | -1  0 |       | b |
   = | ( 0 * a + 1 * b)  |
     | (-1 * a + 0 * b)  |
   = (b, -a)
```

Dakle, vektor `(a, b)` nakon rotacije za 90 stepeni postaje `(b, -a)`.

## Vektorski proizvod u 3D igrama

Recimo da imamo jedrenjak sa jarbolom `M` okrenutim nagore (0,1,0), i vetar `W` u smeru (1,0,2). Želimo jedro `S` da usmerimo da što bolje uhvati vetar, tj. da bude normalno i na jarbol i na vetar. 

![cross-product](/images/razvoj-igara/boat2.jpg)

Da bismo rešili ovo, koristimo vektorski proizvod:

```
S = M × W
  = (0, 1, 0) × (1, 0, 2) 
  = (1*2 - 0*0, 0*1 - 0*2, 0*0 - 1*1) 
  = (2, 0, -1)
```

Ovo naravno nećemo uvek raditi ručno. Za ubuduće, najbolje je vektorski proizvod enkapsulirati u funkciju:

```js
function cross(a, b) {
    return {
        x: a.y * b.z - a.z * b.y,
        y: a.z * b.x - a.x * b.z,
        z: a.x * b.y - a.y * b.x
    }
}
```

<!-- ## 2D vektorski proizvod

2D vektorski proizvod, za razliku od 3D verzije, ne vraća vektor već skalar. Ovaj vrednost zapravo predstavlja dužinu normalnog vektora duž z-ose, ako bi unakrsni proizvod bio izveden u 3D. 

Na neki način, 2D vektorski proizvod je pojednostavljeni 3D vektorski proizvod. I ovde, redosled operacija je bitan: a×b nije isto što i b×a.

Dva vektora se mogu ukrstiti, skalar se može ukrstiti sa vektorom, i vektor se može ukrstiti sa skalarom. Evo operacija:

```js
// ukršteni proizvod dva vektora, vraća skalar
const crossProduct = (a, b) => a.x * b.y - a.y * b.x

// ukršteni proizvod vektora i skalara, vraća vektor
const vectorCrossWithScalar = (a, s) => ({
    x: s * a.y,
    y: -s * a.x
})

// ukršteni proizvod skalara i vektora, vraća vektor
const scalarCrossWithVector = (s, a) => ({
    x: -s * a.y,
    y: s * a.x
})
```

Kod poslednje dve funkcije razlika je samo u redosledu argumenata, što utiče na smer rezultujućeg vektora, ali ne i na njegovu veličinu. -->
