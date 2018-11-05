---
title: Link kao dugme
layout: lekcija-html
permalink: /link-kao-dugme
image: https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Chains_%2825491126954%29.jpg/1024px-Chains_%2825491126954%29.jpg
---

**Ima slučajeva kad ćete poželjeti da veza više nalikuje dugmetu, s većim područjem za pritiskanje.**

To možete učiniti postavljanjem svojstva sidra `display` na `block` i nakon toga mijenjanjem `width`, `height` i ostalih svojstava, da izradite stil kakav želite.

{:.html-ulaz}
```html
<style>
a {
  display: block;
  width: 6em;
  padding: 0.2em;
  line-height: 1.4;
  background-color: #94B8E9;
  border: 1px solid black;
  color: #000;
  text-decoration: none;
  text-align: center;
}
</style>

<a href="https://commons.wikimedia.org">Idemo</a>
```


Kad se veza prikazuje kao blok element, pritiskanje bilo gdje unutar bloka aktivirat će vezu. Po svojoj prirodi, blok elementi se šire da popune raspoloživu širinu, pa ako je širina njihovih roditelja prevelika, morate primijeniti željenu širinu.

{:.uokvireno}
Možda se pitate zašto umjesto `height` koristim `line-height` za kontroliranje visine. Pa, to je zapravo koristan mali trik za okomito centriranje teksta. Kad biste postavili `height`, vjerojatno biste morali upotrijebiti popunu da potisnete tekst na dolje i imitirate okomito centriranje. Međutim, tekst je uvijek okomito centriran u okviru reda pa će se upotrebom `line-height` tekst uvijek nalaziti u sredini okvira. Ipak, postoji jedan nedostatak. Ako se tekst prelama u dva reda, gumb će biti dvostruko viši nego što biste željeli. Jedini način da to izbjegnete je da zadate veličinu gumba i teksta tako da se tekst ne prelama.

## Jednostavni prijelazi

U lošim starim vremenima, za izradu efekata prijelaza koristile su se velike i pretjerano komplicirane JavaScript funkcije. Srećom, upotreba pseudoklase `:hover` omogućuje izradu efekata prijelaza bez potrebe za JavaScriptom:

```css
a:hover {
  background-color: #369;
  color: #fff;
}
```

Prethodni primjer možemo proširiti zadavanjem boje pozadine i teksta kad se iznad postavi pokazivač miša:


{:.html-ulaz}
```html
<style>
a {
  display: block;
  width: 6em;
  padding: 0.2em;
  line-height: 1.4;
  background-color: #94B8E9;
  border: 1px solid black;
  color: #000;
  text-decoration: none;
  text-align: center;
}

a:hover {
  background-color: #369;
  color: #fff;
}
</style>

<a href="https://commons.wikimedia.org">Idemo</a>
```


Izvor: Andy Budd, *CSS Mastery: napredna Web rješenja* ([probno poglavlje](https://www.knjizara.hr/detalji_proizvoda.515541e78407453fb5fcc12ad8e9cbb1.css-mastery-napredna-web-rjesenja.aspx)), Zagreb 2006.

Priredio: Damjan Pavlica 2018.
