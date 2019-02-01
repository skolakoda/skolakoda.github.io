---
title: "Vežba: alijas za dodavanje dogadjaja"
layout: lekcija-napredni-js
permalink: /vezba-alijas-za-dodavanje-dogadjaja
---

Vežba: napraviti alias pod nazivom "`on`" za ugrađenu metodu `addEventListener`, nakon čega će biti moguće dodavati događaje na sledeći način:

```js
element.on('click', povratnaFunkcija)
```

Saveti:
- saznati kom ugrađenom objektu pripada `addEventListener` metod
- dodati alijas na njegov prototip

{:.ulaz.resenje}
```js
EventTarget.prototype.on = EventTarget.prototype.addEvent
```