---
title: Integracija
layout: lekcija-razvoj-igara
permalink: /integracija
---

**Simulacija fizike u igrama radi tako što pravi predviđanja na osnovu zakona fizike. Ova predviđanja izvodimo pomoću matematičke tehnike koja se zove integracija.**

Brzina (v), položaj (x) i ubrzanje (a) tela su blisko povezani: 
- **brzina** (*velocity*) je promena položaja tokom vremena (v = dx / dt). 
- **ubrzanje** (*acceleration*) je promena brzine kroz vreme (a = dv / dt). 

Povezanost ovih svojstava nam prilično koristi, jer ako znamo prethodne položaje predmeta, možemo saznati njegovu brzinu i ubrzanje. Štaviše, ako znamo ubrzanje, možemo saznati koliko će se brzina menjati svake sekunde. Ako znamo brzinu, možemo saznati koliko će se položaj menjati svake sekunde.

## Ojlerov metod (*Euler*)

Ojlerov metod je najjednostavniji način izvođenja numeričke integracije (rešavanja diferencijalnih jednačina sa datom početnom vrednošću). Računamo ubrzanje, brzinu i položaj:

```
ubrzanje = sila / masa
brzina += ubrzanje * delta_vreme (promena brzine)
položaj += brzina * delta_vreme (promena polozaja)
```

Možemo prvo ažurirati položaj pa brzinu, ili obratno. Prvi je eksplicitni Ojlerov metod:

```
x += v * dt
v += (1/m * F) * dt
```

Drugi je poluimplicitni Ojlerov metod (*symplectic Euler*):

```
v += (1/m * F) * dt
x += v * dt
```

Ove jednostavne jednačine su sve što nam treba da pomeramo predmete sa linearnom brzinom i ubrzanjem.

### Primer u kodu

Na telo u mirovanju, težine jedan kilogram, primenjujemo konstantnu silu od 10 njutna u vremenskim koracima od jedne sekunde:

{:.ulaz}
```js
const masa = 1
const sila = 10
const dt = 1

let vreme = 0
let brzina = 0
let polozaj = 0

while (vreme < 10) {
  polozaj = polozaj + brzina * dt
  brzina = brzina + (sila / masa) * dt
  vreme += dt

  console.log(`vreme=${vreme}    polozaj = ${polozaj}      brzina = ${brzina}`)
}
```

## Verle integracija (*Verlet*)

Ojlerov metod je odličan za konceptualno razumevanje, ali nije sasvim tačan. Zato ćemo koristiti Verle integracija brzine. Umesto gore navedenog, možemo da uradimo sledeće:

```
proslo_ubrzanje = ubrzanje
položaj += brzina * vremenski_korak + (0.5 * proslo_ubrzanje * vremenski_korak²)
novo_ubrzanje = sila / masa
prosecno_ubrzanje = (proslo_ubrzanje + novo_ubrzanje) / 2
brzina += prosecno_ubrzanje * vremenski_korak
```

Glavna prednost Verle metode je upotreba prosečnog ubrzanja između dva kadra, što značajno povećava preciznost.


### Primer u kodu

Na telo u mirovanju, težine jedan kilogram, primenjujemo konstantnu silu od 10 njutna u vremenskim koracima od jedne sekunde:

{:.ulaz}
```js
const masa = 1
const sila = 10
const dt = 1

let vreme = 0
let brzina = 0
let polozaj = 0
let proslo_ubrzanje = sila / masa
let prosli_polozaj = polozaj - brzina * dt

while (vreme < 10) {
  polozaj += brzina * dt + (0.5 * proslo_ubrzanje * Math.pow(dt, 2))
  
  let novo_ubrzanje = sila / masa
  let prosecno_ubrzanje = (proslo_ubrzanje + novo_ubrzanje) / 2
  brzina += prosecno_ubrzanje * dt  
  proslo_ubrzanje = novo_ubrzanje
  prosli_polozaj = polozaj
  vreme += dt
  
  console.log(`vreme=${vreme}:    polozaj = ${polozaj}      brzina = ${brzina}`)
}
```

## Primena u igrama

Proces simulacije kretanja tela izgleda otprilike ovako:
* izračunaj svojstva mase za predmet (masa, centar mase, momenat inercije)
* ustanovi koje sile deluju na predmet
* saberi sile da dobiješ rezultantu ili ukupnu silu
* koristi `F = m * a` da izračunaš ubrzanje tela na osnovu sile (linearno i ugaono ubrzanje)
* korist ubrzanje tela da izračunaš brzinu (linearnu i ugaonu brzinu)
* koristi brzinu tela da izračunaš položaj (linearni i ugaoni pomeraj)
* pošto se dejstvujuće sile menjaju, neprestano ponavljaj ovaj proces

Za svaki objekat na svakom koraku:

```
primeni gravitaciju (dodaj konstantu brzini)
primeni brzinu (dodaj brzinu poziciji)

ako (pozicija > neki limit) {
    obrni brzinu
    pomnoži brzinu sa "odskokom" između 0 i 1
    ako je brzina < 0.5
        postavi brzinu i gravitaciju na 0
}
```

## Literatura
- Richard Lord, [*Physics for Flash Games*](http://www.richardlord.net/presentations/physics-for-flash-games)
- Glenn Fiedler, [*Integration Basics*](https://gafferongames.com/post/integration_basics/)