# Sajt Škole koda

Sajt Škole koda je napravljen u [Jekyll-u](https://jekyllrb.com/) i postavljen na Github stranice. Umesto pisanja HTML-a za jednostavnije strane se uglavnom koristi [markdown](https://guides.github.com/features/mastering-markdown/) sintaksa (kao u README.md fajlu). Naravno, moguće je koristiti i običan html.

Za početak, najbolje je isprobati Jekyll pre nego što počnete doprinositi. 

## Instalacija

Prvo instaliraš [ruby](https://rubyinstaller.org/downloads/). Potom:

```
gem install bundler
gem install jekyll
bundle install
```

Ako neće, probati sa `sudo`.

## Razvoj

Sledeća komanda pokreće build proces:

```
bundle exec jekyll serve
```

Ili ako samo menjaš html stranice (ignoriše promenu css i js):

```
bundle exec jekyll serve --incremental
```

## Vodič za uređivanje

Glavni folderi su:

- `_includes` - tu se nalaze delovi html stranica (npr. header, footer)
- `kursevi` - ovde idu lekcije za sve online kurseve koje objavljujemo.
- `stranice` - glavne statične stranice sajta, poput O nama, Projekti, Kursevi, Kontakt i slično.

Folderi koji su deo `Jekyll`-a počinju donjom crtom, a ostali su custom folderi.

## TODO

- preći napredni js
  - možda spojiti node.js
- preraditi sajt da naglasak bude na postojeće kurseve i module (npr projektni obrasci, tipovi podataka i slično)
  - polica sa knjigama https://jsfiddle.net/mudroljub/xbwhc9mr/3/
- https://damjanpavlica.wordpress.com/category/programiranje/zen-programiranja/
