---
title: HTML elementi
layout: lekcija-html
permalink: /html-elementi
redirect_from:
  - /ucimo-html/elementi
  - /osnovne-html-oznake
---

**HTML stranica je sastavljena od HTML elemenata.** HTML element najčešće obuhvata otvarajuću oznaku, zatvarajuću oznaku, i sadržaj između, u sledećem formatu:

```html
<naziv>sadržaj</naziv>
```

## Osnovne HTML oznake


HTML je izvorno stvoren za formatiranje teksta, što mu je i dalje glavna namena. Neki od osnovnih HTML tagova su:

Naziv elementa | Engleski naziv | Početni tag | Završni tag
---------------|----------------|-------------|-----------
naslov (ili zaglavlje) | heading | `<h1>` | `</h1>`
pasus | paragraph | `<p>` | `</p>`
podebljan | bold | `<b>` | `</b>`
iskošen | italic | `<i>` |`</i>`
link (ili sidro) | anchor | `<a>` | `</a>`
slika | image | `<img>` | nema
podeok | division | `<div>` | `</div>`
novi red | line break | `<br>` | nema

{:.uokvireno.ideja}
Trik za pamćenje: Tagovi su često skraćenice engleskih naziva.

## Isprobaj HTML oznake

Oznake se u pregledaču ne prikazuju, već njihov efekat. Naziv taga, koji se nalazi unutar uglastih zagrada, određuje kako se sadržaj prikazuje. Ovako se, na primer, prikazuju neke od osnovnih oznaka:

{:.html-ulaz}
```html
<h1>Zdravo svete</h1>

<p>Dobrodošli na stranice Škole koda. Učimo <b>HTML</b> i <b>CSS</b>.</p>

<img src="/images/fore/sensei.png">
```

{:.uokvireno.ideja}

Isprobaj neke od gornjih tagova u editoru. Takođe, pokušaj da promeniš veličinu naslova (npr `h2` ili `h3`).

*Zapamti ako ti neki tagovi ne budu radili, kasnije ćemo utvrditi zašto.*

## Uparene i neuparene oznake

HTML tagovi mogu biti upareni ili neupareni (samozatvarajući). Upareni imaju otvarajući i zatvarajući tag, i sadržaj između, na primer:

```html
<p>Zdravo svete</p>
```

Neupareni imaju samo jednu oznaku, koja istovremeno i otvara i zatvara tag, na primer `<br/>` ili `<img />`.


## Uvek koristimo mala slova

Nazivi tagova su neosetljivi na velika i mala slova. Za naš pregledač, `<DIV>` je isto što i `<div>`.

Ipak, World Wide Web Konzorcijum (W3C) preporučuje upotrebu malih slova u HTML standardu. Takođe, mala slova su obavezna za strože tipove dokumenata, kao XHTML.

U Školi koda tagove uvek pišemo malim slovima.
