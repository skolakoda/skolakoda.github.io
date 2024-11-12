---
title: Fasada (projektni obrazac)
layout: lekcija-razvoj
permalink: /obrazac-fasada
redirect_from: /fasada
image: /images/koncepti/oop/fasada.gif
---

![]({{page.image}})

**Fasada (*facade pattern*) služi za pojednostavljivanje složenog sistema tako što pruža jednostavan interfejs ka složenoj pozadini. Koristi se za organizaciju koda i olakšavanje korisničkog pristupa sistemu.**

U stvarnom životu, fasada je ono što posmatrač vidi spolja. Fasada skriva unutrašnjost kuće.

Analogno tome, fasadni obrazac skriva klase čije pojedinačne realizacije klijent ne mora da vidi. Za klijenta kreiramo jednu klasu koju vidi i čije metode može koristiti. Metode fasadne klase su kreirane kombinovanjem metoda sakrivenih klasa.

## Primer

Sledeći kod prikazuje implementaciju fasadnog obrasca u Javi, gde klasa `UserfriendlyDate` funkcioniše kao fasada koja pojednostavljuje rad sa datumima:

```java
import java.text.*;
import java.util.*;

/** "Facade" */
class UserfriendlyDate
{
   Calendar cal = Calendar.getInstance();
   SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");

   public UserfriendlyDate(String isodate_ymd) throws ParseException {
       Date date = sdf.parse(isodate_ymd);
       cal.setTime(date);
   }

   public void addDays(int days) {
       cal.add(Calendar.DAY_OF_MONTH, days);
   }

   public String toString() {
       return sdf.format(cal.getTime());
   }
}

/** "Client" */
class FacadePattern
{
   public static void main(String[] args) throws ParseException
   {
       UserfriendlyDate d = new UserfriendlyDate("1980-08-20");  
       System.out.println("datum: " + d);           // datum: 1980-08-20
       d.addDays(20);  
       System.out.println("nakon 20 dana: " + d);   // nakon 20 dana: 1980-09-09
   }
}
```

Ova implementacija fasade omogućava da radimo sa datumima kroz jednostavan API, dok `Calendar` i `SimpleDateFormat` klase ostaju skrivene od korisnika.

## Kada koristiti?

Evo nekih slučajeva koji mogu biti prilika za korišćenje fasadnog obrasca:

- Imamo gotove funkcionalnosti (interfejse, klase, metode) koje ne smemo da menjamo, ali sa njima (ili uz malu dopunu) možemo realizovati potrebne funkcionalnosti za klijenta. 
- Imamo funkcionalnosti koje odgovaraju klijentu, ali iz nekog razloga ne želimo da otvorimo skrivene klase.
- Neke metode ne možemo menjati (npr. u slučaju *third-party* komponenti), one nam ne odgovaraju u potpunosti, pa moramo da ih posredno modifikujemo koristeći fasadni obrazac.

## Literatura
- Sensei’s thoughts, *[Velika četvorka (Design patterns) – Facade](https://senseithoughts.wordpress.com/2007/05/29/velika-cetvorka-design-patterns-facade/)*
