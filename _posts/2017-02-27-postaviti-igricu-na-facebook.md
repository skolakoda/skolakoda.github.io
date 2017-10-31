---
layout: post
title: Kako postaviti igricu na fejs?
author: damjan
tags: [facebook-apps, gamedev]
image: /images/tenkici-fb.png
---
[![]({{page.image}})](https://apps.facebook.com/igrica-tenkici/)

Prvi put kada sam postavljao igricu na fejs, trebalo mi je 2 nedelje. Drugi put sam sve završio za par sati. Cilj ovog tutorijala je da vam olakša ceo proces.

Pretpostavljam, naravno, da već imate gotovu web igricu koju želite da postavite (ovo nije gamedev tutorijal).

## Korak 1: Postavljanje igrice na net

Za početak, moraš imati igricu postavljenu na net. Glavna začkoljica je što se mora nalaziti na `https` protokolu, umesto standardnog `http`-a. HTTPS je sigurni protokol, koji se plaća dosta skuplje od običnog. Na primer, sigurna adresa `https://example.com` je značajno skuplja od `http://example.com`.

Postoje i neke besplatne alternative od kojih je najpoznatija [heroku](https://www.heroku.com), platforma za developere, gde se sve radi preko komandne linije.

Facebook nudi i opciju `Simple Application Hosting`, koju nisam isprobao, ali piše da podržava hosting aplikacija do 500 mb.

## Korak 2: Otvaranje fb developer naloga

Ovo je lako: [developers.facebook.com](https://developers.facebook.com/)

## Korak 3: Kreiranje prazne aplikacije

Nađeš dugme `Add New App` (nalazi se u padajućem meniju) i popuniš par polja. Faktički kreiraš praznu aplikaciju.

## Korak 4: Podešavanja

Na novoj fb aplikaciji nađeš dugme `Settings`. Možeš sve popunjavati ručno, ali je lakše da izabereš `Quick Start` i pratiš korake. Izabereš platformu `Facebook Canvas` ako želiš mogućnost da se koristi na fejsu.

Na jednom od koraka ćeš dobiti parče fb koda, koje prekopiraš u `index.html`, odmah na početku `body` taga:

```html
<script>
  window.fbAsyncInit = function() {
    FB.init({
      appId      : '1766474963680117',
      xfbml      : true,
      version    : 'v2.8'
    });
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "//connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));
</script>
```

Potom uneseš željenu adresu na fejsbuku (`namespace`) i što je najvažnije spoljašnji `https` link na kome se nalazi tvoja igrica. Popunjena osnovna podešavanja izgledaju otprilike ovako:

![fb-settings]({{site.baseurl}}/images/koncepti/fb/fb-settings.png)

Facebook će ti ponuditi da integrišeš i `Facebook Login`, ali to je opciono.

## Korak 5: Prihvatanje POST zahteva

Kada sve završiš, dobićeš link tvoje nove aplikacije na fejsbuku (npr. [apps.facebook.com/magic-drawing](https://apps.facebook.com/magic-drawing/)), ali će, po svemu sudeći, prvo što ugledaš biti greška:

![fb-settings]({{site.baseurl}}/images/koncepti/fb/fb-error.png)

(može pisati i nešto drugo)

Iz nekog razloga, facebook pokušava da pristupi tvojoj stranici preko `POST` a ne preko standardnog `GET` zahteva. Ovaj problem rešavamo sa backenda, tako što prihvatamo i POST zahtev.

Dakle, pored standardnog serviranja index stranice na `GET` zahtev:

```js
app.get('/', function(request, response) {
  response.render('pages/index')
})
```

Potrebno je da dodamo i `POST`:

```js
app.post('/', function(request, response) {
  response.render('pages/index')
})
```

(primeri su nodejs-u)

## Korak 6: Objavljivanje

Ako si uspešno prošao sve prethodne korake, sada možeš videti svoju igricu na fejsbuku. Jedini je problem što je još uvek vidiš samo ti (nije javna).

Ponovo odeš na svoj fb developer nalog, izabereš aplikaciju i onda u bočnom meniju nađeš dugme 'App Review'. Na toj strani ti je prva opcija da učiniš svoju aplikaciju javnom.

## Korak 7: Integracija

Integracija sa fejsbukom je zapravo priča za sebe. Ali samo da napomenem da facebook API pruža mogućnost za login preko fb naloga, pozivanje prijatelja da igraju, i još gomilu socijalnih funkcija.

Za neke od mogućnosti, na primer da gledaš podatke igrača svoje igrice, ti je potrebno odobrenje od fejsbuka. Za odobrenje se aplicira na 'App Review' stranici.
