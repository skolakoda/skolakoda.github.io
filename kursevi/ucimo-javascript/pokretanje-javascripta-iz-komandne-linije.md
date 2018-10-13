---
title: Pokretanje Javascripta iz komandne linije
layout: lekcija-js
permalink: /pokretanje-javascripta-iz-komandne-linije
---

Pored klasičnog pokretanja Javascripta u pregledaču, takođe je moguće pokrenuti Javascript iz komandne linije. Za to je potrebno instalirati izvršno okruženje [Node.js](https://nodejs.org/en/), koje to čini mogućim.

Nakon što ste instalirali Node.js, otvorite komandnu liniju vašeg operativnog sistema i navigirajte do foldera u kome se nalazi js fajl koji želite da izvršite. Nakon toga, js fajl (npr. `main.js`) iz komandne linije pokrećete na sledeći način:

```
node main.js
```

Kada pokrećete js iz komandne linije, on ne može komunicirati sa browser-om, jer se nalazi u potpuno drugom okruženju, ali može čitati fajlove sa hard diska i raditi mnoge stvari koje u pregledaču ne može.
