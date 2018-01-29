---
title: Kriptografske heš funkcije
layout: lekcija-blockchain
permalink: /kriptografske-hash-funkcije
---

*Soft skill*-ovi su mrtvi, pripremi se na vreme za svet u kome caruje matematika. Doba disidenata pisaca, novinara, pesnika i glumaca je prošlo. Svako može da shvati, treba samo malo napora i želje. Sama srž ove tehnologije leži u zakonima brojeva. Koliko je koren iz 4? Dva? “Sedi jedan”, rekao bi na to srednjoškolski profesor. Tačan odgovor je +/-2, jer parna stepena funkcija gubi informaciju o znaku.

Koren je čudna funkcija. Problem kvadriranja dvojke ne možeš tek tako da rešiš unazad (inverzno). Možda sam ja krenuo od -2? Moraš da znaš neki dodatni uslov da bi izabrao pravu granu korena (pozitivnu ili negativnu) ili da probaš obe. Na kompjuteru ne bi mnogo potrajalo da zaista probaš obe grane. Ali! Postoji čitav jedan skup algoritama koji se zovu “kriptografske heš funkcije” (H). Pođimo od apsurdno velikog broja P (na primer od 55 cifara), stavimo ga u takav algoritam H i neka je rešenje broj J = H(P). Ovi algoritmi imaju čudesnu osobinu ireverzibilnosti. To znači da, imao li čak i najjači mogući sekvencijalni kompjuter, ne najjači postojeći, nego najjači koji termodinamika dozvoljava, u nameri da rešiš ovaj problem unazad, znajući J, a želeći da otkriješ P od koga smo krenuli ( P = H^-1(J) ) trebalo bi ti otprilike onoliko vremena koliko je Svemiru ostalo do njegove konačne termodinamičke smrti.

Ovaj algoritam u Bitkoinu ima dve ključne uloge:

- On čuva tvoju imovinu od drugih, tako da svako može da pristupi toj računovodstvenoj knjizi (zamisli da banka dozvoli da svako pristupi njenoj bazi podataka) a da opet ne može da ti je uzme. Zato Bitkoinu nisu potrebni adresa, zaposleni, direktori, obezbeđenje i revizori.

- On čuva tuđu imovinu od tebe jer te sprečava da falsifikuješ transakciju i probaš dva puta da potrošiš isti novčić, kroz genijalno Satošijevo otkriće dokaza o radu (*proof-of-work* ili Nakamoto konsenzus). Novčana mreža je primer tzv. Vizantijske mreže, u kojoj se učesnici ne smatraju kooperantima nego suparnicima. Nakamoto konsenzus je rešenje kako ta mreža dolazi do zaključka šta je istina, kolika je nečija imovina, bez da se ikome predaje poverenje da za nas vodi tu knjigu evidencije imovine!

Sve do bloka postanja (*genesis block*) 3. januara 2009. morali smo da imamo računovođu (banka) kome predajemo poverenje da za nas vodi računovodstvenu knjigu novca. Ako on kaže prodavcu da ti imaš dinar sa kojim kupuješ robu, prodavac će mu verovati i robu će ti dati. Sada umesto poverenja imamo zakone brojeva. Bitkoin je jedna računovodstvena knjiga za celu planetu, agnostična na državne regulative i konačno, hvala Bogu, ne zahteva računovođu.


Izvor: Danilo Backović, *[Sve što bi trebalo da znate o Bitkoinu ](https://medium.com/@dbacko/bitkoin-banke-i-suverenost-individue-9aeaa7177a05)*, Medium, 2017.
