---
title: Protokoli
layout: lekcija-html
permalink: /protokoli
---

**Da bi računari komunicirali u mreži, moraju se precizno pridržavati određenih protokola, odnosno redosleda koraka potrebnih da bi komunikacija bila uspešna.**

### HTTP

HTTP je protokol koji web serveri koriste za komunikaciju sa web pregledačima.

HTTP URL adrese imaju standardni oblik:

```
http://www.example.com/home/foo/
```

HTTP adrese su najčešći tip URL adresa na vebu. 

### FTP

FTP URL adrese se koriste da ukažu na fajlove na FTP serverima. FTP URL adrese imaju standardni oblik:

```
ftp://ftp.foo.com/home/foo
```

Pregledači koriste FTP za preuzimanje datoteke.

### Mailto

Mailto URL se koristi za slanje elektronske pošte. Kada se izabere link koji sadrži `mailto` URL, pregledač koji podržava takve adrese će započeti novu poruku u podrazumevanoj aplikaciji e-pošte. U zavisnosti od toga kako su konfigurisani pregledač i klijent e-pošte, `mailto` adrese možda neće funkcionisati.

Mailto URL adresa se razlikuje od URL oblika. Ona izgleda ovako:

```
mailto:info@skolakoda.github.io
```

Možemo dodati temu poruke u URL adresu na sledeći način:

```
mailto:info@skolakoda.github.io?subject=Zdravo Svete!
```

Možemo definisati i adrese Cc i Bcc na sledeći način:

```
mailto:info@skolakoda.github.io?cc=mejl@gmail.com
```

Neki pregledači podržavaju i stavljanje teksta poruke u link sa upitom `body=`, pa možemo kombinovati sve zajedno na sledeći način:

```
mailto:info@skolakoda.github.io?subject=Zdravo Svete!&cc=mejl@gmail.com&body=Tekst poruke.
```

### File

File URL adrese ukazuju na datoteke na lokalnom disku. Adrese lokalnih fajlova imaju tri kose crte umesto dve (jer fali naziv domena):

```
file:///dir1/dir2/file
```

Fajl adrese možemo koristiti samo kada testiramo stranice lokalno. Ako koristimo `file` adresu za linkove na web stranicama, a neko drugi pokuša da prati te linkove, neće uspeti, jer nema iste fajlova na svom hard disku.

Ako želimo povežemo fajlove u istom direktorijumu, koristimo relativne putanje, umesto `file` adrese.
