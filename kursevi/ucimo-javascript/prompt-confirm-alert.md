---
title: "Metode <code>prompt</code>, <code>confirm</code> i <code>alert</code>"
layout: lekcija-js
permalink: /prompt-confirm-alert
---

**Funkcije `prompt`, `confirm` i `alert` služe za osnovnu komunikaciju sa korisnikom. Jednostavne su za korišćenje, kada želimo da nešto isprobamo, ali ne preporučuju se u produciji.**

Ove globalne funkcije su metode `window` objekta, pa je `alert` i `window.alert` isto. One nisu deo ECMAScript specifikacije, već objektnog modela pregledača (BOM-a). 

- `alert('Zdravo!')` - prikazuje poruku posetiocu.
- `prompt('Unesite svoje ime')` - prikuplja tekstualni unos.
- `confirm('Da li prihvatate uslove?')` - omogućava opciju `OK` i `Cancel`.

## Metod `confirm()` za potvrdu

Metod `confirm()` vraća Bulovu vrednost kao odgovor na postavljeno pitanje. Na primer:

{:.ulaz}
```js
const odgovor = confirm('Da li prihvatate uslove?')

console.log('Odgovor je: ' + odgovor)
```

Primetimo sledeće:
- Konzola neće ispisati ništa dok ne zatvorimo poruku, što znači da se izvršenje JavaScript koda „zamrzava“ dok se čeka odgovor korisnika.
- Ako korisnik klikne `OK`, vraća se `true`. Ako klikne `Cancel`, vraća se `false`.

Metod `confirm()` je koristan za potvrđivanje radnji korisnika, na primer:

```js
if (confirm('Da li sigurno želite da obrišete ovo?')) {
  // brisanje
} else {
  // obustava
}
```

## Metod `prompt()` za korisnički unos

Metod `prompt` prikazuje posetiocu dijalog za unos teksta na sledeći način:

{:.ulaz}
```js
const ime = prompt('Unesite svoje ime')

console.log('Zdravo posetiče ' + ime)
```

Vrednost promenljive `ime` može biti jedna od sledećih:
- `null` - ako se klikne `Cancel`
- `string` - ako se unese nešto, a zatim klikne `OK` ili `Enter`.
- `""` (prazan string) - ako se klikne `OK` sa praznim poljem.
