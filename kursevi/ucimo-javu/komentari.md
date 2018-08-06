---
title: Komentari u programu
layout: lekcija-java
permalink: /java-komentari
---

**Programi se mnogo češće čitaju, nego što se pišu. U toku pisanja programa treba da dodajete komentare, koji predstavljaju tekst sa objašnjenjima šta program radi.**

Drugi programeri će čitati i pokušavati da razumeju vaš kod. Budite predusretljivi i učinite im posao jednostavnijim. Predlažemo sledeću jednostavnu tehniku: pišite prvo komentare, pa tek onda kod. Kada napišete program, on će već sadržati komentare. Možete da pišete komentare bilo gde u kodu – pre ili u telu klase, ili u telu metoda.

U Java programskom jeziku postoje tri tipa komentara:

- blok komentari
- komentari u liniji
- komentari dokumentacije

## Blok komentari

Blok komentari sadrže više od jedne linije teksta, koje se pišu izmedu simbola `/*` i `*/`. Na primer:

```java
/* 
  This method will calculate the cost of shipping, 
  handling, and all applicable taxes 
*/
```

Kompajler ignoriše tekst u komentarima, tako da možete da pišete šta god želite.

## Komentari u liniji

Ukoliko želite da pišete kratak komentar, koji se uklapa u jednu liniju, počnite ovu liniju sa dve kose crte (`//`). Možete da postavite komentare iza dve kose crte i na kraju linije:

```java
// Calculate the cost of shipping
int cost = calcShippingCost(); // results depends on country
```

## Komentari dokumentacije

Određeni komentari pocinju sa `/**` i završavaju se sa `*/`. Njih koristi specijalni alat `javadoc` prilikom automatskog ekstrahovanja teksta iz komentara i kreiranja dokumentacije programa. Javadoc alat omogućava i korišcenje specijalne notacije (na primer, `@param`, `@return`, `@see`) koja omogućava kreiranje dokumentacije programa profesionalnog izgleda.

```java
/**
 * Registers the text to display in a tool tip. The text 
 * displays when the cursor lingers over the component.
 *
 * @param text  the string to display. If the text is null, 
 *              the tool tip is turned off for this component.
 *
 * @author Daman Daman
 */
public void setToolTipText(String text) {
  
}
```

{:.uokvireno.ideja}
Da biste saznali šta `javadoc` može da generiše, procitajte na adresi [http://goo.gl/imDMU](http://goo.gl/imDMU) tehničko uputstvo kompanije Oracle o pisanju `javadoc` komentara.


Izvor: Yakov Fain, *Java 8 programiranje* (promo lekcija), Kompjuter biblioteka, Beograd, 2015.
