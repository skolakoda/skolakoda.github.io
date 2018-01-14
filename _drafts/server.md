1.13. Web server
Web server je specijalizovani softver koji se fizički nalazi instaliran na nekom
računaru, koga takođe žargonski zovemo web server. Primarna uloga web servera
je da se na njemu hostuju web sajtovi ili web aplikacije i na taj način postanu
dostupne na Internetu. Web server se instalira na računaru koji mora da ima
statičku (nepromenljivu) IP adresu, da bi bio jedinstveno prepoznatljiv na
Internetu. Primarna karakteristika web servera je da ume da prihvata http request-
ove i da generiše http response-e. Glavna funkcionalnost web servera je da po
dobijanju http request-a ispravno protumači zahtev, pronađe željeni resurs,
procesira ga i pripremi za slanje u formi http response-a. Na primer, to
podrazumeva da kada browser kroz http request zahteva sadržaj određene web
strane, web server treba da tu stranicu pronađe, pripremi za slanje i pošalje, a
nakon toga isporuči sve druge fajlove koje ta strana sadrži a koje će browser
zahtevati (npr. slike, audio fajlove i sl.), da bi korisnik u browser-u video
celokupnu web stranu.
Trenutno tri najpopularnija web servera su: Apache, Microsoft -IIS i Igor Sysoev
- nginx. Prema podacima sa sajta http://news.netcraft.com zastupljenost web
servera, za aktivne web sajtove, na početku 2014. godine je: Apache (54,5%),
Microsoft (11,61%) IIS, Nginx (11.97%) dok je Google-ov GWS zastupljen sa
8.54%. Prema podacima sa sajta http://w3techs.com/, na početku 2015.
zastupljenost je: Apache (58,7%), Nginx (23%), Microsoft (13,2%) IIS, dok je
Google-ov server zastupljen sa 1.3%.

Jedna od ključnih razlika između web servera su uslovi korišćenja, cene i
dostupnost pojedinih provajdera koji nude korišćenje pojedinih web servera.
Trenutno najpopularniji Apache je besplatan, pod određenim licencama, dok je
recimo Microsoft IIS, kao vlasnički kod, među skupljima i manje zastupljenim u
ponudi provajdera, jer najčešće mora imati podršku i drugih licenciranih softvera
(operativnog sistema, baze podataka, i sl.).
Obzirom na pojavu novih web servera i kvalitet usluge istih, na slici 1.11. je
ilustrovana zastupljenost pojedinih web servera za nekoliko prethodnih godina,
na nivou celog sveta, što ukazuje na velike fluktuacije na tržištu.
