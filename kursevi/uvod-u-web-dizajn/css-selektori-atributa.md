---
title: Selektori atributa
layout: lekcija-html
permalink: css-selektori-atributa
---

**Pomoću selektora atributa možemo birati elemente na osnovu naziva i vrednosti njihovih atributa.**

### Po nazivu atributa

Možemo selektovati elemente po nazivu atributa. Na primer,  onemogućene elemente biramo na sledeći način:

```css
[disabled] {
  color: lightgray;
}
```

Da bismo selektovali samo onemogućene dugmiće, dodajemo i naziv elementa:

```css
button[disabled] {
  color: lightgray;
}
```

### Atribut koji sadrži frazu

**`*=`** selektuje atribut koji sadrži određenu frazu. Na primer linkove čija putanja sadrži reč "vezba":

```css
a[href*="vezba"] {
  color: black;
}
```

### Atribut koji sadrži celu reč

**`~=`** selektuje atribut koji sadrži celu reč, samu ili odvojenu razmakom. Na primer, ovako biramo elemente koji sadrže klasu `error`: 

```css
[class~="error"] {
  color: red;
}
```

Ovako biramo `alt` atribut koji sadrži reč `popust`:

```css
[alt~="popust"] {
  color: red;
}
```

<!-- Selektuje atribut koji sadrži željenu reč ali je odvojena crtom. Na primer:

```css
[lang|="en"] {
  color: red;
}
``` -->

### Atribut koji počinje frazom

**`^=`** selektuje atribut koji počinje određenom frazom. Na primer, ovako biramo sve linkove koji vode na sigurni protokol: 

```css
a[href^="https"] {
  color: green;
}
```

### Atribut koji se završava frazom

**`$=`** selektuje atribut koji se završava određenom frazom. Na primer, ovako biramo linkove čija se putanja završava na `.com`: 

```css
a[href$=".com"] {
  color: blue;
}
```

### Doslovna vrednost atributa

**`=`** selektuje atribut koji ima tačno određenu vrednost. Na primer, ovako selektujemo link ka nekoj stranici:

```css
a[href="http://neka-stranica.com"] {
  color: black;
}
```

Ili sva input polja brojčanog tipa:

```css
input[type="number"] {
  border: 1px solid black;
}
```


## Primeri 

{:.html-ulaz}
```html
<style>
  button[disabled] {
    color: lightgray;
  }

  [class~="error"] {
    color: red;
  }

  a[href^="https"] {
    color: green;
  }
</style>

<button disabled>Potvrdi</button>

<p class="text error">Niste popunili sva polja.</p>

<a href="https://skolakoda.github.io">Ovaj link sadrži sigurni protokol.</a>
```