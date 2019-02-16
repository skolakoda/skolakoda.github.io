---
title: "<code>history</code> objekat"
layout: lekcija-js
permalink: /window-history
---

**Globalni `history` objekat omogućava ograničeni pristup prethodno posećenim stranama u istom tabu pregledača.**

Na primer, možemo da vidimo koliko stranica je do sada posećeno:

{:.izraz}
```js
window.history.length
```

Ne možemo da vidimo stvarne URL adrese iz istorije, jer nisu javno dostupne:

{:.izraz}
```
window.history[0]
```

## Kretanje napred/nazad

Možemo da se krećemo napred i nazad kroz istoriju, isto kao kada bismo koristili dugmad pregledača:

```
> history.forward();
> history.back();
```

Možemo i da preskačemo stranice pomoću `history.go()`. Npr, da bismo se vratili dve stranice unazad:

```
> history.go(-2);
```

## Promena adrese bez osvežavanja

`HTML5 History API` omogućava da promenimo URL bez ponovnog učitavanja stranice. Ovo je zgodno za dinamičke stranice, jer nam omogućava da zabeležimo određene URL adrese, koje prikazuju stanje apli­kacije. 

Da biste isprobali `History API`, posetite bilo koju stranicu i napišite sledeće linije koda u konzolu:

```
> history.pushState({a: 1}, "", "hello")
> history.pushState({b: 2}, "", "hello-you-too")
> history.state
```

Primetićete da se URL adresa menja, ali stranica je ista. Sada eksperimentišite sa dugmadima za kretanje napred/nazad u pregledaču i ponovo proverite stanje `history.state` objekta.
