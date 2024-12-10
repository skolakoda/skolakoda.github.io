---
title: Matrica refleksije
layout: lekcija-razvoj-igara
permalink: /matrica-refleksije
---

![](/images/razvoj-igara/reflection.png)

**Matrica refleksije služi za preslikavanje predmeta ili celokupnog prostora preko određene ose ili ravni, stvarajući njihov odraz.**

Refleksije ili odrazi su simetrične transformacije.

## 2D refleksije

Odraz preko x ose (horizontalna refleksija):

```
[1,  0]
[0, -1]
```

Odraz preko y ose (vertikalna refleksija):

```
[-1, 0]
[ 0, 1]
```

Odraz preko dijagonale y = x:

```
[ 0,  1]
[ 1,  0]
```

Odraz preko dijagonale y = -x:

```
[ 0, -1]
[-1,  0]
```

## 3D refleksije

### Odrazi preko osa

Odraz preko x-ose (obrće y i z koordinate):  
```  
1  0  0  
0 -1  0  
0  0 -1  
```  

Odraz preko y-ose (obrće x i z koordinate):  
```  
-1  0  0  
 0  1  0  
 0  0 -1  
```  

Odraz preko z-ose (obrće x i y koordinate):  
```  
-1  0  0  
 0 -1  0  
 0  0  1  
```  

### Odrazi preko ravni

Odraz preko xy-ravni (obrće z koordinatu):  
```  
1  0  0  
0  1  0  
0  0 -1  
```  

Odraz preko xz-ravni (obrće y koordinatu):  
```  
1  0  0  
0 -1  0  
0  0  1  
```  

Odraz preko yz-ravni (obrće x koordinatu):  
```  
-1  0  0  
 0  1  0  
 0  0  1  
```
