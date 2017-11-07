# Škola koda

Učimo narod programiranju!

Poseti nas na [skolakoda.org](https://skolakoda.org/)

## Preduslovi

Prvo instaliraš [ruby](https://rubyinstaller.org/downloads/). Potom:

```
gem install bundler
gem install jekyll
```

## Razvoj

```
bundle install
bundle exec jekyll serve
```

### Parametri

Da uključi i neobjavljene skice članaka:
```
bundle exec jekyll serve --drafts
```

Da prikazuje samo poslednji post:
```
bundle exec jekyll serve --limit_posts 1
```

Da pravi samo ono što je menjano (najbrže ali eksperimentalno)
```
bundle exec jekyll serve --incremental
```

## TODO

- seo:
  https://search.google.com/structured-data/testing-tool
  ```
  <script type="application/ld+json">
{
  "@context": "http://schema.org",
  "@type": "Course",
  "name": "Introduction to Computer Science and Programming",
  "description": "Introductory CS course laying out the basics.",
  "provider": {
    "@type": "Organization",
    "name": "University of Technology - Eureka",
    "sameAs": "http://www.ut-eureka.edu"
  }
}
</script>
  ```
- napraviti letke
- vratiti decji kurs
- dodati js editor
http://qnimate.com/create-an-frontend-editor-with-code-highlighting-and-execution/
https://code.tutsplus.com/tutorials/create-a-wysiwyg-editor-with-the-contenteditable-attribute--cms-25657
https://stackoverflow.com/questions/6007242/how-to-create-a-rich-text-editor
  - mogu redefinisati console.log?
  https://stackoverflow.com/questions/16616722/sending-all-javascript-console-output-into-a-dom-element
  https://stackoverflow.com/questions/11403107/capturing-javascript-console-log
- poraditi na drustvenim mrezama (growthhack)
  - instagram:
  https://medium.freecodecamp.org/my-open-source-instagram-bot-got-me-2-500-real-followers-for-5-in-server-costs-e40491358340

<!--
sadrzaj:
https://www.toptal.com/algorithms/computability-theory-complexity
https://profesorka.wordpress.com/2012/06/11/pokazivaci-3/
https://profesorka.wordpress.com/2012/06/24/nizovi-2/

slike:
https://pixabay.com/en/children-win-success-video-game-593313/
https://pixabay.com/en/apple-brick-wall-computer-cup-1854101/
https://pixabay.com/en/apple-computer-cup-electronics-1853306/
https://pixabay.com/en/cyber-glasses-virtual-virtual-world-1938449/
https://damjanpavlica.files.wordpress.com/2014/04/stari-programer.jpg
vr: http://www.vrupple.com/wp-content/uploads/2016/11/headset-footer.jpg
-->