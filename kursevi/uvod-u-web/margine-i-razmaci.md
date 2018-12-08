---
title: Margine i razmaci
layout: lekcija-html
permalink: /margine-i-razmaci
---

Unutrašnji razmak (*padding*) je praznina unutar elementa, a margina je praznina izvan elementa, čime se element odvaja od elemenata koji ga okružuju.

## Kolabiranje margina

U CSS-u, horizontalne margine se nikada ne sažimaju. Ako stavimo dva elementa sa horizontalnim marginama jedan do drugog, obe margine će se pojaviti na stranici. 

Međutim, vertikalne margine kolabiraju. Kada su dva elementa sa marginama jedan pored drugog, koristi se samo veća vertikalna margina. Na primer, ako je `<div>` sa donjom marginom od 40 piksela iznad elementa `<div>` sa gornjom marginom od 20 piksela, margina između ova dva elementa će biti 40 piksela, a ne 60.
