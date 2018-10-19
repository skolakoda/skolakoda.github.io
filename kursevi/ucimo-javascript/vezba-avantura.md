---
title: "Vežba: napravi tekstualnu avanturu"
layout: lekcija-js
permalink: /vezba-avantura
image: /images/koncepti/logika/avantura.jpg
---

![]({{page.image}})

**Napravi priču sa više završetaka na osnovu promenljivih.**

Minimalni uslov je da postoji uvodni opis scene, da se korisniku ponudi više izbora, i da mu zavisno od izbora izađe odgovarajuća poruka. Bonus je da postoji više nivoa izbora.

{:.uokvireno}
Savet: Skretnica (`switch`) je veoma zgodna za rešenje ovog problema. Za korisnički unos u početku možeš koristiti `prompt`, a za prikaz poruka `alert` funkciju. 

## Rešenje

Prosto rešenje:

{:.ulaz.resenje}
```js
const pravac = prompt('Nalaziš se u mračnoj šumi, i jure te trolovi. Sa leve strane je reka. Sa desne litica. Gore je pećina. Dole se nazire kanjon. Na koju stranu ćeš nastaviti?')

switch(pravac) {
  case 'levo':
    alert('Naišao si na veliku reku.')
    break
  case 'desno':
    alert('Naišao si na liticu.')
    break
  case 'gore':
    alert('Popeo si se do pećine')
    break
  case 'dole':
    alert('Sišao si u kanjon')
  default:
    alert('Nisi izabrao pravac')
}
```

Rešenje sa više nivoa izbora:

{:.ulaz.resenje}
```js
const pravac = prompt('Nalaziš se u mračnoj šumi, i jure te trolovi. Sa leve strane je reka. Sa desne litica. Gore je pećina. Dole se nazire kanjon. Na koju stranu ćeš nastaviti?')

switch(pravac) {
  case 'levo':
    const preplivava = confirm('Naišao si na veliku reku. Da li ćeš pokušati da preplivaš?')
    if (preplivava) alert('Bravo, uspešno si prešao reku.')
    else alert('Mrtav si, trolovi su te uhvatili.')
    break
  case 'desno':
    const silazi = confirm('Naišao si na liticu. Da li ćeš pokušati da siđeš?')
    if (silazi) alert('Pao si niz liticu i poginuo.')
    else alert('Trolovi su projurili pored tebe. Spašen si.')
    break
  case 'gore':
    alert('Popeo si se do pećine')
    break
  case 'dole':
    alert('Sišao si u kanjon')
  default:
    alert('Nisi izabrao pravac')
}
```

Rešenje sa više nova izbora odvojenim u funkcije:

{:.ulaz.resenje}
```js
const pravac = prompt('Nalaziš se u mračnoj šumi, i jure te trolovi. Sa leve strane je reka. Sa desne litica. Gore je pećina. Dole se nazire kanjon. Na koju stranu ćeš nastaviti?')

switch(pravac) {
  case 'levo':
    idiLevo()
    break
  case 'desno':
    idiDesno()
    break
  case 'gore':
    alert('Popeo si se do pećine')
    break
  case 'dole':
    alert('Sišao si u kanjon')
  default:
    alert('Nisi izabrao pravac')
}

function idiLevo() {
  const preplivava = confirm('Naišao si na veliku reku. Da li ćeš pokušati da preplivaš?')
  if (preplivava) alert('Bravo, uspešno si prešao reku.')
  else alert('Mrtav si, trolovi su te uhvatili.')
}

function idiDesno() {
  const silazi = confirm('Naišao si na liticu. Da li ćeš pokušati da siđeš?')
  if (silazi) alert('Pao si niz liticu i poginuo.')
  else alert('Trolovi su projurili pored tebe. Spašen si.')
}
```

Kada unutar skretnice nastavimo grananje, rešenje teži da postane nepregledno. Odvajanjem grana izbora u zasebne funkcije skretnica ostaje pregledna.

## Dalji rad

Ugrađene funkcije za komunikaciju sa korisnikom `prompt`, `alert` i `confirm` se ne koriste u produkciji, jer se prozorčići koji iskaču smatraju napadnim. Umesto toga, za unos koristimo HTML `input` tag, a poruke ispisujemo unutar nekog elementa na stranici.

Takođe je preporučljivo dodati sliku, i poraditi na bojama, kako bi igra izgledala kao gotov proizvod.

{:.uokvireno.ideja}
Tekstualne avanture su jedan od prvih žanrova igara. Sa znanjem logike i uslova koje si stekao, sada ih možeš i sam praviti.