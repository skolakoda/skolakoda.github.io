Zapravo, postoji dosta CSS koda koji se primenjuje na dokumente bez definisanih
stilova (kao što je onaj koji je prikazan na slici 1-33), a sav taj kod je definisan u okviru samog
web čitača koji koristite. Podrazumevana veličina i font kojim se prikazuju zaglavlja, separacija
između elemenata i linija teksta, navođenja u listama stavki, pa čak i različita vrsta polja defi-
nišu se na osnovu podrazumevanih stilova.
Naravno, podrazumevani stilovi se razlikuju od čitača do čitača. To nije problem vezan za web
čitače, zato što ne postoji specifikacija koja bi definisala način na koji inicijalno treba da se
primenjuju stilovi na dokumente. Na osnovu toga, najveći broj web čitača simulira na najbolji
mogući način ono što je činio Mosaic sa dokumentima. Da, Mosaic –to je Netscape 1.0 poku-
šao da simulira, to je pokušao da simulira IE3, i tako redom do današnjih dana. Ukoliko detalj-
nije proučite podrazumevane stilove, utvrdićete da je većina stvari, zapravo, potpuna kopija
onoga što je definisano u prvim beta verzijama Mosaic čitača, i to piksel po piksel.
Kao odgovor na to, određeni korisnici su razvili reset stilove (videti sliku 1-34), čiji je cilj da
smanje brojne nekonzistentnosti eksplicitnim definisanjem vrednosti standardnih svojstava.
Najjednostavniji primer za to je:

```css
* {margin: 0; padding: 0;}
```
