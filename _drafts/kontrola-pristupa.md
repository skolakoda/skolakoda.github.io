# Kontrola pristupa članovima klase

Članovi (podaci ili metode) klase koji se nalaze ispred specifikacije private: za-
štićeni su od pristupa spolja (oni su sakriveni, odnosno kapsulirani). To su privatni
članovi klase i njima mogu pristupati samo funkcije članice iste klase. Da bi se deo
klase učinio javnim, tj. da bi bio vidljiv u kôdu izvan klase, navodi se specifikacija
public: Članovi iza specifikacije public: dostupni su izvan klase i nazivaju se jav-
nim članovima klase.
Kljućne reči public i private zovu se specifikatori pristupa (access specifiers).
Iza njih se u deklaraciji klase uvek navodi dvotačka.
Privatnim članovima klase obično se pristupa preko javnih funkcija članica. Kada
funkcija članica koristi privatan podatak član svoje klase, pristupa mu direktno, bez
korišćenja operatora tačka. Funkcija članica se uvek poziva za neki objekat svoje
klase.
Ako se ne navede specifikator pristupa, svi članovi klase su podrazumevano pri-
vatni. Ipak, dobar stil programiranja nalaže da se i pored toga specifikator private
navede za eksplicitno deklarisanje privatnih promenljivih. Takod̄e, po pravilu se u
deklaraciji klase prvo navode privatni, a tek onda javni članovi, mada ne postoji pra-
vilo koje to zahteva.
Javnom podatku članu klase može se pristupati iz drugih delova programa. Sin-
taksa za pristup javnom podatku članu je ista kao sintaksa za pozivanje funkcije čla-
nice: ime objekta, tačka, ime podatka člana.

Nasled̄ivanjem ne mogu
da se naruše ograničenja pristupa članovima osnovne klase koja su već definisana.
Tako, iako izvedena klasa nasled̄uje sve članove iz osnovne, ona ne može da pristupi
članovima osnovne klase koji su deklarisani kao privatni. Rešenje ovog ograničenja nije u tome da se podaci članovi učine javnim kao u
prethodnom primeru, jer tako osim izvedenoj klasi postaju dostupni i drugom kôdu.
Postoje dva rešenja za ovaj problem: prvo je da se koristi specifikator pristupa
`protected` , a drugo da se koriste javne funkcije koje će omogućiti pristup privatnim
podacima članovima.

Zaštićeni član osnovne klase je isti kao privatan, uz jedan važan izuzetak: mogu da mu pristupe izvedene klase.

Izvor: US - Objektno orijentisano programiranje - C++
