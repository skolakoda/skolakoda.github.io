---
title: Pseudo-klase u CSS-u
layout: lekcija-html
permalink: css-pseudo-klase
---

**Pseudo-klasa je selektor koji uključuje dinamičko stanje elementa.**

Pseudo klase omogućuju dodavanje dinamičkog stila i sadržaja stranicama, bez programiranja. Ranije, ako smo želeli da dinamički promenimo stil, morali smo da koristimo JavaScript. 

## Pseudo klase stanja

Dinamičke pseudo klase hvataju element na osnovu njegovog trenutnog stanja. Stanje zavisi od interakcije korisnika sa stranicom. Na primer, stanje `:hover` se aktivira kada korisnik postavi kursor miša iznad elementa. 

- `:visited` -  pseudo klasa selektuje linkove koji su već posećeni. Primer: `a:visited {color: red;}`
- `:link` -  selektuje linkove nisu posećeni. Primer: `a:link {color:black}`
- `:hover` - selektuje bilo koji elemenat iznad koga se nalazi pokazivač.
- `:focus` - selektuje element u fokusu. Dobar primer elementa u fokusu je input polje.
- `:active` - selektuje element kada je aktivan. Element je aktivan u vremenu kad se klikne na njega pa sve do trenutka kad se pusti dugme na mišu.
- `:checked` - selektuje element u čekiranom stanju. Ono se obično vezuje za input tipa `checkbox`, radi i za radio dugme i `select option`.

### Primer

Sledeće pravilo menja boju pozadine kada korisnik pređe mišem iznad pasusa:

```css
p:hover {
  background-color: yellow;
}
```

## Pseudo klase položaja

Pozicione pseudo klase hvataju element prema položaju na stranici ili u roditeljskom elementu.

- `:first-child` - selektuje prvi elemenat unutar roditeljskog elementa.
- `:last-child` - selektuje poslednje dete unutar roditeljskog elementa.
- `:nth-child(n)` - selektuje svako n-to dete roditeljskog elementa.
- `:first-letter` - bira prvo slovo u elementu. 
- `:first-line` - bira prvi red teksta u elementu.

### Primer

Sledeće pravilo ukrašava prvo slovo na početku svakog pasusa:

```css
p:first-letter {
  font-size: 300%;
  float: left;
  font-family: sans-serif;
  padding: 0 5px;
}
```

Možemo izmeniti prethodni selektor da samo prvom pasusu nakon naslova ukrasi prvo slovo:

```css
h1 + p:first-letter {
  font-size: 300%;
  float: left;
  font-family: sans-serif;
  padding: 0 5px;
}
```

## Pseudo elementi

Možemo izmeniti sadržaj stranice pomoću CSS selektora `:before` i `:after`, koji kreiraju novi pseudo-element. Sadržaj pseudo-elementu dodajemo preko svojstva `content`.

### Primer

Recimo da stilski vodič zahteva da svaku skraćenicu stavimo unutar uglastih zagrada, a na sajtu imamo puno skraćenica, poput:

```html
<abbr>NSND</abbr> je regionalno okupljanje hakera.
```

Umesto da uređujemo svaku stranicu da bi dodali zagrade, koje su stilski element pre nego sadržaj, možemo ih dodati preko CSS-a na sledeći način:

```css
abbr:before {
  content: "["
}
abbr:after {
  content: "]"
}
```
