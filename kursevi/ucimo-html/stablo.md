---
title: HTML stablo
layout: lekcija-html
permalink: /ucimo-html/stablo
---

HTML elementi su ugnježdeni jedni unutar drugih (*deca* unutar *roditelja*), tvoreći strukturu stabla.

![dom drvo](/images/koncepti/podaci/html-stablo.png)

HTML stablo podseća na porodično, pa svakom elementu možemo utvrditi pretke i naslednike. Glavna razlika je što HTML elementi imaju samo jednog roditelja.

## Vežba

Uporedi gornju sliku stabla sa kodom u editoru. Pronađi sličnosti i razlike:

<textarea id="editor-ulaz">
<!doctype html>
<html lang="sr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width">
    <meta name="description" content="Stranica o HTML stablu."/>
    <title>HTML stablo</title>
</head>

<body>

    <div id="content">

        <h1>Dobrodošli</h1>

        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Heckert_GNU_white.svg/64px-Heckert_GNU_white.svg.png" />

        <p>HTML struktura je razgranata. <em>Deca</em> elementi se nalaze unutar roditeljskih elemenata.</p>

        <p>Na primer, ova <strong>podebljana reč</strong> se nalazi unutar drugog pasusa.</p>

    </div>

    <div id="menu">

        <h2>Učimo web development</h2>

        <ul>
            <li><a href="http://skolakoda.org/kursevi/ucimo-html">HTML</a></li>
            <li><a href="http://skolakoda.org/kursevi/ucimo-css/">CSS</a></li>
            <li><a href="http://skolakoda.org/kursevi/ucimo-javascript">Javascript</a></li>
            <li><a href="http://skolakoda.org/kursevi/ucimo-php">PHP</a></li>
        </ul>

    </div>

</body>

</html>
</textarea>

{% include tablet.html %}

Kao što možeš videti, sadržaj glave se ne prikazuje na ekranu, samo sadržaj tela stranice.

## HTML glava i telo

Dva osnovna elementa stranice, unutar kojih se svi ostali nalaze, su glava (`<head>`) i telo (`<body>`).

Unutar glave smeštamo meta podatke, koji se ne prikazuju na stranici, ali su bitni za njeno funkcionisanje (npr. način kodiranja karaktera, prilagođavanje širine, opis stranice i slično).

Unutar tela su naslovi, pasusi, podeoci, slike, liste i ostalo, ukratko čitav sadržaj stranice.
