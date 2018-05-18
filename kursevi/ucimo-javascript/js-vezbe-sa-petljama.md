---
title: Vežbe sa petljama u Javascriptu
layout: lekcija-js
permalink: /js-vezbe-sa-petljama
---

### Kvadrati brojeva

Napisati program kojim se štampaju brojevi od 1 do 10 i njihovi kvadrati.

{:.ulaz.resenje}
```js
for (i = 1; i <= 10; i++)
  console.log(i, i * i)
```

### Štampanje trougla

Napisati program kojim se štampa sledeći trougao:

```
*
**
***
****
*****
******
*******
********
*********
**********
```

{:.ulaz.resenje}
```js
for(i=1; i<=10; i++){
  let red = ''
  for(j=1; j <=i; j++)
    red += "*"
  console.log(red)
}
```

### Srednja vrednost niza

Napisati program kojim se izračunava i štampa srednja vrednost sledećeg niza od deset brojeva: 1, 4, 9, ..., 81, 100 .

{:.ulaz.resenje}
```js
var suma = 0;

for(i=1; i<=10; i++)
   suma = suma + i*i;

srednja_vrednost = suma / 10;
console.log(srednja_vrednost);
```

