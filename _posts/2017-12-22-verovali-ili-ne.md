---
title: Verovali ili ne
layout: post
tags: [softver, inzenjerstvo, zanimljivosti]
---

<style>
p::first-letter {
    font-size: 150%;
    color: #911146;
}
</style>

![](images/fore/bitovni-operatori.svg)

Grupa Standish je 1994. godine obavila istraživanje u vezi sa ishodima više od 8000 softverskih projekata u preko 350 softverskih kompanija. Došli su do saznanja da je oko 35% projekata otkazano pre nego što je završeno, a da je samo 9% projekata isporučeno na vreme i u okviru planiranog budžeta.

Boehm i Papaccio su 1988. godine sproveli istraživanje koje je pokazalo da otkrivanje i otklanjanje grešaka u zahtevima u kasnijim fazama projekta ima vrlo visoku cenu. Naime, otklanjanje iste greške u fazi projektovanja sistema košta pet puta više nego u fazi definisanja zahteva, u fazi pisanja programa deset puta više, a ako je greška otkrivena nakon isporuke softvera čak dve stotine puta više.

![](images/fore/panika.jpg)

Easterbrook i Nuseibeh su 1996. godine dokazivali da je često bolje tolerisati nedoslednosti koje se pojave prilikom definisanja zahteva, a u nekim slučajevima ih čak i podsticati. Oni smatraju da je u ranoj fazi procesa definisanja zahteva besmisleno ulagati veliki trud u rezrešenje nadoslednosti, jer to može biti težak, skup, a ponekad i nemoguć posao. Razlog za ovakvo mišljenje je u tome što se tokom projekta kod svih učesnika akumulira znanje iz date oblasti, čime se poboljšava razumevanje problema.

U Los Anđelesu je 14. septembra 2004. godine više od četiristo aviona u blizini aerodroma istovremeno izgubilo vezu sa kontrolom leta. Na sreću, zahvaljujući rezervnoj opremi unutar samih aviona, do nesreće ipak nije došlo. Uzrok gubitka veze bila je greška prekoračenja u brojaču milisekundi u okviru sistema za komunikaciju sa avionima. Da ironija bude veća, ova greška je bila ranije otkrivena, ali pošto je do otkrića došlo kada je već sistem bio isporučen i instaliran na nekoliko aerodroma, njegova jednostavna popravka i zamena nije bila moguća. Umesto toga, preporučeno je da se sistem resetuje svakih 30 dana kako do prekoračenja ne bi došlo. Procedura nije ispoštovana i greška se javila posle tačno 2<sup>32</sup> milisekundi, odnosno 49.7 dana od uključivanja sistema.

Pad satelita [Kriosat](https://en.wikipedia.org/wiki/CryoSat-1) 2005. koštao je Evropsku Uniju oko 135 miliona evra. Pad je uzrokovan greškom u softveru zbog koje nije na vreme došlo do razdvajanja satelita i rakete koja ga je nosila.

![](http://space.skyrocket.de/img_sat/cryosat__1.jpg)

Više od pet procenata penzionera i primalaca socijalne pomoći u Nemačkoj je privremeno ostalo bez svog novca kada je 2005. godine uveden novi računarski sistem. Greška je nastala zbog toga što je sistem, koji je zahtevao desetocifreni zapis svih brojeva računa, kod starijih računa koji su imali osam ili devet cifara brojeve dopunjavao nulama, ali sa desne umesto sa leve strane kako je trebalo.

Kompanije Dell i Apple su tokom 2006. godine morali da korisnicima zamene više od pet miliona laptop računara zbog greške u dizajnu baterije kompanije Sony koja je uzrokovala da se nekoliko računara zapali.

### Izvori

- Violeta Tomašević, *Razvoj aplikativnog softvera*, Beograd, 2012.
- Predrag Janičić i Filip Marić, *PROGRAMIRANJE 2, Osnove programiranja kroz programski jezik C*, Beograd, 2017.
- Wikipedia, [Spisak softverskih grešaka](https://en.wikipedia.org/wiki/List_of_software_bugs)
