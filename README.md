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
- `_posts` - ove se pišu članci za blog
- `_sass` - tu se piše CSS u Sass-u, odnosno `scss` formatu. Sam CSS je organizovan u podfoldere.
- `kursevi` - ovde idu lekcije za sve online kurseve koje objavljujemo.
- `stranice` - glavne statične stranice sajta, poput O nama, Projekti, Kursevi, Kontakt i slično.

Folderi koji su deo `Jekyll`-a počinju donjom crtom, a ostali su custom folderi.

## TODO

- dodavati odgovarajuce citate
- dodati sve primere na kurseve (https://jsfiddle.net/user/mudroljub/fiddles/, i iz komtrejda, spojiti oop javu...)
- razvoj igara
    - http://www.metropolitan.ac.rs/files/newsletter/2017/12/game.svg
    - https://www.raf.edu.rs/citaliste/svastara/3650-istorija-video-igara
- preraditi sajt da naglasak bude na postojeće kurseve i njihove module (npr projektni obrasci, tipovi podataka i slično)
- https://damjanpavlica.wordpress.com/category/programiranje/zen-programiranja/
- popraviti izvršenje koda
    - probati https://onecompiler.com/apis/code-execution