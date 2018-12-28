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

Na primer, sledeće pravilo menja boju pozadine kada korisnik pređe mišem iznad pasusa:

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

Na primer, sledeće pravilo povećava prvo slovo svakog pasusa:

```css
p:first-letter {
  font-size: 300%;
}
```

## Pseudo elementi

Možemo izmeniti sadržaj stranice pomoću CSS selektora `:before` i `:after`, koji kreiraju novi pseudo-element. Sadržaj pseudo-elementu dodajemo preko svojstva `content`.

Na primer, ako na stranici imamo puno linkova koji vode ka Youtube-u, i želimo to nekako da označimo, mogli bismo da redom menjamo HTML i dodajemo ikonicu. Međutim, odgovarajući simbol mnogo lakše možemo dodati preko CSS pseudo elementa `::before`, koji je predviđen za to.

```css
a::before {
  content: "►";
}
```

Ukoliko želimo da pseudo element dodamo nakon sadržaja, onda koristimo `::after`. 

## Primeri

Primer upotrebe pseudo klasa `hover`, `first-letter` i `before`:

{:.html-ulaz}
```html
<style>
p:hover {
  background-color: yellow;
}

p:first-letter {
  color: crimson;
  float: left;
  font-family: sans-serif;
  font-size: 300%;
  padding: 0 5px;
}

a {
  text-decoration:none;;
}

a::before {
  content: "► ";
  color: red;
}

</style>

<p>
  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
</p>

<p>
  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
</p>

<p>
  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
</p>

<a href="https://youtu.be/BFc_YPAxQcg">Pogledaj video</a>
```