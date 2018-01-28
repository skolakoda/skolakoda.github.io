---
title: "Otpornost na vizantijsku manu (<i>Byzantine Fault Tolerance</i>)"
layout: lekcija-blockchain
permalink: /byzantine-fault-tolerance
---

Praktični *Practical Byzantine Fault Tolerance* je nazastupljeniji metod postizanja konsenzusa u tzv. industrijskim odnosno privatnim blockchain sistemima i jedno od mogućih rešenja problema vizantijskih generala.

Ovim metodom svaki učesnik mreže održava svoje interno stanje. Kada dobije poruku od “glasnika” on koristi informacije iz poruke uporedo sa svojim internim stanjem i izvršava operaciju. Izvršena operacija omogućava učesniku da donese zaključak o primljenoj poruci. Nakon toga on deli svoju odluku sa ostalim učesnicima sistema i konsenzus je postignut na osnovu svih odluka koje su učesnici poslali.

Upotrebom ovog metoda se mnogo lakše postiže konsenzus, ali nauštrb anonimnosti. To je razlog zašto ga koriste blockchain sistemi bazirani na članstvu — *permissioned*. Neki od primera su *Hyperledger* (Linuxova inicijativa za razvoj industrijskih blokchain sistema sa velikim brojem *Fortune* 500 kompanija koje su članovi) i Ripple (privatni i zatvoreni blockchain sistem za finansijske transakcije koji trenutno implementiraju mnoge banke).


Izvor: Nikola Milinković, *[Uvod u Blockchain](https://startit.rs/uvod-u-blockchain-kako-se-postize-konsenzus-u-decentralizovanom-sistemu/)*, Startit, 2017.
