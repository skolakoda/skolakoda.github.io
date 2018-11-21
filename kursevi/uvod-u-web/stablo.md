---
title: HTML stablo
layout: lekcija-html
permalink: /html-stablo
redirect_from: /ucimo-html/stablo
---

**HTML elementi su ugnježdeni jedni unutar drugih (*deca* unutar *roditelja*), tvoreći strukturu stabla.**

HTML stablo podseća na porodično, pa svakom elementu možemo utvrditi pretke i naslednike. Glavna razlika je što HTML elementi imaju samo jednog roditelja.

## Vežba

![dom drvo](/images/koncepti/podaci/html-stablo.png)

Uporedi sliku stabla sa kodom u editoru. Pronađi sličnosti i razlike:

{:.html-ulaz}
```html
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
            <li><a href="https://skolakoda.org/kursevi/ucimo-html/">HTML</a></li>
            <li><a href="https://skolakoda.org/kursevi/ucimo-css/">CSS</a></li>
            <li><a href="https://skolakoda.org/kursevi/ucimo-javascript/">Javascript</a></li>
            <li><a href="https://skolakoda.org/kursevi/ucimo-php">PHP</a></li>
        </ul>

    </div>

</body>

</html>
```

Kao što možeš videti, sadržaj glave se ne prikazuje na ekranu, samo sadržaj tela stranice.
