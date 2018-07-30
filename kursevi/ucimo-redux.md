---
layout: kurs
title: Učimo Redux
github: ucimo-redux
---

![](https://cdn-images-1.medium.com/max/919/1*EdiFUfbTNmk_IxFDNqokqg.png)

## Učimo Redux
# Predvidljivi čuvar stanja aplikacije

### Stanje (`state`)

- Jedno stablo stanja za celu aplikaciju
- Stanje se može samo čitati
- UI uvek oslikava stanje aplikacije

### Akcije (`actions`)

- Akcija samo opisuje željenu promenu
- Kad hoćemo promenu stanja, emitujemo `akciju`, tj. šaljemo je skladištu

### Reduktor (`reducer`)

- Reduktor je čista funkcija koja prima stanje i akciju, a vraća novo stanje
- Reduktor je jedan i mora pokrivati sve moguće akcije

### Skladište (`store`)

- Skladište prima reduktor funkciju, pomoću koje menja stanje
- Stanje se čuva u skladištu, a dobija se metodom `getState()`
- Skladište ima `dispatch` metod, koji inicira promenu stanja sa opisom promene
- Skladište prijavljuje (`subscribe`) niz povratnih funkcija koje okida nakon svake promene stanja (render i sl)
