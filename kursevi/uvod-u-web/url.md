---
title: URL, jedinstvena adresa dokumenta
layout: lekcija-html
permalink: /url
image: /images/koncepti/web/url.png
---

![]({{page.image}})

URL je kratica za *uniform resource locator*. To je pokazivač na određeni resurs na nekoj lokaciji na internetu. Na primjer, [https://skolakoda.org/kursevi](https://skolakoda.org/kursevi/) ili [https://skolakoda.org/blog](https://skolakoda.org/blog/) su URL-ovi.
URL specificira protokol za pristup poslužitelju, npr. `ftp` ili `http`, ime poslužitelja, lokaciju datoteke na poslužitelju i eventualno sekciju unutar datoteke. Opći oblik URLa je:

```
protocol://hostname[:port]/path/filename#section
```

## Dijelovi URL-a

**Protokol** je uglavnom jedan od sljedećih:
- file – datoteka na lokalnom disku
- ftp – poslužitelj fajlova
- http – poslužitelj web stranica
- https – sigurni http, web sa zaštitom podataka
- mailto – email adresa
- telnet – veza na servis zasnovan na Telnet-u

**Hostname** (ime poslužitelja) mora biti valjano mrežno ime hosta na internetu, a može biti i IP adresa, npr student.math.hr, www.ora.com or shock.njit.edu ali i 204.29.207.217 ili 128.235.252.184.
Port (broj porta) je opcionalan Za http je default port 80.

**Path** (putanja) pokazuje određeni direktorij na poslužitelju. Formira se u odnosu na početni direktorij servisa (server root, document root) koji ne mora biti (i obično nije) nužno početni direktorij (root) sustava datoteka (file system). Cijeli sustav datoteka obično se ne otkriva javnosti.

**Filename** (ime fajla) pokazuje na određenu datoteku unutar navedenog direktorija. Na mnogim poslužiteljima uobičajeno je da se, ako je ime datoteke izostavljeno, podrazumijeva datoteka index.html. Na drugima će se dobiti ispis direktorija, a neki će poslati poruku o pogreški.

**Section** (sekcija stranice) pokazuje na sekciju HTML stranice, označenu pomoću `id` atributa. URL koji pokazuje na sekciju sadrži tarabu (`#`), na primjer:

```
https://en.wikipedia.org/wiki/Belgrade#History
```

Izvor: Elliotte Rusty Harold, *[Java Lecture Notes](//www.cafeaulait.org/course/index.html)*, preveo Draško Budin, priredio Damjan Pavlica.
