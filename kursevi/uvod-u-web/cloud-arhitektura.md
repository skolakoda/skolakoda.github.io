---
title: Cloud arhitektura
layout: lekcija-web
permalink: /cloud-arhitektura
image: /images/koncepti/cloud-arhitektura.jpg
---

![]({{page.image}})

**Arhitektura oblaka (*cloud architecture*) se odnosi na dizajn i organizaciju komponenti sistema u oblaku, uključujući aplikacije, baze podataka, mreže, sigurnost i infrastrukturu.** Služi projektovanju i integraciji različitih komponenti oblaka kako bi sistem bio efikasan, skalabilan i siguran.

Neki primeri arhitekture oblaka uključuju:

- Korišćenje Azure Front Door-a za balansiranje opterećenja (*load balancing*).
- Dizajn sistema sa mikroservisima koristeći Kubernetes na Azure-u.
- Implementacija CI/CD pipelines kroz Azure DevOps.

Razvoj oblaka (*cloud development*) se odnosi na proces razvoja softverskih rešenja koristeći resurse i servise u oblaku, fokusirajući se na aplikacije koje se hostuju, skaliraju i integrišu u cloud okruženju.

## Cloud modeli
- **IaaS (Infrastructure as a Service)**: Pruža virtuelne servere, mreže i skladište (npr. Azure Virtual Machines).
- **PaaS (Platform as a Service)**: Omogućava razvoj aplikacija bez brige o infrastrukturi (npr. Azure App Service).
- **SaaS (Software as a Service)**: Kompletne aplikacije dostupne korisnicima (npr. Microsoft 365).
   
## Prednosti

- **Skalabilnost**: Dinamično povećavanje resursa na osnovu potreba.
- **Fleksibilnost**: Razvoj aplikacija koje se mogu pokretati iz bilo kog regiona.
- **Bezbednost**: Cloud provajderi implementiraju napredne sigurnosne protokole.
- **Plaćanje prema korišćenju**: Resursi se plaćaju samo kada se koriste.

## Nedostaci

- **Ovisnost o cloud provajderu (*vendor lock-in*)**: Prelazak na drugi oblak može biti komplikovan i skup.  
- **Gubitak kontrole**: Organizacije nemaju potpunu kontrolu nad infrastrukturom.  
- **Problemi sa privatnošću**: Podaci mogu biti podložni zakonima drugih zemalja.  
- **Bezbednost**: Podaci mogu biti podložni napadima jer se čuvaju na serverima trećih strana.  
- **Troškovi**: Neoptimizovano korišćenje može dovesti do visokih troškova.  

## Literatura 

- Gabriel Baptista, Francesco Abbruzzese, *Software Architecture with C# 12 and .NET 8*, 2024.