---
title: Promenljive i nepromenljive u Javi
layout: lekcija-java
permalink: /java-promenljive-i-nepromenljive
---

![](/images/koncepti/varijable/varijabla.png)

**Odredene vrednosti mogu se menjati u toku izvršavanja programa (promenljive), a neke druge ostaju iste (konstante).**

## Promenljive

Java je statički tipizirani jezik: promenljiva prvo mora da bude deklarisana (da joj se dodeli naziv i tip podataka), pa se tek onda može dodeliti vrednost, u vreme deklarisanja, ili kasnije, u nekom od metoda klase.

### Domet (opseg) promenljivih

Ukoliko deklarišete promenljivu unutar metoda ili bloka koda omeđenog vitičastim zagradama, ona je lokalnog dometa. To znači da se može koristiti samo u bloku u kome je deklarisana. Na primer, lokalna promenljiva deklarisana unutar `for` petlje ne može se koristiti izvan `for` petlje, čak i u istom metodu.

Kada metod okonča izvršavanje, sve lokalne promenljive osnovnih tipova automatski se uklanjaju iz stek memorije. Ukoliko je promenljiva ukazivala na instancu nekog objekta, *Garbage Collector* (GC) uklanja odgovarajuću instancu objekta iz hip memorije, ali se to ne dešava odmah. GC periodično pristupa hip memoriji i uklanja sve objekte koji ne referenciraju promenljive.

Ukoliko nekoj promenljivoj mora da se pristupa iz više metoda klase, deklariše se na nivou klase. Ove promenljive postoje sve dok postoji instanca klase u memoriji. Njih mogu da dele i koriste više puta metodi klase, a mogu čak biti vidljive i iz eksternih klasa. Postoje određene razlike u prosleđivanju primitivnih promenljivih i onih koje ukazuju na instance objekta.

{:.uokvireno}
Promenljive instance skladište različite vrednosti za svaki objekat, odnosno instancu. Ukoliko je promenljiva deklarisana korišcenjem `static` kvalifikatora, deliće je sve instance odredene klase.

## Konstante

Da bi bile čuvane vrednosti koje se nikada ne menjaju, neophodno je deklarisati finalnu promenljivu (ili konstantu); samo dodate ključnu reč `final` u deklaracionu liniju, npr:

```java
final String MANUFACTURER = "J.B. Limited";
```

{:.uokvireno.ideja}
Java programeri nazive `final` promenljivih pišu velikim slovima. Ukoliko se pitate kako se programeri dogovaraju o konvencijama za davanje naziva, proverite vodiče koji opisuju kodne standarde.

Deklarišite promenljivu `final` i odmah je inicijalizujte, kao što je prethodno prikazano. Vrednost konstante se može dodeliti samo jednom. Npr. pošto kreiramo instancu automobila, njegov proizvođač je poznat i ne može se menjati tokom "životnog veka" objekta.


Izvor: Yakov Fain, *Java 8 programiranje* (promo lekcija), Kompjuter biblioteka, Beograd, 2015.
