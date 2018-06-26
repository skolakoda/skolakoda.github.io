---
title: Kontakt
permalink: /kontakt
opis: Slobodno nas kontaktiraj u vezi sa bilo čim.
---

# Kontakt

<p>Slobodno nas kontaktiraj u vezi sa bilo čim.</p>

<address>
  <p><span class="">✉</span> Email: info&#x40;skolakoda.org</p>

  <p><span class="">✆</span> Telefon: <a href="tel:+381659777253">065/9777-253</a></p>

  <p><span class="">☖</span> Adresa: Pavla Pavlovića 2b, Zvezdara, Beograd.</p>
</address>

<h2>Ostavi poruku</h2>

<form action="https://formspree.io/mudroljub@gmail.com" method="POST">
  <label for="poruka">Poruka</label><br>
  <textarea name="poruka" id="poruka" required></textarea><br>
  <label for="email">Email</label><br>
  <input type="email" name="email" id="email" required><br>
  <button class="full" type="submit">Pošalji</button>
</form>


<script type="application/ld+json">
{
  "@context": "http://schema.org",
  "@type": "Organization",
  "name": "Škola koda",
  "url": "{{site.url}}",
  "logo": "{{site.logo}}",
  "contactPoint": [{
    "@type": "ContactPoint",
    "telephone": "+381-65-9777-253",
    "contactType": "customer service"
  }]
}
</script>
