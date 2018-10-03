---
title: Stilizovanje veza
layout: lekcija-html
permalink: /stilizovanje-veza
image: https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Chains_%2825491126954%29.jpg/1024px-Chains_%2825491126954%29.jpg
---

**Skromna veza do sidra (*anchor link*) temelj je World Wide Weba.**

To je mehanizam koji omogućuje međusobno povezivanje stranica, a korisnicima istraživanje i kretanje kroz njih. Podrazumijevano stilizovanje veza prilično je nenadahnuto, no s malo CSS-a možete učiniti zadivljujuće stvari.

## Prosto stilizovanje veza

Najlakši način stilizovanja veze je upotreba selektora tipa sidra (`a`). Na primjer, ovo će pravilo sva sidra obojati crveno:

```css
a {
  color: red;
}
```

Možeš slobodno menjati boju i gledati kako radi:

{:.html-ulaz}
```html
<style>
a {
  color: red;
}
</style>

<a href="https://commons.wikimedia.org">Odvedi me negde</a>
```

## Selektori pseudoklase

Selektor pseudoklase `:link` koristi se za ciljanje veza koje nisu bile posjećene, a selektor pseudoklase `:visited` za ciljanje posjećenih veza. Tako će u ovom primjeru sve neposjećene veze biti plave, a sve posjećene veze zelene:

{:.html-ulaz}
```html
<style>
a:link {
  color: blue;
}
a:visited {
  color: green;
}
</style>

<a href="https://sh.wikipedia.org">Wikipedija</a>
<a href="https://commons.wikimedia.org">Wikimedijina ostava</a>
<a href="https://news.ycombinator.com/news">Hakerske vesti</a>
```

Ostala dva selektora koja možete upotrijebiti za stilizovanje veza su dinamički selektori pseudoklasa `:hover` i `:active`. Dinamički selektor `:hover` služi za ciljanje elemenata kad se iznad njih nalazi miš, a `:active` cilja elemente kad su aktivirani. U slučaju veza, do aktiviranja dolazi kad se veza pritisne. 

Tako će u ovom primjeru veza postati crvena kada se iznad nje postavi pokazivač miša ili kada se pritisne:

{:.html-ulaz}
```html
<style>
a:hover, 
a:active {
  color: red;
}
</style>

<a href="https://commons.wikimedia.org">Odvedi me negde</a>
```

Jedna od prvih stvari za koju većina dizajnera koristi ove selektore jest ukidanje podvlačenja veza, a zatim ponovno podvlačenje kada se iznad veze postavi pokazivač miša ili kada se pritisnu. To se radi postavljanjem svojstva `text-decoration` na `none` za neposjećene i posjećene veze, a na `underline` za veze iznad kojih je pokazivač i aktivne:

{:.html-ulaz}
```html
<style>
a:link, a:visited {
  text-decoration: none;
}
a:hover, a:active {
  text-decoration: underline;
}
</style>

<a href="https://commons.wikimedia.org">Odvedi me negde</a>
```

## Redosled selektora

U prethodnom je primjeru redoslijed selektora vrlo važan. Ukoliko je redoslijed obrnut, stil neće raditi:

{:.html-ulaz}
```html
<style>
a:hover, a:active {
  text-decoration: underline;
}
a:link, a:visited {
  text-decoration: none;
}
</style>

<a href="https://commons.wikimedia.org">Odvedi me negde</a>
```

Razlog tome je kaskada. Kada dva pravila imaju jednaku specifičnost, prednost ima pravilo koje je definirano posljednje. U ovoj situaciji oba pravila imaju jednaku specifičnost pa će stilovi `:link` i `:visited` premostiti stilove `:hover` i `:active`. Da biste bili sigurni kako se to neće dogoditi, preporučljivo je primjenjivati stilove veza sljedećim redoslijedom:

```
a:link, a:visited, a:hover, a:active
```

{:.uokvireno.ideja}
Ovaj redoslijed lako se može zapamtiti s pomoću mnemotehničkog izraza **LoVe:HAte**, gdje **L** znači *link* (veza), **V** *visited* (posjećena), **H** *hover* (kada je pokazivač miša iznad veze), a **A** *active* (aktivna).


Izvor: Andy Budd, *CSS Mastery: napredna Web rješenja* ([probno poglavlje](https://www.knjizara.hr/detalji_proizvoda.515541e78407453fb5fcc12ad8e9cbb1.css-mastery-napredna-web-rjesenja.aspx)), Zagreb 2006.

Priredio: Damjan Pavlica 2018.
