---
title: Gneždenje HTML elemenata
layout: lekcija-html
permalink: /ucimo-html/gnezdenje
---

**HTML elementi koji imaju otvarajući i zatvarajući tag mogu sadržati druge elemente unutar sebe.**

Svaki tag deluje na sadržaj unutar sebe. Sadržaj može biti tekst, ali i drugi tag. Kada je sadržaj drugi tag, imamo ugnježdene elemente, i tada više tagova deluje na sadržaj. Tekst na koji deluje više ugnježdenih tagova se podvrgava uticaju svih njih.

Kod ugnježdenih oznaka se prvo zatvara poslednje otvorena. Tako na primer, ako pored oznake `i`, želimo da deluje i `b`, pišemo `<i><b>Pera</b></i>`, što pregledač prikazuje kao ***Pera***.

## Primer: ugnježdeni elementi

U sledećem primeru, neki elementi su ugnježdeni unutar drugih. Ugnježdene elemente uvek uvlačimo pomoću `tab`a ili razmaka.

{:.html-ulaz}
```html
<h1>Zdravo svete</h1>

<div>
	<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Gibson-sg.svg/48px-Gibson-sg.svg.png" alt="gitara" />

    <p>Ja sam prvi pasus u prvom odeljku i sadržim <b>podebljan tekst</b>.</p>

    <p>Ja sam drugi pasus u prvom odeljku i sadržim <i>iskošen tekst</i>.</p>
</div>

<section>
    <h2>Ja sam podnaslov</h2>

    <p>Ja sam prvi pasus u drugom odeljku i sadržim unos <input />.</p>

    <p>Ja sam drugi pasus u drugom odeljku i sadržim <a href="https://sh.wikipedia.org">link ka Wikipediji</a>.</p>
</section>
```

{:.uokvireno.ideja}
Ne prepoznaješ sve tagove? Slobodno koristi pretragu da saznaš čemu služe.
