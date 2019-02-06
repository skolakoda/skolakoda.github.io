---
title: Ternarni operator
layout: lekcija-js
permalink: /ternarni-operator
---

**Ternarni operator nam može poslužiti kao skraćeni način pisanja uslova.** Operator ` ? : ` se naziva ternarni operator, zato što prima tri operanda.

Neke uslove je moguće zameniti ternarnim operatorom. Na primer:

{:.ulaz}
```js
let poruka = ''

if (4 < 5) 
    poruka = 'Zdravo' 
else
    poruka = 'Dovidjenja'

console.log(poruka)
```

Prethodnu logiku možemo napisati na sledeći način:

{:.ulaz}
```js
const poruka = 4 < 5 ? 'Zdravo' : 'Dovidjenja'

console.log(poruka)
```

Ternarni operator nije samo skraćeni način pisanja uslova, već postoji suštinska razlika - ternarni operator je **izraz**, a `if` je **naredba**. Izraze možemo koristiti negde gde naredbe ne možemo, na primer kada evaluiramo vrednost unutar višelinijskih struna, ili unutar JSX sintakse u React-u. Za detalje vidi [narebe vs. izrazi](/naredbe-i-izrazi).

Kao što vidimo, favorizovanje izraza umesto naredbi vodi nas upotrebi nepromenljivih umesto promenljivih u programiranju.
