---
title: Video u HTML-u
layout: lekcija-html
permalink: /html-video
---

**U HTML stranicu možemo ugraditi video sa tuđeg servisa, ili postaviti sopstveni video.**

## Ugrađivanje videa

Danas je većina video sadržaja ugrađena u stranice sa specijalizovanih servisa. Ljudi uglavnom samo kopi-pejstuju kod koji servisi za video hosting nude za ugrađivanje video zapisa.

Dva najpopularnija servisa za otpremanje video snimaka su *YouTube* i *Vimeo* i oba nude kod za ugradnju videa. Ako želimo da na stranici dodamo video sa *YouTube*-a, kliknimo na dugme *Share*, izaberimo *Embed* i biće nam prikazan kod za ugradnju pomoću `iframe`-a. Na primer:

```html
<iframe width="560" height="315" src="https://www.youtube.com/embed/BFc_YPAxQcg" frameborder="0" allowfullscreen></iframe>
```

### Prednosti i nedostaci upotrebe video servisa

Prvo, video fajlovi su uglavnom veliki, pa njihovo hostovanje na specijalizovanim sajtovima znači da ne moramo da razmišljamo o prostoru na serveru. Takođe možemo kori­stiti video plejer sa tih sajtova, koji podržava više nivoa kvaliteta, puštanje preko celog ekrana i slično. 

Druga prednost je da možemo privući i korisnike sajtova YouTube i Vimeo. Kada objavimo video na YouTube-u, on se prikazuje u rezultatima pretrage i među povezanim video zapisima.

Nedostaci su da drugim servisima ustupamo izvesnu kontrolu nad vašim video zapisom i načinom na koji je predstavljen. YouTube plejer funkcioniše dobro, ali korisnicima je očigledno da je to YouTube plejer. Pored toga, ograničena je dužina i vrsta snimka koji možemo objaviti. Postoje i automatski sistemi za proveru kršenja autor­skih prava, koji mogu pogrešiti i automatski ukloniti video.

## Hostovanje svog videa

Postoje brojni razlozi da sami hostujemo video. Prvo, možemo koristiti sopstveni plejer, umesto plejera koje servisi nude. Takođe, verovatno ne želimo da naš sajt sadrži reklame treće strane i da logo nekog servisa odvlači pažnju posetilaca. No, jedna od glavnih prednosti servisa je što ne mislimo o kodecima i formatima, jer oni konvertuju video. Ako sami hostujemo video, treba da ga konvertujemo u `MP4` format.

Načini dodavanja video snimka u HTML su se menjali. U ranim danima weba najbolji pristup je bio da se poveže link sa video datotekom, da bi posetioci mogli da preuzmu i reprodukuju video u drugim aplikacijama. Kada je uvedena podrška za pluginove pomoću taga `<embed>`, postalo je moguće da se video ugradi direktno u stranicu, ali je korisnik morao imati instaliran odgovarajući plugin.

Danas je najbolji pristup upotreba `<video>` taga.

## `<video>` tag

`<video>` tag dodaje video na stranicu i, za razliku od nekih drugih pluginova, koristi izvorne mogućnosti za reprodukovanje videa u pregledačima. Ovo je najprostiji primer:

```html
<video src="uvod-u-javascript.mp4">
```

No, video plejer neće podrazumevano prikazati kontrole i neće automatski započeti reprodukovanje. Za to je potrebno da koristimo dodatne atribute `controls` ili `autoplay`. Sa uključenim atributom `controls`:

```html
<video src="uvod-u-javascript.mp4" controls>
```

### Atributi video taga

ATRIBUT | OPIS
--- | ---
`src` | URL adresa videa koji treba reprodukovati
`height` | Visina elementa
`width` | Širina elementa
`controls` | Bulov atribut koji označava da pregledač treba da omogući svoje kontrole za video; on podrazumevano izostavlja kontrole
`autoplay` | Bulov atribut koji označava da video treba da započne reprodukovanje kada se stranica učita
`loop` | Bulov atribut; ako je prisutan, video će se ponoviti kada dođe do kraja i ponavljaće reprodukciju, dok je korisnik ne zaustavi
`preload` | Bulov atribut; ako je prisutan, pregledač će započeti preuzimanje videa čim se učita stranica za reprodukovanje
`poster` | Prikazuje se slika pre nego što započne reprodukovanje videa.
`muted` | Bulov atribut; ako je prisutan, video neće imati zvuk

Element `<video>` je podrazumevano iste veličine kao video u fajlu. Možemo promeniti veličinu elementa pomoću `height` i `width` atributa, ali će pregledač sačuvati razmere i ostaviti prazan prostor gde je potrebno. 

Ako procenimo da će većina posetilaca želeti da pogleda video, možemo uključiti atribut `preload`, koji će tražiti od pregledača da započne preuzimanje video fajla čim stranica bude učitana, ali će sačekati da ga korisnik pusti. To znači da korisnici neće morati dugo da čekaju da bi pogledali video nakon što ga puste, ali će biti korišćen propusni opseg koji će video slati svima, bez obzira da li ga puštaju ili ne.

{:.uokvireno.ideja}
Kada dodajete video, pobrinite se da korisnicima obezbedite kontrole. Budite oprezni sa svojstvima `autoplay` i `loop`, jer mnogi ne žele da video počne čim pristupe stranici. Ako uključite atribut `loop` a ne prikažete kontrole, posetilac će morati da napusti stranicu da bi zaustavio video.

### Postavljanje rezervnog formata

Neki stari pregledači ne podržavaju `mp4` format, pa je potrebno dodati rezervni. Da bismo omo­gućili video u više formata, koristimo element `<source>`, ugnežden u `<video>` tagu:

```html
<video width="320" height="240" preload controls>
  <source src="movie.mp4" type="video/mp4">
  <source src="movie.ogv" type="video/ogg">
</video>
```

Atribut `src` na `source` tagu sadrži putanju do datoteke, a `type` informacije o formatu. Pregledač sam bira datoteku koja je kompatibilna. U ovom slučaju atribut `src` na `video` tagu nije potreban. 

## Literatura

* Laura Lemay, Rafe Colburn, Jennifer Kyrnin, *HTML5, CSS3 i JavaScript za razvoj veb strana*, Beograd, 2016.