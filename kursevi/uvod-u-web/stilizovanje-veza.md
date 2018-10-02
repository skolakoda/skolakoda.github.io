---
title: Stilizovanje veza
layout: lekcija-html
permalink: /stilizovanje-veza
image: https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Chains_%2825491126954%29.jpg/1024px-Chains_%2825491126954%29.jpg
---

![]({{page.image}})

**Skromna veza do sidra (*anchor link*) temelj je World Wide Weba.**

To je mehanizam koji omogućuje međusobno povezivanje stranica, a korisnicima istraživanje i kretanje kroz njih. Podrazumijevano stilizovanje veza prilično je nenadahnuto, no s malo CSS-a možete učiniti zadivljujuće stvari.

## Jednostavno stilizovanje veza

Najlakši način stilizovanja veze je upotreba selektora tipa sidra. Na primjer, ovo će pravilo sva sidra obojati crveno:

```css
a {
  color: red;
}
```

Međutim, sidra mogu služiti kao unutarnje reference baš kao i vanjske veze pa upotreba selektora tipa nije uvijek idealna. Kao primjer uzmite ovu situaciju. Prvo sidro sadrži identifikator fragmenta pa kad korisnik pritisne to sidro, stranica će se pomaknuti do drugog imenovanog sidra:

```html
<p><a href="#mainContent">Skip to main content</a></p>
...
<h1><a name="mainContent">Welcome</a></h1>
```

Iako biste vjerojatno željeli da samo veza bude stilizovana crvenom bojom, sadržaj naslova također će biti stilizovan crvenom bojom. Da bi se to izbjeglo, CSS pruža dva posebna selektora koji se nazivaju selektorima pseudoklase veze.

## Selektori pseudoklase

Selektor pseudoklase `:link` koristi se za ciljanje veza koje nisu bile posjećene, a selektor pseudoklase `:visited` za ciljanje posjećenih veza. Tako će u ovom primjeru sve neposjećene veze biti plave, a sve posjećene veze zelene:

```css
a:link {
  color: blue;  /* Neposjećene veze su plave */
}
a:visited {
  color: green; /* Posjećene veze su zelene */
}
```

Ostala dva selektora koja možete upotrijebiti za stilizovanje veza su dinamički selektori pseudoklasa `:hover` i `:active`. Dinamički selektor pseudoklase `:hover` služi za ciljanje elemenata kad se iznad njih nalazi pokazivač miša, a dinamički selektor pseudoklase `:active` cilja elemente kad su aktivirani. U slučaju veza, do aktiviranja dolazi kad se veza pritisne. Tako će u ovom primjeru veza postati crvena kada se iznad nje postavi pokazivač miša ili kada se pritisne:

```css
a:hover, a:active {
  color: red;
}
```

Jedna od prvih stvari za koju većina dizajnera nauči koristiti ove selektore jest isključivanje podvlačenja veza, a zatim njegovo ponovno uključivanje kada se iznad veze postavi pokazivač miša ili kada se pritisnu. To se može učiniti postavljanjem svojstva `text-decoration` na `none` za neposjećene i posjećene veze, a na `underline` za veze iznad kojih je pokazivač i aktivne veze:

```css
a:link, a:visited {
  text-decoration: none;
}
a:hover, a:active {
  text-decoration: underline;
}
```

## Redoslijed selektora

U prethodnom je primjeru redoslijed selektora vrlo važan. Ukoliko je redoslijed obrnut, stil za stilizovanje kada je pokazivač iznad veze i aktivni stil neće raditi:

```css
a:hover, a:active {
  text-decoration: underline;
}
a:link, a:visited {
  text-decoration: none;
}
```

Razlog tome je kaskada. Kada dva pravila imaju jednaku specifičnost, prednost ima pravilo koje je definirano posljednje. U ovoj situaciji oba pravila imaju jednaku specifičnost pa će stilovi `:link` i `:visited` premostiti stilove `:hover` i `:active`. Da biste bili sigurni kako se to neće dogoditi, preporučljivo je primjenjivati stilove veza sljedećim redoslijedom:

```
a:link, a:visited, a:hover, a:active
```

Ovaj redoslijed lako se može zapamtiti s pomoću mnemotehničkog izraza **LoVe:HAte**, gdje **L** znači *link* (veza), **V** *visited* (posjećena), **H** *hover* (kada je pokazivač miša iznad veze), a **A** *active* (aktivna).


Izvor: Andy Budd, *CSS Mastery: napredna Web rješenja* ([probno poglavlje](https://www.knjizara.hr/detalji_proizvoda.515541e78407453fb5fcc12ad8e9cbb1.css-mastery-napredna-web-rjesenja.aspx)), Zagreb 2006.

Priredio: Damjan Pavlica 2018.
