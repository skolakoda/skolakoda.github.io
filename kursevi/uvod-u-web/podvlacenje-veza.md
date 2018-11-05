---
title: Podvlačenje veza
layout: lekcija-html
permalink: /podvlacenje-veza
image: https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Chains_%2825491126954%29.jpg/1024px-Chains_%2825491126954%29.jpg
---

**S gledišta upotrebljivosti i pristupačnosti, važno je da se veze ne razlikuju samo po boji. Razlog je što je mnogim ljudima s oslabljenim vidom teško razlikovati slabo kontrastne boje, posebice kod sitnog teksta. Zato su veze podrazumjevano podvučene.**

Dizajnerima se obično ne sviđa podvlačenje veza jer ono stranici dodaje preveliku težinu i vizualnu zbrku. Odlučite li ukloniti podvlačenje veza, možda ćete umjesto njega odabrati podebljavanje veza. Na taj će način stranica izgledati manje natrpana, a veze će se i dalje isticati:

```css
a:link, a:visited {
  text-decoration: none;
  font-weight: bold;
}
```

Podvlačenje možete ponovno primijeniti kad se iznad veze postavi pokazivač miša ili se ona aktivira, što ističe njihovu mogućnost interakcije:

```css
a:hover, a:active {
  text-decoration: underline;
}
```

Pogledaj pun primer:

{:.html-ulaz}
```html
<style>
a:link, a:visited {
  text-decoration: none;
  font-weight: bold;
}
a:hover, a:active {
  text-decoration: underline;
}
</style>

<p>Bitno je da se <a href="https://commons.wikimedia.org">veza</a> primeti u rečenici.</p>
```


Moguće je i manje upadljivo podvući veze zadavanjem rubova. U sljedećem je primjeru podrazumijevana crta uklonjena i zamijenjena manje upadljivom isprekidanom crtom. Kada se iznad veze postavi pokazivač miša ili kada je posjetitelj pritisne, ona se pretvori u punu crtu da bi se korisniku pružila vizualna informacija da se nešto dogodilo:

{:.html-ulaz}
```html
<style>
a:link, a:visited {
  text-decoration: none;
  border-bottom: 1px dotted #000;
}
a:hover, a:active {
  border-bottom-style: solid;
}
</style>

<p>Bitno je da se <a href="https://commons.wikimedia.org">veza</a> primeti u rečenici.</p>
```


Izvor: Andy Budd, *CSS Mastery: napredna Web rješenja* ([probno poglavlje](https://www.knjizara.hr/detalji_proizvoda.515541e78407453fb5fcc12ad8e9cbb1.css-mastery-napredna-web-rjesenja.aspx)), Zagreb 2006.

Priredio: Damjan Pavlica 2018.
