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

- srediti jebeni css
- teorija razvoja igara
    - http://www.metropolitan.ac.rs/files/newsletter/2017/12/game.svg
    - https://www.raf.edu.rs/citaliste/svastara/3650-istorija-video-igara
- spojiti primere iz razvoja igara
- dodati sve primere na kurseve (https://jsfiddle.net/, i iz komtrejda, spojiti oop javu...)
- pokušati proksi za hacker rank na azure
- preraditi sajt da naglasak bude na postojeće kurseve i module (npr projektni obrasci, tipovi podataka i slično)
- https://damjanpavlica.wordpress.com/category/programiranje/zen-programiranja/


Programiranje igara je široka oblast koja uključuje geometriju (posebno trigonometriju), matematiku, fiziku i veštačku inteligenciju. Za 3D grafiku je posebno bitna linearna algebra.

Pitagora, Dekart i Njutn su trojica likova nezaobilaznih u razvoju igara. Posebno Pitagorina teorema, Dekartov koordinatni sistem i Njutnovi zakoni. U 3D programiranju je nezaobilazan Ojler, poznat po Ojlerovim uglovima i još koječemu.