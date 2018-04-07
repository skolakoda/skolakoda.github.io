---
title: Fasada (projektni obrazac)
layout: lekcija-razvoj
permalink: /fasada
image: https://upload.wikimedia.org/wikipedia/en/5/57/Example_of_Facade_design_pattern_in_UML.png
---

Erich Gamma je sistematizovao najpoznatije projektne obrasce zajedno sa jos trojicom programera, a ova grupa je poznatija pod nazivom “Gang of Four” ili kako ja volim da prevedem na srpski “Velika Četvorka” (Erich Gamma, Richard Helm, Ralph Johnson, John Vlissides). U pitanju su zasigurno najčešće korišćeni projektni obrasci koji nam pomažu prilikom rešavanja čestih i standardnih problema sa kojima se često susrećemo.

Prvi i najjednostavniji (po meni) je *Facade design pattern*. U jednostavnom prevodu u pitanju je fasada (kao fasada kuće). Simbolično fasada je ono što posmatrač vidi spolja. Fasada skriva unutrašnjost kuće. Arhitekta koristi fasadu da prikaže posmatraču ono što on želi, odnosno ono što posmatrač treba da vidi.

Analogno tome *Facade* projektni obrazac skriva realizaciju funkcionalnosti (klasa i/ili interfejsa) čije pojedinačne realizacije klijent ne mora da vidi i da koristi. Dakle, za klijenta kreiramo jednu klasu, koju će on da vidi i čije će metode moći da koristi. Ove metode su kreirane kombinovanjem jedne ili više metoda “skrivenih” klasa. Dakle, prema korisniku prilagođavamo nove metode (fasada kuće), koristeći postojeće (unutrašnjost kuće). Evo kako to izgleda u UML notaciji:

![]({{page.image}})

Klijenti pristupaju klasi `Facade`, tj. njenoj metodi `doSomething()`. Ova metoda realizuje novu funkcionalnost za potrebe klijenata, pri tom koristeći tri klase (iz tri paketa) i njihove metode.

## Primer

A evo i jednog primera JAVA realizacije:

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
       System.out.println("Date: " + d);  
       d.addDays(20);  
       System.out.println("20 days after: " + d);
   }
}
```

Klijent poziva `FacadePattern` pri čemu želi da dobije kao odgovor datum posle 20 dana od određenog datuma. Njega ne interesuje realizacija, ali zato `FacadePattern` poziva implementaciju klase `UserfriendlyDate` koja implementira razne metode, između ostalih i dodavanje 20 dana na neki datum.

## Kada koristiti?

Kako prepoznati u stvarnosti potrebu za korišćenjem ovog obrasca?

Evo nekih slučajeva koje ja vidim kao priliku za korišćenje ovog *design patterna*:

1. Imamo gotove funkcionalnosti (interfejse, klase, metode) koje ne smemo da “kvarimo”, tj. menjamo, ali sa njima (ili uz malu dopunu drugim klasama) možemo da realizujemo potrebne funkcionalnosti za klijenta. Onda je svakako bolje rešenje napraviti *Facade* klasu prilagođenu klijentu, bez diranja postojećih, već razvijenih funkcionalnosti.

2. Imamo funkcionalnosti koje odgovaraju klijentu, ali iz nekog razloga ne želimo da “skrivene” klase “otvorimo” za klijenta (ili bar jedan deo metoda).

3. Za “skrivene” metode imamo opis, ali ne i *source* i ne možemo ih menjati (npr. u slučaju *third-party* komponenti), one nam ne odgovaraju u potpunosti, pa moramo da ih posredno modifikujemo koristeći fasadni obrazac.


Izvor: *[Sensei’s thoughts](https://senseithoughts.wordpress.com/)*
