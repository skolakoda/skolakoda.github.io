# Kontrola pristupa članovima klase

Članovi (podaci ili metode) klase koji se nalaze ispred specifikacije private zaštićeni su od pristupa spolja (oni su sakriveni, odnosno kapsulirani). To su privatni članovi klase i njima mogu pristupati samo metode iste klase. Da bi se deo klase učinio javnim, tj. da bi bio vidljiv kodu izvan klase, navodi se specifikacija public. Članovi iza specifikacije public dostupni su izvan klase i nazivaju se javnim članovima klase. Kljućne reči public i private zovu se specifikatori pristupa (access specifiers). 

Privatnim podacima klase obično se pristupa preko javnih metoda. 

U C++, ako se ne navede specifikator pristupa, svi članovi klase su podrazumevano privatni. Ipak, dobra praksa nalaže da se i pored toga specifikator private eksplicitno navede. Takođe, po pravilu se u deklaraciji klase prvo navode privatni, a tek onda javni članovi, mada ne postoji pravilo koje to zahteva.

Javnom podatku članu klase može se pristupati iz drugih delova programa. Sintaksa za pristup javnom podatku članu je ista kao sintaksa za pozivanje metode: ime objekta, tačka, ime podatka člana.

Nasleđivanjem ne mogu da se naruše ograničenja pristupa članovima osnovne klase koja su već definisana. Tako, iako izvedena klasa nasleđuje sve članove iz osnovne, ona ne može da pristupi članovima osnovne klase koji su deklarisani kao privatni. Rešenje ovog ograničenja nije u tome da se podaci članovi učine javnim, jer tako osim izvedenoj klasi postaju dostupni i drugom kôdu.

Postoje dva rešenja za ovaj problem: prvo je da se koristi specifikator pristupa `protected` , a drugo da se koriste javne funkcije koje će omogućiti pristup privatnim podacima članovima. Zaštićeni član osnovne klase je isti kao privatan, uz jedan važan izuzetak: mogu da mu pristupe izvedene klase.


Izvor: Irina Branović, *Objektno orijentisano programiranje: C++*, Beograd, 2011.