---
title: "Vežba: napravi tekstualnu avanturu"
layout: lekcija-js
permalink: /vezba-avantura
---

Napravi priču sa više završetaka na osnovu promenljivih.

Minimalni uslov je da postoji uvodni opis scene, i da se korisniku ponudi jedan od više izbora, nakon čega mu izlazi odgovarajuća poruka. Bonus je da postoji više krugova izbora.

Za korisnički unos možeš koristiti `prompt`, a za ispisivanje poruka `alert` funkciju. Bonus je da ne koristiš `prompt` i `alert`, već HTML input tag, i da se poruke ispisuje na stranici.

Savet: `switch` struktura (skretnica) je veoma zgodna za rešenje ovog problema. 

{:.ulaz}
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

## Napredno rešenje

Rešenje sa više nivoa izbora:

{:.ulaz}
```js
const pravac = prompt('Nalaziš se u mračnoj šumi, i jure te trolovi. Sa leve strane je reka. Sa desne litica. Gore je pećina. Dole se nazire kanjon. Na koju stranu ćeš nastaviti?')

switch(pravac) {
  case 'levo':
    const preplivati = confirm('Naišao si na veliku reku. Da li ćeš pokušati da preplivaš?')
    if (preplivati) alert('Bravo, uspešno si prešao reku.')
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

Kada unutar skretnice nastavimo da razrađujemo logiku, rešenje teži da postane nepregledno. Zato je dobra praksa odvojiti pojedine izbore u funkcije:

{:.ulaz}
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
  const preplivati = confirm('Naišao si na veliku reku. Da li ćeš pokušati da preplivaš?')
  if (preplivati) alert('Bravo, uspešno si prešao reku.')
  else alert('Mrtav si, trolovi su te uhvatili.')
}

function idiDesno() {
  const silazi = confirm('Naišao si na liticu. Da li ćeš pokušati da siđeš?')
  if (silazi) alert('Pao si niz liticu i poginuo.')
  else alert('Trolovi su projurili pored tebe. Spašen si.')
}
```

Sada je osnovna skretnica opet rasterećena, a logika se dalje razvija unutar zasebnih funkcija.

{:.uokvireno}
Tekstualne avanture su jedan od prvih žanrova igara. Sa znanjem logike i uslova koje si stekao, sada ih možeš i sam praviti.