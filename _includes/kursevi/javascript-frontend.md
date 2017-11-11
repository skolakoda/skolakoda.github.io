### Rad u okruženju browsera
- Objektni model dokumenta (DOM)
  - [Struktura stabla](/strukture-podataka#stablo-tree)
  - Razlika HTML-a i DOM-a
- Globalni objekti u pregledaču: `window` i `document`
  - `window` svojstva i metode: `innerHeight`, `innerWidth`, `location`, `setTimeout(), open()`
  - `document` svojstva i metode: `activeElement`, `domain`, `location`, `referrer`
- [Razlika između frontenda i bekenda?](/razlika-izmedju-frontenda-i-bekenda)
- Vežba: predstavi strukturu HTML stranice pomoću JS objekta

### Manipulacija DOM-a
- Selektori elemenata:
  - `document.getElementById()`
  - `document.querySelector()`
  - `document.querySelectorAll()`
- [Dodavanje elemenata](https://jsfiddle.net/mudroljub/rhLggx3t/) (`appendChild`, `innerHTML`, `element.insertAdjacentHTML()`)
- Uklanjanje elemenata (`removeChild` ili `innerHTML`)
- Menjanje stila

### Događaji
- Uvod u Javaskript događaje
  - događaji miša (`click`, `dblclick`, `mousemove`, `mouseenter`, `mouseleave`, `mousedown`, `mouseup`)
  - događaji tastature (`keydown`, `keyup`)
  - događaji formulara (`focus`, `blur`, `change`, `submit`)
  - globalni događaji (`DOMContentLoaded`, `load`, `resize`)
  - Razlika između `DOMContentLoaded` i `window.onload`
- Dodavanje slušača događa
  - dodavanje preko atributa i preko metoda (`addEventListener`)
  - povratna funkcija i prosleđivanje argumenata
  - razlika obične i streličaste povratne funkcije
  - `event` objekat i njegova svojstva
- Sprečavanje podrazumevanog ponašanja (`event.preventDefault()`)
  - sprečavanje slanja forme
  - sprečavanje otvaranja linka
- Vežba: promeni naslov kad je miš iznad
- Vežba: napravi da [element prati kretanje miša](https://jsfiddle.net/mudroljub/du274n9z/)
- Vežba: uporedi `this` unutar obične i streličaste povratne funkcije
- Vežba: spreči podrazumevano ponašanje nekog elementa

### Validacija formulara
- Čitanje vrednosti `input` polja
- Validacija i slanje formulara
  - Validacija putem Javaskripta
  - Prirodna validacija pregledača
  - Slanje podataka bekendu
- Regularni izrazi za nalaženje obrazaca u tekstu
- Vežba: [email validacija](https://jsfiddle.net/mudroljub/h70xtpco/)
- Vežba: proveri dužinu unetog teksta
- Vežba: spreči podrazumevano slanje, proveri podatke pa pošalji

### Regularni izraz

- [Čemu služi regularni izraz?](/regularni-izraz)
- Sintaksa
  - Početak i kraj (`^`, `$`)
  - Broj pojavljivanja (`?`, `+`, `*`, `{}`)
  - Posebni karakteri (`\d`, `\D`, `\w`, `\W`, `\s`, `\S`)
  - Grupisanje (`[]`) i negacija (`^`)
  - Podobrasci (`()`)
  - Alternativa (`|`)
  - Escape (`\`)
- [JS metode za regularni izraz](/regularni-izraz#js-metode-za-regularni-izraz)
- Vežba: [izrazi za ime i prezime, adresu i email](https://jsfiddle.net/mudroljub/6b36w613/)

### Rad sa slikama
- Dodavanje i učitavanje slika
- Menjanje veličine slike
- Menjanje izvora slike
- Vežba: promeni sliku na klik
- Vežba: javi kada su sve slike učitane
- Vežba: [dinamički napravi foto galeriju](https://jsfiddle.net/mudroljub/d4zwwp70/)

### Rad sa zvukom i videom
- učitavanje audio i video fajlova
- puštanje fajlova
- Vežba: Napravi plejer i plejlistu
- Napravi program za pravljenje muzike

### Crtanje i animacije [<img src="/images/ui/ikonice/github.svg" class="ikonica-veca">](https://github.com/skolakoda/ucimo-animacije)

- Crtanje na platnu (`canvas`) i mrdanje DOM elemenata
- Glavna petlja (`main loop`)
- Animiranje sa `setInterval` i `requestAnimationFrame`
  - FPS (broj kadrova po sekundi)
  - Delta vreme
- [Kako napraviti kružnu animaciju pomoću trigonometrije?](/trigonometrija-animacija)
- Interaktivne animacije
- Vežba: Napravi animaciju koja reaguje na korisnički unos
- Vežba: Pravljenje kružne animacije pomoću trigonometrije

### Stilizovanje Javaskriptom
- Stilizovanje preko `style` atributa
  - Prevođenje CSS-a u JS
  - Stilizovanje Javaskriptom kao loša praksa
- Stilizovanje dodavanjem CSS klasa

### jQuery biblioteka
- Dodavanje biblioteke
- Osnovne metode: `hide()`, `show()`, `toggle()`, `append()`, `addClass()`, `removeClass()`
- `jQuery` selektor vs `document.querySelector`
  - Razlika između JS elementa i jQuery objekta
- Događaji u jQuery-u
  - `$(document).ready` vs `window.onload`
- Vežba: sakrij/prikaži deo stranice na klik
- Vežba: dodaj neki jQuery UI element (meni, harmoniku, kalendar...)
- Vežba: napravi mini jQuery

### AJAX i API
- Asinhroni Javaskript i HTML
  - uvod u AJAX tehniku
  - čist JS i jQuery AJAX poziv
- Programski interfejs aplikacija (API)
- Vežba: učitaj adresar iz JSON fajla
- Vežba: učitaj Wikipediju, vremensku prognozu ili neki drugi [javni API](https://github.com/toddmotto/public-apis)
