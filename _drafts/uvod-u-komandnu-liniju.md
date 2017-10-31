---
title: Uvod u Unix komandnu liniju za front-end developere
layout: post
author: damjan
tags: [terminal, unix, linux]
---

Komandna linija je tradicionalno polje za programere zadnjeg kraja weba, back-end developere i server administratore.

Sa neslućenim usložljavanjem situacije na front(end)u, komandna linija, zajednička za Linux, Mac i ostale operativne sisteme zasnovane na Unixu, postala je svima nezaobilazni deo posla.

## Navigacija

```
pwd
```

```
cd
```

```
ls
```

Otvara trenutni folder u file exploreru:
```
nautilus .
```

Otvara nezavisno od terminala:
```
nohup (ili)
setsid
```

## Rad sa udaljenim serverom

### Kopiranje sa servera na lokal

```
scp gorran01@znaci.net:public_html/damjan/ukljuci/povezivanje.php ukljuci/povezivanje.php
```

## Rad sa fajlovima

### Premešta fajlove

Nalazi sve `.mobi` fajlove rekurzivno u podfolderima i premešta ih:
```
find . -name "*.mobi" -exec mv -t literatura/za-citac/ {} +
```

### Rekurzivno nalazi i briše fajlove

Prvo nalazi:
```
find . -name "*.spec.js" -type f
```

Potom briše:
```
find . -name "*.spec.js" -type f -delete
```

### Preimenuje fajlove

Menja sve nazive fajlova u mala slova:
```
rename 'y/A-Z/a-z/' *
```

### Menja ekstenziju

Menja ekstenziju u mala slova:
```
rename 's/\.MD$/.md/' *.MD
```

Menja ekstenziju u mala slova u podfolderima:
```
rename 's/\.MD$/.md/' */*.MD
```

### Broji fajlove

Prikazuje ukupan broj fajlova:
```
find . -type f | wc -l
```

Prikazuje broj fajlova po direktorijima za trenutni nivo:
```
du -a | cut -d/ -f2 | sort | uniq -c | sort -nr
```

Prikazuje broj fajlova po direktorijima i poddirektorijima:
```
find . -type d -print0 | while read -d '' -r dir; do
    files=("$dir"/*)
    printf "%5d files in directory %s\n" "${#files[@]}" "$dir"
done
```

### Brisanje punog direktorija

Nekad `rm -rf` nece da obrise dir (ako ima nevidljivih i sl). Tada mora:

```
rm -R dir
```

## Rad sa tekstom

### Nalazi i menja tekst

Nalazi i menja svaki `tga` sa `png` u fajl.txt:
```
sed -i -- 's/tga/png/g' fajl.txt
```

## Rad sa slikama

### Menja format slika

Menja image format:
```
convert image.tga image.png
```
Može i masovno:
```
mogrify -format tga *.png  
```
ili
```
for i in *.tga ; do convert "$i" "${i%.*}.png" ; done
```

## Korisnici i ovlašenja

### Koja sam user grupa:

```
groups $(whoami)
ili
groups $(whoami) | cut -d' ' -f1
```

## Korisne alatke

### Konzola u boji

Za konzolu u boji, edituj `.bashrc` u home:
```
cd
nano .bashrc
```

### Prikazuje ko zauzima mesto na disku

Prikazuje sve:
```
du -h
```

Prikazuje samo velike potrosace (vise od giga):
```
du -h | grep '[0-9\.]\+G'
```

### Štampa čitljiv $PATH:
```
tr : '\n' <<<$PATH
```

PATH is an environment variable on Unix-like operating systems, DOS, OS/2, and Microsoft Windows, specifying a set of directories where executable programs are located.

### Apache

Proverava apache (apache nece da krene kad se obrise log folder!) :
```
sudo apachectl configtest
```
