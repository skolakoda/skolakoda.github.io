---
title: Uvod u Blockchain
layout: lekcija-blockchain
permalink: /blockchain-uvod
---

![](https://media.licdn.com/mpr/mpr/AAIABADGAAoAAQAAAAAAAAstAAAAJDYzMmY5NTNhLTE1ODctNDA2MC04OGEzLTU5NzM0OGZiZjdiMA.jpg)

**Blockchain daleko prevazilazi tehnologiju na kojoj su zasnovane kriptovalute.**

Blockchain tehnologija omogućava da se digitalna informacija distribuira između svih
čvorova koji sudjeluju u sustavu. Tako svaki čvor održava svoju kopiju svake relevantne
informacije i nema potrebe za središnjim autoritetom koji kontrolira informacije.
Kontrola je također distribuirana. Pomoću mehanizama za validaciju svaki čvor
može biti siguran da je informacija zapisana na blockchain točna. Ova tehnologija
nastala je za potrebe digitalne valute Bitcoin, koja je predstavljena 2008. godine a s
radom je započela naredne 2009. godine.

U suvremenom, informacijskom društvu informacije imaju veliku važnost. Količina (povjerljivih) informacija koju razmjenjujemo narasla je značajno, no način na
koji se one razmjenjuju i pohranjuju nije se mnogo promijenio od 90-ih godina prošlog
stoljeća. Ako se radi o informacijama čiji integritet želimo zaštiti tada od sustava za
pohranu traži se da ima sljedeće karakteristike:

- Informacije se kreću kroz sigurnu mrežu.
- Informacije se ne smiju modificirati tokom ni nakon zapisivanja.
- Pravo korištenja digitalnih ili materijalnih dobara vezanih za informaciju ima
samo ovlašteni korisnik.
- Brzina dijeljenja informacija mora biti što veća moguća.
- Pregled informacija se može jednostavno izvršiti od strane bilo kojeg zainteresiranog
korisnika.

Blockchain pruža maksimalnu zaštitu integriteta zapisa korištenjem kriptografskih
metoda. Zapisi su distribuirani, svaki čvor u sustavu posjeduje ekvivalentne podatke
što je postignuto algoritmima za postizanje konsenzusa, od kojih su najpoznatiji
*proof-of-work* i *proof-of-stake* algoritam. Zapise nije moguće mijenjati ili ih
ometati. Blockchain je sastavljen od blokova međusobno povezanih u lanac. Svaki
blok sadrži niz zapisa. Blokovi se povezuju algoritmom koji koristi kriptografsku hash funkciju. Veza između blokova se ne može krivotvoriti osim ako napadač ima
ogromne računalne resurse na raspolaganju.

## Lokalna baza vs. lanac blokova

U dosadašnjem poslovanju svaka zainteresirana strana u postupku održava lokalne
baze podataka s različitim informacijama, bilo da se radi o centraliziranoj ustanovi
poput banke ili nekoj organizaciji u sustavu poslovanja. Podaci se dijele između
stranaka samo kada ima potrebe za tim. Integritet podataka u lokalnim bazama organizacije
pod svaku cijenu žele zaštititi, no napadi na takve digitalne podatke sve
su češći. Napad na izoliranu lokalnu bazu podataka može imati katastrofalne posljedice.
Tada postoji mogućnost rekreiranja baze iz backupa pri čemu dolazi do gubitka
dijela informacija. Nepotpunost podataka može uzrokovati i značajne financijske gubitke.
Ako napad nije odmah otkriven u budućnosti podaci neće biti konzistentni s
podacima partnera u poslovanju. To će narušiti međusobno povjerenje, a otklanjanje
problema uzrokovanih napadom će biti dug i mukotrpan proces. Blockchain tehnologija
nam omogućava da podaci postanu korisniji ne samo jednoj organizaciji, nego
svim partnerima u mreži. S druge strane, podacima kao i ostalim procesima između
partnera se upravlja na kontroliran način uz visoku razinu sigurnosti i povjerenja.


Izvor: Domina Hozjan, *Blockchain (diplomski rad)*, Prirodoslovno–matematički fakultet, Zagreb, 2017.
